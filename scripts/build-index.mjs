import { copyFile, mkdir } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
await mkdir(new URL('dist/', root), { recursive: true })
for (const file of ['index.html', 'CNAME']) {
  await copyFile(new URL(file, root), new URL(`dist/${file}`, root))
}
console.log('Página inicial gerada em dist/index.html')
