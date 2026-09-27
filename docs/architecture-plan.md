Narito ang isang kumpletong **Plan Design Architecture** para sa iyong proyekto. Ang dokumentong ito ay binuo bilang isang blueprint na maaari mong kopyahin at ibigay sa kahit anong AI assistant o prompt builder.

Naka-pangkat ito sa tatlong bahagi: ang **System Architecture** (paano tatakbo ang website), ang **Content & Folder Structure** (paano aayusin ang mga talambuhay sa VS Code), at ang **SEO Metadata Strategy** (paano masisigurong lalabas ito sa Google Search).

---

## 📋 Proyekto: Static Biography & Aviation Wiki (VitePress)

## Part 1: System & Technical Architecture

Ang website na ito ay isang **database-free, serverless, at high-performance static wiki** na binuo gamit ang VitePress, naka-imbak sa GitHub, at naka-deploy sa Vercel/Cloudflare Pages.

\[VS Code / Local Environment\] (.md files)  
             │  
             ▼ (Git Push)  
      \[GitHub Repository\]  
             │  
             ▼ (Automated Webhook)  
 \[Vercel / Cloudflare Pages\] (Builds Static HTML)  
             │  
             ▼ (Edge Network Hosting)  
      \[Live Web Browser\] ◄── \[Google Search Bot (SEO)\]

## Technical Stack Specifications:

* **Core Engine:** VitePress (Latest Stable Version) gamit ang Vue-powered static generation.  
* **Content Source:** Pure Markdown (`.md`) files na may YAML Frontmatter para sa SEO control.  
* **Styling/UI:** Default VitePress theme (malinis, modernong dokumentasyon na may dark/light mode toggle).  
* **Hosting Environment:** Vercel o Cloudflare Pages (Jamstack/Edge Network).  
* **Deployment Trigger:** Continuous Integration (CI) sa bawat `git push` sa GitHub `main` branch.

---

## Part 2: Folder & File Structure (VS Code Directory)

Ito ang magiging hitsura ng iyong mga folder sa loob ng VS Code. Ang bawat `.md` file ay katumbas ng isang pampublikong pahina sa iyong website.

my-aviation-wiki/  
├── .gitignore  
├── package.json  
└── docs/  
    ├── .vitepress/  
    │   └── config.js          \<-- Dito ilalagay ang pamagat, menu, at global SEO  
    ├── index.md               \<-- Home Page (Landing Page ng Wiki)  
    ├── talambuhay.md          \<-- Pangunahing Talambuhay (Pilot Profile)  
    ├── aviation-business.md   \<-- Detalye ng Aviation Company / Kasaysayan  
    └── philanthropy.md        \<-- Mga Pundasyon, Donasyon, at Advocacy Projects

## Deskripsyon ng Bawat Pahina:

* `index.md`: Ang magsisilbing "pinto" ng website. Maglalaman ng buod kung sino ang tao at mga mabilisang link (buttons) papunta sa kanyang karera at philanthropy.  
* `talambuhay.md`: Detalyadong kwento mula sa kabataan, pag-aaral, pagiging piloto, hanggang sa mga parangal.  
* `aviation-business.md`: Nakatutok sa kanyang pagiging aviation owner (mga eroplano, serbisyo, kontribusyon sa industriya).  
* `philanthropy.md`: Listahan ng kanyang mga charity work, scholarships, at social impact na may mga kalakip na patunay o citation links.

---

## Part 3: SEO Architecture & Discovery Strategy

Dahil ang pangunahing layunin mo ay **SEO (Google Search Visibility)** nang walang database, gagamitin natin ang **YAML Frontmatter** sa itaas ng bawat Markdown file upang basahin ng Google Bots ang mahahalagang keywords.

## Halimbawa ng SEO Architecture sa loob ng `talambuhay.md`:

\---  
title: Talambuhay ni \[Pangalan ng Tao\] \- Piloto at Philanthropist  
description: Opisyal na talambuhay ni \[Pangalan ng Tao\], isang kilalang piloto, aviation owner, at pilantropo sa Pilipinas. Alamin ang kanyang karera at adbokasya.  
keywords: \[Pangalan ng Tao\], piloto, aviation owner Pilipinas, philanthropist, aviation business  
head:  
  \- \- meta  
    \- name: robots  
      content: index, follow  
\---

\# Talambuhay ni \[Pangalan ng Tao\]  
\*(Dito na magsisimula ang iyong kwento...)\*

## Google Search Console Integration Plan:

1. **Sitemap Generation:** I-a-activate ang built-in sitemap generator ng VitePress sa `config.js`.  
2. **Verification:** Gagamitin ang HTML Meta Tag method na ibibigay ng Google Search Console upang ilagay sa `<head>` ng website sa tulong ng VitePress config.

---

