<script setup lang="ts">
import { useNav } from '@slidev/client'
import seedrandom from 'seedrandom'
/**
 * A new glow effect system powered by blured polygons
 *
 * Credits to @pi0 @Atinux
 *
 * Properties:
 * - glow: 'left' | 'right' | 'top' | 'bottom' | 'full' -  Distribution of the polygons points
 * - glowOpacity: number - Opacity of the polygons (4)
 * - glowHue: number - Hue shift for the polygons (default: 0)
 * - glowSeed: string | false - Seed for the stable random distribution (default: 'default')
 */
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'

const { currentSlideRoute } = useNav()

export type Range = [number, number]

export type Distribution =
  | 'full'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'topmost'

const formatter = computed(() => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {})
const distribution = computed(() => (formatter.value.glow || 'full') as Distribution)
const opacity = computed<number>(() => +(formatter.value.glowOpacity ?? 0.1))
const hue = computed<number>(() => +(formatter.value.glowHue || 0))
const seed = computed<string>(() => (formatter.value.glowSeed === 'false' || formatter.value.glowSeed === false)
  ? Date.now().toString()
  : formatter.value.glowSeed || 'default',
)

function glowColor(layer: 1 | 2 | 3, side: 'from' | 'to', fallback: string) {
  const colors = formatter.value.glowColors?.[layer - 1]
  const fromColor = Array.isArray(colors) ? colors[0] : undefined
  const toColor = Array.isArray(colors) ? colors[1] : undefined
  return formatter.value[`glow${layer}${side === 'from' ? 'From' : 'To'}`]
    || (side === 'from' ? fromColor : toColor)
    || fallback
}

const glow1From = computed(() => glowColor(1, 'from', 'var(--rossi-glow-1-from, #00B686)'))
const glow1To = computed(() => glowColor(1, 'to', 'var(--rossi-glow-1-to, #008060)'))
const glow2From = computed(() => glowColor(2, 'from', 'var(--rossi-glow-2-from, #00B686)'))
const glow2To = computed(() => glowColor(2, 'to', 'var(--rossi-glow-2-to, #1A8790)'))
const glow3From = computed(() => glowColor(3, 'from', 'var(--rossi-glow-3-from, #00B686)'))
const glow3To = computed(() => glowColor(3, 'to', 'var(--rossi-glow-3-to, #909090)'))
const overflow = 0.3
const disturb = 0.3
const disturbChance = 0.3

function distributionToLimits(distribution: Distribution) {
  const min = -0.2
  const max = 1.2
  let x: Range = [min, max]
  let y: Range = [min, max]

  function intersection(a: Range, b: Range): Range {
    return [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
  }

  const limits = distribution.split('-')

  for (const limit of limits) {
    switch (limit) {
      case 'topmost':
        y = intersection(y, [-0.5, 0])
        break
      case 'top':
        y = intersection(y, [min, 0.6])
        break
      case 'bottom':
        y = intersection(y, [0.4, max])
        break
      case 'left':
        x = intersection(x, [min, 0.6])
        break
      case 'right':
        x = intersection(x, [0.4, max])
        break
      case 'xcenter':
        x = intersection(x, [0.25, 0.75])
        break
      case 'ycenter':
        y = intersection(y, [0.25, 0.75])
        break
      case 'center':
        x = intersection(x, [0.25, 0.75])
        y = intersection(y, [0.25, 0.75])
        break
      case 'full':
        x = intersection(x, [0, 1])
        y = intersection(y, [0, 1])
        break
      default:
        break
    }
  }

  return { x, y }
}

function distance2([x1, y1]: Range, [x2, y2]: Range) {
  return (x2 - x1) ** 2 + (y2 - y1) ** 2
}

/**
 * usePloy agora retorna { poly, jumpPoints } para que possamos acionar jumps periódicos
 */
function usePloy(number = 16) {
  function getPoints(): Range[] {
    const limits = distributionToLimits(distribution.value)
    const rng = seedrandom(`${seed.value}-${Math.random() * 10}`)
    function randomBetween([a, b]: Range) {
      return rng() * (b - a) + a
    }
    function applyOverflow(random: number, overflow: number) {
      random = random * (1 + overflow * 2) - overflow
      return rng() < disturbChance ? random + (rng() - 0.5) * disturb : random
    }
    return Array.from({ length: number })
      .fill(0)
      .map(() => [
        applyOverflow(randomBetween(limits.x), overflow),
        applyOverflow(randomBetween(limits.y), overflow),
      ])
  }

  const points = ref(getPoints())
  const poly = computed(() => points.value.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(', '))

  function jumpPoints() {
    const newPoints = new Set(getPoints())
    points.value = points.value.map((o) => {
      let minDistance = Number.POSITIVE_INFINITY
      let closest: Range | undefined
      for (const n of newPoints) {
        const d = distance2(o, n)
        if (d < minDistance) {
          minDistance = d
          closest = n
        }
      }
      newPoints.delete(closest)
      return closest!
    })
  }

  watch(currentSlideRoute, () => {
    jumpPoints()
  })

  return { poly, jumpPoints }
}

const { poly: poly1, jumpPoints: jump1 } = usePloy(10)
const { poly: poly2, jumpPoints: jump2 } = usePloy(6)
const { poly: poly3, jumpPoints: jump3 } = usePloy(3)

/**
 * Timers para "animar" continuamente chamando jumpPoints.
 * Respeita prefers-reduced-motion.
 */
const timers: number[] = []

onMounted(() => {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion)
    return

  timers.push(window.setInterval(() => jump1(), 4000))
  timers.push(window.setInterval(() => jump2(), 5000))
  timers.push(window.setInterval(() => jump3(), 6000))
})

onBeforeUnmount(() => {
  for (const t of timers) {
    clearInterval(t)
    clearTimeout(t)
  }
  timers.length = 0
})
</script>

<template>
  <div>
    <div
      class="bg transform-gpu overflow-hidden pointer-events-none"
      :style="{ filter: `blur(60px) hue-rotate(${hue}deg)` }"
      aria-hidden="true"
    >
      <div
        class="clip"
        :style="{ 'clip-path': `polygon(${poly1})`, 'opacity': opacity, 'background': `linear-gradient(to right, ${glow1From}, ${glow1To})` }"
      />
      <div
        class="clip"
        :style="{ 'clip-path': `polygon(${poly2})`, 'opacity': opacity, 'background': `linear-gradient(to left, ${glow2From}, ${glow2To})` }"
      />
      <div
        class="clip"
        :style="{ 'clip-path': `polygon(${poly3})`, 'opacity': 0.2, 'background': `linear-gradient(to top, ${glow3From}, ${glow3To})` }"
      />
    </div>
  </div>
</template>

<style scoped>
.bg,
.clip {
  transition: all 2.5s ease;
}

.bg {
  position: absolute;
  inset: 0;
  z-index: -10;
}

.clip {
  clip-path: circle(15%);
  aspect-ratio: 16 / 9;
  position: absolute;
  inset: 0;
}

.light .clip {
  opacity: 1 !important;
}
</style>
