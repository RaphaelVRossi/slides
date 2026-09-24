---
layout: intro
highlighter: shiki
css: unocss
transition: fade-out
title: "Astra: meu chat quase assistente"
exportFilename: chat-engine-astra
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
routerMode: hash
glow: 'center'
glowOpacity: 0.3
glowSeed: '117'
---

# Astra

Meu chat quase assistente

<div class="pt-12 text-sm opacity-70">
Golang SP & Stone #117
</div>

---
transition: fade-out
layout: image-right
image: /raphael.jpg
class: my-cool-content-on-the-left
backgroundSize: contain
glow: 'bottom-left'
glowOpacity: 0.25
glowSeed: 8
---

# Rapha

Staff SWE @ Stone

- 💻 +10 anos deployando bug em prod
- ☕️ Java / 🐍 Python / ⬡ Node / 🐹 Go
- 🌎 Dev opensource do Thumbor
- 🎮 Jogador de Magic
- 🐱 2 gatos em casa

---
transition: fade-out
layout: quote
glow: 'top-right'
glowOpacity: 0.25
glowSeed: 42
---

# Assinei o ChatGPT. E agora?

Tenho quase todo o conteúdo do mundo a uma pergunta de distância.

Mas e o meu contexto?

---
transition: fade-out
layout: quote
glow: 'center'
glowOpacity: 0.24
glowSeed: 10
---

# A ideia

Como construir IA usando IA?

E se eu criasse meu próprio chat local?

---
transition: fade-out
glow: 'left'
glowOpacity: 0.22
glowSeed: 6
---

# Pi Agent

<img src="/pi.png" class="max-h-80 mx-auto" />

<div class="pt-8 opacity-70">
O pi cuida de provider, modelo, credenciais e conversa com a LLM.
</div>

---
transition: fade-out
glow: 'bottom-right'
glowOpacity: 0.18
glowSeed: 7
---

# Pi como motor da LLM

```bash
pi --mode rpc
```

Toda conversa vira eventos JSONL.

```json
{"id":"prompt-1","type":"prompt","message":"Olá"}
```

---
transition: fade-out
layout: quote
glow: 'full'
glowOpacity: 0.16
glowSeed: 3
---

# E agora?

Tenho o motor.

Falta a casca.

E o meu contexto.

---
transition: fade-out
glow: 'center'
glowOpacity: 0.22
glowSeed: 5
---

# Como fica

<div class="architecture-slide">
  <div class="architecture-row">
    <div class="arch-box">Usuário</div>
    <div class="arch-arrow">→</div>
    <div class="arch-box arch-main">Astra</div>
    <div class="arch-arrow arch-labeled"><span>JSONL RPC</span>→</div>
    <div class="arch-box">pi</div>
    <div class="arch-arrow">→</div>
    <div class="arch-box">LLM</div>
  </div>

  <div class="architecture-db">
    <div class="arch-db-line">↙ ↓ ↘</div>
    <div class="arch-caption">wiki · clima · servidores · memória</div>
  </div>
</div>

---
transition: fade-out
glow: 'left'
glowOpacity: 0.18
glowSeed: 11
---

# LLM Wiki

Minha wiki pessoal, escrita por mim, curada com IA.

O Astra busca trechos relevantes e envia só o necessário para a LLM.

<div class="pt-8 opacity-70">
Markdown local, offline, somente leitura e sem mandar a wiki inteira.
</div>

---
transition: fade-out
layout: center
glow: 'right'
glowOpacity: 0.18
glowSeed: 12
---

# Skills básicas

<div class="text-left text-3xl leading-14">

- Wiki
- Temperatura
- Servidores
- Memória

</div>

---
transition: fade-out
layout: quote
glow: 'topmost'
glowOpacity: 0.25
glowSeed: 14
---

# O ponto

A LLM não controla o sistema.

O Astra controla o que chega na LLM.

---
transition: fade-out
layout: center
glow: 'full'
glowOpacity: 0.15
glowSeed: 13
---

# Demo

<div class="text-left max-w-160 mx-auto">

- Conversar pelo webchat local
- Perguntar algo da wiki
- Perguntar a temperatura atual
- Perguntar a saúde dos servidores
- Salvar algo com `/note`

</div>

---
transition: fade-out
layout: center
glow: 'bottom'
glowOpacity: 0.25
glowSeed: 17
---

# Dúvidas?

Obrigado!
