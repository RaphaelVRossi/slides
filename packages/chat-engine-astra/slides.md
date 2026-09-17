---
layout: intro
highlighter: shiki
css: unocss
transition: fade-out
title: "Astra: construindo um chat engine em Go"
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

Construindo um chat engine em Go

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

# Raphael Rossi
Senior Software Engineer @ Stone

Fatec São Bernardo

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

# A pergunta

Como transformar uma LLM em um produto conversacional simples, testável e extensível usando Go?

---
transition: fade-out
layout: two-cols-header
glow: 'full'
glowOpacity: 0.16
glowSeed: 3
---

# O que é o Astra?

::left::

## Um MVP em Go

- CLI para conversar com LLM
- Webchat local
- Histórico em SQLite
- Sessões retomáveis
- Resumo e memória explícita

::right::

## Sem chamar LLM direto

O Go inicia o **pi em modo RPC** e conversa por JSONL.

```bash
pi --mode rpc
```

A configuração, credenciais e provider continuam no pi.

---
transition: fade-out
glow: 'center'
glowOpacity: 0.22
glowSeed: 5
---

# A arquitetura

<div class="architecture-slide">
  <div class="architecture-row">
    <div class="arch-box">Usuário</div>
    <div class="arch-arrow">→</div>
    <div class="arch-box">CLI / Webchat</div>
    <div class="arch-arrow">→</div>
    <div class="arch-box arch-main">chat-engine-astra</div>
    <div class="arch-arrow arch-labeled"><span>JSONL RPC</span>→</div>
    <div class="arch-box">pi</div>
    <div class="arch-arrow">→</div>
    <div class="arch-box">Provider LLM</div>
  </div>

  <div class="architecture-db">
    <div class="arch-db-line">↕</div>
    <div class="arch-cylinder">SQLite</div>
    <div class="arch-caption">histórico, sessões, resumos e memórias</div>
  </div>
</div>

---
transition: fade-out
glow: 'left'
glowOpacity: 0.22
glowSeed: 6
---

# Chamando o motor

```bash
go run ./cmd/astra "Olá! Explique RPC em uma frase."
```

```bash
# Continua a conversa usando o ID nativo do pi
go run ./cmd/astra -session <id> "Qual era meu nome?"
```

<div class="pt-8 opacity-70">
A aplicação não precisa reinventar autenticação, provider, modelo ou sessão nativa da LLM.
</div>

---
transition: fade-out
layout: two-cols-header
glow: 'bottom-right'
glowOpacity: 0.18
glowSeed: 7
---

# O contrato com o pi

::left::

## Entrada

```json
{"id":"prompt-1","type":"prompt","message":"Olá"}
```

Enviada para o stdin do processo em modo RPC.

::right::

## Saída

- eventos JSONL no stdout
- última mensagem completa do assistente
- aguarda `agent_settled`
- timeout e cancelamento por contexto

---
transition: fade-out
glow: 'top-left'
glowOpacity: 0.2
glowSeed: 9
---

# Persistência pragmática

SQLite com driver Go puro, sem CGO.

```txt
sessions
messages
memories
```

- migrações versionadas
- troca usuário/assistente na mesma transação
- paginação para webchat
- permissões privadas por padrão

---
transition: fade-out
layout: quote
glow: 'center'
glowOpacity: 0.24
glowSeed: 10
---

# Contexto é produto

Não basta salvar mensagens.

É preciso decidir **o que volta para o prompt**.

---
transition: fade-out
layout: two-cols-header
glow: 'right'
glowOpacity: 0.18
glowSeed: 11
---

# Recuperação de contexto

::left::

## O builder monta

1. system prompt separado
2. resumo da sessão
3. últimas mensagens
4. memórias relevantes
5. mensagem atual

::right::

## Com orçamento

- envelope JSON até 64 KiB
- remove memórias menos relevantes
- depois mensagens antigas
- depois resumo
- nunca corta a mensagem atual

---
transition: fade-out
glow: 'bottom-left'
glowOpacity: 0.18
glowSeed: 12
---

# Memória explícita

Extração opt-in, política da aplicação.

```go
decisions, err := db.LearnMemories(
  ctx,
  sessionID,
  extractor.Respond,
  history.DefaultMemoryPolicy,
)
```

O modelo sugere. A aplicação decide.

---
transition: fade-out
layout: center
glow: 'full'
glowOpacity: 0.15
glowSeed: 13
---

# Webchat local

```bash
go run ./cmd/astra-web
# http://127.0.0.1:8080
```

Um `http.Handler` em Go, sem Node, CDN ou build de frontend.

---
transition: fade-out
layout: quote
glow: 'topmost'
glowOpacity: 0.25
glowSeed: 14
---

# Demo

CLI → sessão → histórico → contexto → webchat

---
transition: fade-out
glow: 'left'
glowOpacity: 0.18
glowSeed: 15
---

# Decisões que importaram

- processo por chamada: simples antes de otimizar
- histórico nativo do pi não é substituído
- falha de gravação não deve reenviar LLM automaticamente
- sem streaming público nesta versão
- concorrência por sessão fica com o chamador
- erros do provider não devem vazar em API pública

---
transition: fade-out
layout: center
glow: 'center'
glowOpacity: 0.25
glowSeed: 16
---

# Lições

<div class="text-left max-w-180 mx-auto">

- Go é ótimo para transformar protótipo de IA em produto operacional
- SQLite resolve mais do que parece
- contexto, memória e orçamento são parte da UX
- integrar bem uma ferramenta existente pode ser melhor que abstrair tudo

</div>

---
transition: fade-out
layout: center
glow: 'bottom'
glowOpacity: 0.25
glowSeed: 17
---

# Obrigado!

<div class="pt-6 opacity-75">
Astra: construindo um chat engine em Go
</div>

<div class="pt-10 text-sm opacity-70">
Golang SP & Stone #117
</div>
