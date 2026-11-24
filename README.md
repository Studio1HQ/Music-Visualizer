<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/Music-Visualizer.webp" alt="Microphone Music Visualizer: A canvas frequency-bar visualizer driven by live microphone input" width="100%" />

<br />
<br />

# Microphone Music Visualizer

### A canvas frequency-bar visualizer driven by live microphone input

A tiny static web page that reads microphone audio with the Web Audio API analyser and draws colored frequency bars on a full-screen canvas.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)

[More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A small browser music visualizer with no dependencies and no build step. Click Start Visualization, allow microphone access, and the page draws live frequency bars on a full-screen canvas.

## Features

- **Live microphone input**: audio comes from `getUserMedia`, so any sound near the mic is visualized.
- **Frequency bars**: an `AnalyserNode` with `fftSize` 256 gives 128 bars per frame.
- **Color by frequency**: bar color shifts across the spectrum, and louder bars are redder.
- **Full-screen canvas**: the canvas resizes with the window.
- **No feedback loop**: the mic stream is not routed to the speakers.

## Tech stack

| Layer | Tool |
| --- | --- |
| Language | Vanilla JavaScript, HTML, CSS |
| Audio | [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API) |
| Rendering | [Canvas 2D](https://developer.mozilla.org/docs/Web/API/Canvas_API) with `requestAnimationFrame` |

## Getting started

### Prerequisites

- A modern browser with microphone support
- Any static file server. Browsers allow microphone access only on `localhost` or HTTPS, so opening `index.html` directly may not work.

### Installation

```bash
git clone https://github.com/Studio1HQ/Music-Visualizer.git
cd Music-Visualizer
```

### Environment variables

None are used.

### Run

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080), click Start Visualization and allow microphone access.

## How it works

```text
index.html   # canvas and Start button
app.js       # audio setup and draw loop
style.css    # layout
```

`app.js` creates an `AudioContext` and an analyser, connects the microphone stream to it, and starts an `animate` loop. Each frame it reads `getByteFrequencyData`, clears the canvas, and draws one bar per frequency bin with a height scaled from the bin value.

## Resources

- [Web Audio API on MDN](https://developer.mozilla.org/docs/Web/API/Web_Audio_API): reference for the analyser and audio context.
- [Visualizations with Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API): the technique used here.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams.<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
