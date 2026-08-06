<div align="center">

<img width="100%" src="https://i.imgur.com/a8ccynu.jpg" alt="Personal Portfolio cover preview" />

# ✦ Nischhal Personal Portfolio

<!-- interactive-readme-standard:start -->

> [!NOTE]
> **Branch-specific documentation:** this section is maintained for [`master`](https://github.com/Nischhalsubba/Personal_Portfolio/tree/master). It is generated from the files present on this branch and preserves the project-authored README below.

<details open>
<summary><strong>Interactive repository guide</strong></summary>

## Branch overview

| Item | Value |
|---|---|
| Repository | [`Nischhalsubba/Personal_Portfolio`](https://github.com/Nischhalsubba/Personal_Portfolio) |
| Branch | [`master`](https://github.com/Nischhalsubba/Personal_Portfolio/tree/master) |
| Detected stack | Sass, HTML, JavaScript, CSS |
| Detected manifests | package.json |
| Documentation policy | Every maintained branch must explain purpose, setup, structure, architecture, flows, testing, delivery, security, and ownership. |

## Repository structure

```mermaid
flowchart TD
    ROOT["Personal_Portfolio / master"]
    ROOT --> P0[".github/"]
    ROOT --> P1[".vscode/"]
    ROOT --> P2["assets/"]
    ROOT --> P3["dest/"]
    ROOT --> P4["docs/"]
    ROOT --> P5["js/"]
    ROOT --> P6[".gitignore"]
    ROOT --> P7["_config.yml"]
    ROOT --> P8["about.html"]
    ROOT --> P9["AGENTS.md"]
    ROOT --> P10["gulpfile.js"]
    ROOT --> P11["index.html"]
    ROOT --> P12["package-lock.json"]
    ROOT --> P13["package.json"]
    ROOT --> P14["single.html"]
    ROOT --> P15["style.css"]
    ROOT --> P16["style.css.map"]
```

The diagram is generated from the branch's actual top-level files and directories. Use the branch link above for complete source navigation.

## Website or application structure

```mermaid
flowchart TD
    APP["Personal_Portfolio"]
    APP --> SOURCE["No conventional route directory detected"]
    SOURCE --> VERIFY["Inspect the project-specific documentation below"]
```

## Application and responsibility flow

```mermaid
flowchart LR
    ACTOR["User / contributor"]
    ACTOR --> A0["Documentation: docs"]
    A0 --> A1["Delivery: .github"]
    A1 --> DELIVERY["Delivery: GitHub Actions"]
```

## Change-to-delivery flow

```mermaid
flowchart LR
    CHANGE["Change on master"]
    CHECK["Validate: npm run test"]
    REVIEW["Review documentation and architecture impact"]
    RELEASE["Merge, release, or deploy according to this branch"]
    CHANGE --> CHECK --> REVIEW --> RELEASE
```

## README requirements for this branch

- Explain what this branch contains and how it differs from the default branch.
- Keep installation, configuration, usage, testing, deployment, security, support, and license information accurate.
- Document repository, website or application, API, data, authentication, background-job, and deployment flows when they exist.
- Prefer Mermaid diagrams and expandable `<details>` sections for visual navigation.
- Link diagrams and modules to real source paths; never invent missing components.
- Preserve project-specific documentation and update diagrams whenever architecture or major paths change.
- Treat secrets, private infrastructure, customer data, and credentials as prohibited README content.

</details>

<!-- interactive-readme-standard:end -->

### Static UI/UX Portfolio Concept — 2021

**A minimal static personal portfolio website for Nischhal Raj Subba, built with HTML, compiled CSS, JavaScript, AnimXYZ animation utilities, Font Awesome icons, responsive navigation, particle background styling, project-preview sections, and editorial portfolio spacing.**

![HTML](https://img.shields.io/badge/HTML-Static%20Portfolio-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Compiled%20Styles-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-UI%20Interactions-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![AnimXYZ](https://img.shields.io/badge/Motion-AnimXYZ-7C3AED?style=for-the-badge)
![Portfolio](https://img.shields.io/badge/Type-Personal%20Website-111111?style=for-the-badge)

</div>

---

## ✨ Overview

**Personal_Portfolio** is an early static portfolio concept for **Nischhal Raj Subba**. The site introduces Nischhal as a UI/UX designer based in Nepal and presents a simple, minimal portfolio flow with a hero section, project preview blocks, navigation, footer links, and lightweight animation behavior.

This project reflects an earlier stage of personal portfolio exploration. It is useful as a learning marker because it shows a handcrafted static approach before newer portfolio systems, design-system thinking, and more advanced product-design case study structures.

---

## 🧭 Table of Contents

- [Project Purpose](#-project-purpose)
- [Designer’s Perspective](#-designers-perspective)
- [Page Structure](#-page-structure)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Run Locally](#-run-locally)
- [Deployment](#-deployment)
- [Quality Checklist](#-quality-checklist)
- [Modernization Roadmap](#-modernization-roadmap)

---

## 🎯 Project Purpose

The purpose of this repo is to create a lightweight personal portfolio website with a clean visual style and simple project storytelling.

The site communicates:

- personal identity
- UI/UX design positioning
- project preview layout direction
- simple navigation
- social/profile link areas
- early motion and interaction exploration

---

## 🎨 Designer’s Perspective

This portfolio is minimal and layout-focused. It uses generous spacing, large hero typography, simple project rows, and animation utility classes to create a clean digital presence.

From a design-growth point of view, this repo is important because it captures the early direction of Nischhal’s portfolio thinking:

- simple identity-first hero
- editorial project blocks
- clear navigation labels
- motion used for entrance and reveal
- lightweight static implementation

The current content still includes placeholder project names and example descriptions. Before using this publicly, those should be replaced with real case studies and current portfolio positioning.

---

## 🧱 Page Structure

| Section | Purpose |
|---|---|
| Header / Topnav | Logo, Work, About, Playground, Contact links |
| Hero | Introduces Nischhal and UI/UX positioning |
| Scroll cue | Down-arrow visual hint |
| Project Rows | Repeated project preview sections with description and image |
| Project Link | Link to `single.html` detail page |
| Footer | Name/date and social links |

---

## 🌟 Features

| Feature | Description |
|---|---|
| Static portfolio layout | Simple hand-coded HTML structure |
| Responsive navigation | Hamburger-style mobile nav trigger in JS |
| AnimXYZ effects | Fade/stagger animation utility classes |
| Particle background area | Decorative visual layer through `#particles` |
| Project preview rows | Reusable project storytelling blocks |
| External imagery | Random Unsplash placeholders for project visuals |
| Font stack | DM Sans and Inter from Google Fonts |
| Font Awesome icons | Navigation/menu icon support |

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Markup | HTML5 | Static structure |
| Styling | Compiled CSS in `dest/style.css` | Visual layout and responsive design |
| JavaScript | `js/app.js` | Navigation/interactions |
| Motion | AnimXYZ | Declarative animation utility classes |
| Icons | Font Awesome | Menu/icon support |
| Fonts | DM Sans + Inter | Typography system |

---

## 📁 Repository Structure

```text
.
├── index.html
├── about.html
├── single.html
├── assets/
│   └── Images/
├── dest/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

---

## 🚀 Run Locally

No build step is required for the current static output.

Open `index.html` directly in your browser or run a small local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

---

## 🌐 Deployment

This project can be deployed to any static hosting platform:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- shared hosting

Keep `index.html`, `dest/`, `js/`, and `assets/` paths intact so the site loads correctly.

---

## ✅ Quality Checklist

### Content QA

- [ ] Replace placeholder project names.
- [ ] Replace placeholder sculpture/project copy with real design work.
- [ ] Replace random Unsplash images with actual project visuals.
- [ ] Update social links.
- [ ] Update footer year/content if needed.
- [ ] Confirm `about.html` and `single.html` are complete.

### Technical QA

- [ ] `index.html` loads correctly.
- [ ] `dest/style.css` loads correctly.
- [ ] `js/app.js` loads correctly.
- [ ] Mobile navigation works.
- [ ] AnimXYZ CSS loads from CDN.
- [ ] External images load or are replaced locally.

### Design QA

- [ ] Hero typography is readable on mobile.
- [ ] Project rows stack correctly on small screens.
- [ ] Motion does not distract from reading.
- [ ] Footer links are clear and usable.

---

## 🗺 Modernization Roadmap

- Replace placeholder content with real product-design case studies.
- Add SEO title and meta description.
- Add Open Graph preview image.
- Replace external/random images with optimized local assets.
- Add accessible alt text.
- Improve responsive project grid behavior.
- Add proper contact link or form.
- Update portfolio positioning from UI/UX learner to current product designer profile.

---

<div align="center">

An early static portfolio exploration documenting the foundation of Nischhal’s design journey.

</div>
