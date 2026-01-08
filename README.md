[![Netlify Status](https://api.netlify.com/api/v1/badges/083cffc9-2078-4483-8536-a0e38064f211/deploy-status)](https://app.netlify.com/projects/attwoodmaxime/deploys)

# Maxime Attwood — Research Portfolio

This repository contains the source code for my personal academic website and research portfolio.
It is built with **Astro**, focusing on performance, minimalism, and a "paper-like" reading experience.

The website highlights my research in **Multimodal Learning** and **Social AI**, alongside my personal projects.

## 🧪 About the Project

This portfolio bridges the gap between a classic academic profile and a modern developer portfolio.

**Key Features:**
* **Academic & Clean:** "Sage Green" & "Kraft Paper" theme using scoped CSS variables.
* **Smart Content Management:** Structured data via Astro Content Collections (`work` & `journal`).
* **Dynamic Layouts:**
    * **Selected Works:** Full-width cards with visual focus.
    * **Publications:** Accordion-style list with quick access to PDF, Arxiv, and Code.
    * **Side Projects:** Responsive grid layout.
* **Performance:** Static Site Generation (SSG) for lightning-fast loading.

## 🛠 Tech Stack

* **Framework:** [Astro](https://astro.build/) (v5)
* **Language:** TypeScript
* **Styling:** Plain CSS & CSS Variables (Zero-runtime overhead)
* **Content:** Markdown (`.md`) with Zod Schema Validation
* **Deployment:** Netlify

## 📂 Project Structure

```text
/
├── public/             # Static assets (PDFs, favicons, CV)
├── src/
│   ├── assets/         # Images (optimized by Astro)
│   ├── content/        # Content Collections (Database)
│   │   ├── work/       # Research Papers & Projects (.md)
│   │   └── journal/    # Tea Journal (.md)
│   ├── layouts/        # Base layouts (Header, SEO, Footer)
│   ├── pages/          # Routes (index, work, journal)
│   └── styles/         # Global styles
└── astro.config.mjs    # Configuration
```

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+)
* npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AtwMaxime/portfolio.git](https://github.com/AtwMaxime/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📝 Managing Content

### Adding a Project or Paper
Create a new `.md` file in `src/content/work/`. The layout is determined by the `category` field.

**Frontmatter structure:**

```yaml
---
title: "Wavelet Flow Matching"
description: "Short abstract displayed on the card."
tags: "Generative AI • Math"
year: "2025"
category: "paper"  # Options: 'main', 'paper', 'side'
cover: "../../assets/graph.png"

# Optional Links (Buttons appear automatically if defined)
github: "[https://github.com/](https://github.com/)..."
paper: "/pdfs/my-paper.pdf"      # Local file in public/
arxiv: "[https://arxiv.org/abs/](https://arxiv.org/abs/)..." # Adds the specific Red Arxiv button
---
```

### Layout Behavior by Category
* **`main`**: Full-width card with large visual. Used for major research projects.
* **`paper`**: Accordion/Expandable list. Optimized for bibliography.
* **`side`**: Compact grid card. Used for experiments or smaller tools.

### Editing the Intro
The "Research Focus" text (introductory section) is directly editable in `src/pages/work.astro`.

## 🎨 Customization

Key design tokens are defined in `src/layouts/BaseLayout.astro`:

* `--bg-paper`: Background color (Cream/Beige).
* `--text-ink`: Main text color (Dark Grey).
* `--accent-sage`: Primary accent color (Green).
* `--deco-almond`: Border and decorative elements.

## 📄 License

© 2026 Maxime Attwood. All rights reserved.