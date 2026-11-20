# Kerrie Escobar — Wicker & Rattan Care Journal

> **Web 2.0 Identifier**: Strikingly | Author: Kerrie Escobar  
> **Topic**: Wicker Rattan Care  
> **Design Theme**: Warm Editorial Artisan Journal (Kinfolk / High-End Craft Aesthetic)  
> **Target Domain**: `https://kerrieescobar-wickercare.mystrikingly.com`  
> **Entity Status**: 100% Independent Craft Author & Restorer. Zero commercial affiliations.

---

## 🎨 Visual Identity & Human-Centric Craft Aesthetic
* **Art Paper Cream Background (`#FAF7F2`)**: Replaces cold dark mode with warm, sunlit, gentle paper tone that respects interior decor aesthetics.
* **Warm Espresso Ink (`#24201D`)**: Soft, elegant text color that prevents harsh contrast while maintaining top readability.
* **Warm Amber Honey (`#B87538`)**: The authentic color of cured, oiled Indonesian rattan and golden cane.
* **Sage Green (`#5B6E58`) & Terracotta (`#B55A38`)**: Natural botanical accents for safe methods and cautions.
* **Tailored Radius (`rounded-lg` ~ 8px - 10px)**: Eliminates boxy 90-degree corners without becoming overly bubbly.
* **Typography**:
  * **Headings**: *Newsreader* (Serif, elegant, sentence-case with tasteful italics)
  * **Body Text**: *Plus Jakarta Sans* (refined, clean, highly readable)
* **Real Photography & Textures**:
  * Curated high-res imagery of sunlit rattan armchairs, hand-woven baskets, and workshop scenes for all 7 guides.
  * Subtle Caning Weave Lattice Pattern in hero background.

---

## 🧭 Site Architecture & Pages
1. **Homepage (`/`)**:
   * Warm sunlit rattan hero with Kerrie Escobar's restoration quote.
   * **Wicker Care Problem Solver**: Friendly interactive diagnostic card for 6 common conditions.
   * The 7 Master Care Guides with real photos and reading stats.
   * The 4-Step Wicker Care Routine (*Dry Vacuuming &rarr; Gentle Washing &rarr; Linseed Nourishing &rarr; Air Drying*).
   * The Golden Rules of Wicker Care (*Essential Do's & Don'ts*).
   * Common Wicker Care Questions (FAQs accordion).
   * Free Printable Wicker Care Checklist (PDF download).
2. **Care Guides Catalog (`/guides`)**:
   * Live search and filter pills (*Cleaning, Oils, Finishes, Repair*).
   * Responsive photo cards with difficulty ratings and excerpts.
3. **Single Care Guide Template (`/guides/:slug`)**:
   * Complete, rich, practical tutorials for all 7 topics from the TAS plan.
   * Tools & Supplies checklist with clean checkboxes.
   * Restorer's safety notes.
   * Step-by-step instructions with clear subheadings.
   * Author bio card and related guides.
   * Printable guide feature.
4. **How to Use & Material Guide (`/how-to-use`)**:
   * Wicker Material Identification Guide (*Rattan Cane vs. Peeled Reed vs. Paper Rush vs. Synthetic HDPE*).
   * Full Problem Solver tool.
   * 4-step sequence breakdown.
5. **About Kerrie Escobar (`/about`)**:
   * Story, 15+ years of bench restoration experience, 3 core principles, timeline.
6. **Knowledgebase FAQs (`/faqs`)**:
   * 12 categorized questions with interactive reveals.
7. **Studio Inquiries (`/contact`)**:
   * Friendly inquiry form with material and issue selectors.
8. **Trust, Safety & Legal**:
   * **Care & Safety Disclaimer (`/disclaimer`)**: Linseed oil spontaneous combustion warning and spot-test protocol.
   * **Privacy Policy (`/privacy-policy`)**
   * **Terms of Use (`/terms-of-use`)**

---

## 🛠️ Technology Stack
* React 19 + Vite 8
* Tailwind CSS v4 (`@tailwindcss/vite`, `@theme`)
* React Router DOM v7 (SPA with `ScrollToTop`)
* Lucide React

---

## 🚀 Run Local Server
```bash
npm run dev
# Server runs on http://localhost:5173
```
