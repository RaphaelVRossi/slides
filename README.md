# Slides

> Forked from [BaizeAI/talks](https://github.com/BaizeAI/talks)

## Página inicial

A página `index.html` reúne as apresentações e permite buscar por título, tema ou evento.

```sh
pnpm packages:build-base
python3 -m http.server 8080 --directory dist
```

Acesse `http://localhost:8080` para navegar pelas apresentações. O mesmo build já é usado pelo GitHub Pages e inclui a página inicial automaticamente.

Para adicionar uma apresentação, crie um card em `index.html` com o link para o diretório gerado pelo `build-base` do pacote. Para gerar apenas a página inicial, execute `pnpm build:index` (os slides precisam ser compilados separadamente).

## Presented

|  |  |
| --- | --- |
| [Workshop - TDD em Go](https://slides.raphaelrossi.io/workshop-tdd-go) | 2025.07.30 @ Stone |
| [Dev 2.0 - Futuro com IA](https://slides.raphaelrossi.io/dev2.0) | 2025.08.17 @ TDC São Paulo 2025 |
| [Astra: construindo um chat engine em Go](https://slides.raphaelrossi.io/chat-engine-astra) | [Golang SP & Stone #117](https://www.meetup.com/golangbr/events/316535792) |
