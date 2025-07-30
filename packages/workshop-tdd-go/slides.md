---
layout: center
highlighter: shiki
css: unocss
transition: fade-out
title: Workshop - TDD em Go
exportFilename: workshop-tdd-golang
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
routerMode: hash
glow: 'center'
glowOpacity: 0.3
glowSeed: '256'
---

# Workshop - TDD em Go

Não é só fazer o teste primeiro

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Partiu? <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
layout: image-right
image: /raphael.jpg
class: my-cool-content-on-the-left
backgroundSize: contain
glow: 'bottom-left'
glowOpacity: 0.3
glowSeed: 8
---

# Raphael Rossi
Senior Software Engineer @ Stone

Fatec São Bernardo

- 💻 +10 anos deployando bug em prod
  - Java ☕️ / Python 🐍 / Node ⬡
- 🌎 Dev opensource do Thumbor
- 🎮 Jogador de Magic
- 🐱 2 gatos em casa

---
transition: fade-out
layout: image-right
image: /test.png
class: my-cool-content-on-the-left
backgroundSize: contain
glow: 'left'
glowSeed: 52
glowOpacity: 0.3
glowSeed: 350
---

# TDD?
Teste depois do deploy?


---
transition: fade-out
layout: image
image: /red-blue-green.png
backgroundSize: 40em 80%
glow: 'top-left'
glowSeed: 25
style: color
glowOpacity: 0.3
glowSeed: 250
---

# Metodologia

---
transition: fade-out
glow: 'bottom-right'
glowOpacity: 0.3
glowSeed: 250
---

# Caso de uso

<span>Sistema de ordem de compra</span>

<div mt-6 />

<div flex gap-2>
  <div v-click flex-1>
    <div
      border="2 solid cyan-800" bg="cyan-800/20"
      rounded-lg overflow-hidden
    >
      <div bg="cyan-800/40" text-xl px-4 py-2 flex items-center>
        <span font-bold>Atual</span>
      </div>
      <div px-4 py-3>
        <div font-mono text-base bg="black/30" rounded-lg p-2>
            <ul>
                <li>Usuário consegue criar ordem</li>
                <li>É possível adicionar itens na ordem</li>
                <li>Visualizar o custo da ordem completa</li>
            </ul>
        </div>
      </div>
    </div>
  </div>

  <div v-click flex-1 pl-4>
    <div
      border="2 solid pink-600" bg="pink-600/20"
      rounded-lg overflow-hidden
    >
      <div bg="pink-600/40" text-xl px-4 py-2 flex items-center>
        <span font-bold>Para implementar</span>
      </div>
      <div px-4 py-3>
        <div font-mono text-base bg="black/30" rounded-lg p-2>
            <ul>
                <li>Remover itens de uma ordem</li>
                <li>Adicionar cupom de desconto</li>
                <li>Custo de envio</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>

---
transition: fade-out
layout: image-right
image: /linkedin-qrcode.png
class: my-cool-content-on-the-left
backgroundSize: 20em 55%
glow: 'left'
glowOpacity: 0.3
glowSeed: 304
---

# Obrigado!

<div class="">
    <div>
        <carbon-logo-github/>
        <a href="https://github.com/raphaelvrossi" target="_blank">RaphaelVRossi</a>
    </div>
    <br>
    <div>
        <carbon-logo-linkedin/>
        <a href="https://www.linkedin.com/in/rapha-rossi/" target="_blank">rapha-rossi</a>
    </div>
    <br>
    <div>
        <carbon-email/>
        <a href="mailto:contact@raphaelrossi.io" target="_blank">contact@raphaelrossi.io</a>
    </div>
</div>
