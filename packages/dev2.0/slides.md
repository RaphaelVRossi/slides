---
layout: intro
highlighter: shiki
css: unocss
transition: fade-out
title: Dev 2.0 — A Habilidade Essencial para o Futuro com IA
exportFilename: dev2.0
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
routerMode: hash
glowSeed: 8
---

# Dev 2.0

A habilidade essencial para o futuro com IA

<p class="nota-ia">
    ✨Conteúdo gerado com apoio de IA✨
</p>

<!-- Nota do palestrante: breve abertura — contextualize TDC, público misto (junior → senior) -->

---
transition: fade-out
layout: image-right
image: /raphael.jpg
class: my-cool-content-on-the-left
backgroundSize: contain
glow: 'bottom-left'
glowOpacity: 0.2
glowSeed: 8
---

# Raphael Rossi
Senior Software Engineer @ Stone

Fatec São Bernardo

- 💻 +10 anos deployando bug em produção
  - Java ☕️ / Python 🐍 / Node ⬡
- 🌎 Contribuidor open-source (Thumbor)
- 🎮 Jogador de Magic
- 💍 Casado
- 🐱 2 gatos

<!-- Nota do palestrante: 20–30s sobre minha experiência e por que falo sobre IA para devs -->

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# O que é "Dev 2.0"?

::left::

- Uso prático de IA para acelerar desenvolvimento
- IA como copiloto: aumenta produtividade, não substitui julgamento
- Foco em integração, validação e entrega contínua

::right::

- Para juniores: aprender a usar ferramentas, validação de respostas
- Para seniores: liderar adoção, arquitetura e governança

<!-- Nota do palestrante: explique com exemplos curtos (autocomplete vs geração de código complexo) -->

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# O que você vai levar desta palestra

::left::

- Conceitos práticos: fluxo de trabalho com IA
- Boas práticas para evitar alucinações e falhas
- Exemplos de integração (notebooks, docs, PRs)

::right::

- Dicas para líderes e times
- Recursos e ferramentas úteis
- Plano de ação simples para começar amanhã

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Por que adotar IA agora?

::left::

## Para o Negócio
- Entregas mais rápidas e menos retrabalho
- Diferencial competitivo real no time-to-market
- Automação de tarefas repetitivas (reviews, docs, testes)

::right::

## Para o Time
- Libera tempo criativo para problemas complexos
- Facilita onboarding com resumos de contexto
- Ajuda a documentar e padronizar decisões

---
transition: fade-out
layout: quote
style: color
---

# Missão: Liderar pelo Exemplo

Construir • Aprender • Medir

Ciclos curtos com IA permitem documentar passos, melhorar prompts e compartilhar padrões com o time.

<!-- Nota do palestrante: enfatizar cultura de experimentação e métricas (tempo de PR, bugs em produção) -->

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Fluxo prático (devs)

::left::

1. Contexto: reunir código, requisitos e logs
2. Prompt: ser explícito (objetivo, restrições, formato de saída)
3. Verificar: testes, revisão humana, fontes
4. Integrar: CI, templates de PR, snippets documentados

::right::

- Pequenas iterações (TDD + IA)
- Scripts e templates reutilizáveis
- Reproduzibilidade (notebooks / playbooks)

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Aprendizado #1 — Código

::left::

- Contexto é fundamental (copie o mínimo necessário)
- Continue aplicando TDD e princípios SOLID
- Comece pedindo pseudocódigo antes do código final

::right::

- Revisão humana é obrigatória
- Gere resumos de contexto para reviewers
- Use IA para documentação e exemplos de uso

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Aprendizado #2 — Documentação & Educação

::left::

- Documente com exemplos de uso e pequenos notebooks
- Notebooks para exploração e reproducibilidade

::right::

- Planeje migrações e adaptações de arquitetura
- Comunicação clara sobre limitações e responsabilidade

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Riscos: IA sabe de tudo?

Sim e não.

- Modelos podem alucinar (fornecer fatos/sintaxe errados)
- IA não substitui validação humana
- Evite confiar cegamente em "arrume esse bug" sem reproduzir e testar

Mitigações:
- Peça fontes ou trechos de código
- Valide com testes automatizados
- Mantenha um humano no loop para mudanças em produção

---
transition: fade-out
glow: 'left'
glowOpacity: 0.2
glowSeed: 304
backgroundSize: 20em 80%
---

# Boas práticas de prompt (rápido)

- Seja explícito: objetivo, formato e restrições
- Forneça contexto mínimo necessário (arquivos relevantes, logs)
- Peça por explicação e passos (não só por código)
- Padronize prompts em templates versionados

<!-- Nota do palestrante: mostre 1 ou 2 exemplos reais de prompt e resposta esperada -->

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Ferramentas e recursos

::left::

- Modelos LLM (Copilots, OpenAI, Anthropic, etc.)
- Notebooks (Jupyter) para exploração
- Integração em CI (checks, lints, testes)

::right::

- Repositórios com exemplos e templates
- Plugins IDE (VSCode Copilot, etc.)
- Documentos internos com padrões de prompt

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Para juniores — primeiros passos

::left::

- Aprenda a formular bons prompts
- Automatize tarefas repetitivas (documentação, testes)
- Sempre valide as respostas com testes e revisão

::right::

- Peça ajuda para escrever o primeiro template de PR
- Use exemplos concretos para aprender (pequenos commits)
- Faça pair-programming com IA como copiloto

---
transition: fade-out
layout: two-cols-header
backgroundSize: contain
glowSeed: 8
---

# Para seniores e líderes

::left::

- Defina guardrails: templates, processos de revisão e métricas
- Estabeleça governança (privacidade, custo, segurança)
- Promova cultura de revisão e experimentação

::right::

- Priorize infra para experimentos (notebooks, keys, budgets)
- Monitore impacto (tempo de entrega, qualidade, custo)
- Treine o time em mitigações de risco (alucinações, vieses)

---
transition: fade-out
---

# Takeaways rápidos

- IA é um copiloto: acelera, mas exige validação
- Contexto + prompts padronizados = melhores resultados
- Pequenos ciclos e métricas tornam a adoção segura e mensurável

---
transition: fade-out
layout: image-right
image: /engenharia-de-prompt-para-devs.jpg
backgroundSize: 20em 80%
class: my-cool-content-on-the-left
glow: 'left'
glowOpacity: 0.2
glowSeed: 304
---

# Referência

_A IA é um copiloto, não um protagonista_

<!-- Nota do palestrante: mencionar links em recursos complementares (repo com templates) -->

---
transition: fade-out
layout: image-right
image: /qrcode.png
class: my-cool-content-on-the-left
glow: 'left'
glowOpacity: 0.2
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

