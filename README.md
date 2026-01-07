# Maxime Attwood — Research Portfolio

This repository contains the source code for my personal academic website and research portfolio.
It is built with **Astro**, focusing on performance, minimalism, and a "paper-like" reading experience.

## 🧪 About the Project

This portfolio is designed to bridge the gap between a classic academic profile and a creative developer portfolio.

**Key Features:**
* **Minimalist Aesthetic:** "Sage Green" & "Paper" theme using CSS variables.
* **Content Collections:** Structured data for research papers, main projects, and side experiments.
* **Visual Flair:** Subtle parallax effects (floating leaves) and academic framing for papers.
* **Performance:** Static Site Generation (SSG) via Astro for lightning-fast loading.

## 🛠 Tech Stack

* **Framework:** [Astro](https://astro.build/) (v5)
* **Styling:** Scoped CSS & CSS Variables (No heavy frameworks)
* **Content:** Markdown (`.md`) with Type-Safe Schemas
* **Deployment:** [Netlify / Vercel / GitHub Pages]

## 📂 Project Structure

```text
/
├── public/             # Static assets (PDFs, favicons)
├── src/
│   ├── assets/         # Images (optimized by Astro)
│   ├── content/        # Markdown content (database)
│   │   ├── work/       # Projects & Papers
│   │   └── journal/    # Notes & Thoughts
│   ├── layouts/        # Base layouts (Header, Sidebar, SEO)
│   ├── pages/          # Routes (index, work, etc.)
│   └── styles/         # Global styles (fonts, resets)
└── astro.config.mjs    # Configuration
```

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher)
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
    # Or to expose to local network (mobile testing):
    npm run dev -- --host
    ```

## 📝 Managing Content

### Adding a Project or Paper
Create a new `.md` file in `src/content/work/`.

**Frontmatter structure:**

```yaml
---
title: "Project Title"
description: "Short summary for the card."
tags: "Python • RL • Vision"
year: "2025"
category: "paper"  # Options: 'paper', 'main', 'side'
cover: "../../assets/image.jpg"
github: "[https://github.com/](https://github.com/)..."
paper: "https://link-to-pdf..."
---
```

* **category: 'paper'** → Adds a specific academic border style to the image.
* **category: 'main'** → Standard full-width display.
* **category: 'side'** → For smaller experiments.

### Updating "Recent Activity"
Edit the `activities` array directly in `src/pages/index.astro`:

```javascript
const activities = [
    { date: "Jan 2026", event: "Paper submitted..." },
    // Add new items here
];
```

## 🎨 Customization

Key colors are defined in `src/layouts/BaseLayout.astro` (or global CSS):

* `--bg-paper`: Background color (Cream/Beige).
* `--text-ink`: Main text color (Dark Grey).
* `--accent-sage`: Primary accent color (Sage Green).

## 📄 License

© 2026 Maxime Attwood. All rights reserved.