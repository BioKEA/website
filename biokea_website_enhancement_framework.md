
# BioKEA.ai Website Enhancement Implementation Framework

## 1. Purpose
Enhance **BioKEA.ai** to reflect BioKEA’s integrated ecosystem by:
1. Showcasing *Droplet* eDNA capabilities that BioKEA owns.  
2. Highlighting the *Agentis* AI‑assisted open‑access journal as part of the BioKEA platform.  
3. Introducing and consistently displaying the new brand slogan **“an AI‑driven Bioinformatics OS.”**

---

## 2. Source Material Overview
| Brand | Key Content Extracted | Source |
|-------|----------------------|--------|
| **Droplet** | - Tagline “Environmental Science For All”  <br>- Service pillars: **Field Surveys**, **Laboratory Analyses**, **Data Analysis & Interpretation**  <br>- Expertise in aquatic environmental science, molecular diagnostics, eDNA assessments, dietary DNA, and community analysis | dropletedna.com |
| **Agentis Biology** | - Mission: Democratizing scientific publishing with AI  <br>- Features: **Open Access**, **AI‑Enhanced Review**, **Community‑Driven**  <br>- Editorial board of biology & AI experts | agentisj.pages.dev |
| **BioKEA.ai (current)** | - Hero section “AI‑Driven Bioinformatics”  <br>- Sections on agent‑based framework, DeSci datasets, roadmap & updates  | biokea.ai |

---

## 3. Global Site‑Wide Updates
1. **Slogan Injection**  
   - **Target**: Hero section (`<section id="hero">`).  
   - **Action**: Append `<span class="tagline">an AI‑driven Bioinformatics OS</span>` directly beneath the main `<h1>`.

2. **Metadata**  
   - Update `<title>` to “BioKEA – an AI‑driven Bioinformatics OS”.  
   - Add meta description emphasizing eDNA, AI peer‑review, and agent‑based bioinformatics.

3. **Navigation**  
   - Add top‑level links: **eDNA Solutions** (anchors to new section) and **Agentis Journal** (anchor + external link).  
   - Preserve existing “AgentisJ” external link by renaming it “Agentis Journal”.

---

## 4. New Content Sections

### 4.1 “eDNA Solutions” (Powered by Droplet)
**Placement**: Immediately after existing “High‑Value Curated Datasets for DeSci” section.  
**Structure**:
```html
<section id="edna">
  <h2>eDNA Solutions</h2>
  <p>From backyard biodiversity to blue‑water research cruises, BioKEA’s Droplet division delivers end‑to‑end environmental DNA (eDNA) insight.</p>

  <div class="pillars">
    <div class="pillar">
      <h3>Field Surveys</h3>
      <p>Study design, sampling logistics, and on‑site collection protocols for any habitat.</p>
    </div>
    <div class="pillar">
      <h3>Laboratory Analyses</h3>
      <p>Wet‑lab workflows for species ID, community profiling, trophic‑link tracing, and more.</p>
    </div>
    <div class="pillar">
      <h3>Data Analysis & Interpretation</h3>
      <p>Phylogenetics, diversity metrics, indicator‑species detection, and custom ecological models.</p>
    </div>
  </div>

  <a class="cta" href="https://www.dropletedna.com">Explore Droplet eDNA &raquo;</a>
</section>
```

### 4.2 “AI‑Enhanced Publishing” (Agentis Integration)
**Placement**: Below “eDNA Solutions”.  
**Structure**:
```html
<section id="agentis">
  <h2>AI‑Enhanced Publishing</h2>
  <p>Agentis, BioKEA’s open‑access journal suite, reimagines peer review with AI co‑reviewers – accelerating scientific communication while preserving rigor.</p>

  <ul class="features">
    <li><strong>Open Access</strong> – Research is free to read, download, and share.</li>
    <li><strong>AI‑Enhanced Review</strong> – Intelligent agents assist expert reviewers for faster decisions.</li>
    <li><strong>Community‑Driven</strong> – Transparent governance and grassroots spirit.</li>
  </ul>

  <a class="cta" href="https://agentisj.pages.dev">Visit Agentis Journals &raquo;</a>
</section>
```

---

## 5. Footer & Branding
- Append Droplet and Agentis logos with short descriptions.  
- Add social links if available.  
- Duplicate slogan tagline in `<footer>` for SEO.

---

## 6. AI Agent Task List (Pseudocode)
```yaml
version: "1.0"
tasks:
  - id: fetch_biokea
    action: get_html
    url: https://www.biokea.ai
  - id: insert_slogan
    action: dom_insert
    selector: "#hero h1"
    html: "<span class='tagline'>an AI-driven Bioinformatics OS</span>"
    position: after
  - id: add_nav_links
    action: dom_modify
    selector: "nav ul"
    html: "<li><a href='#edna'>eDNA Solutions</a></li><li><a href='#agentis'>Agentis Journal</a></li>"
    position: append
  - id: create_edna_section
    action: dom_append
    selector: "main"
    html_from: template_edna_section
  - id: create_agentis_section
    action: dom_append
    selector: "main"
    html_from: template_agentis_section
  - id: update_footer
    action: dom_insert
    selector: "footer .links"
    html_from: template_footer_updates
    position: beforeend
  - id: update_metadata
    action: head_modify
    meta:
      title: "BioKEA – an AI-driven Bioinformatics OS"
      description: "BioKEA integrates agent-based bioinformatics, eDNA solutions via Droplet, and AI-enhanced publishing through Agentis."
  - id: accessibility_check
    action: run_tool
    tool: "axe-core"
  - id: deploy
    action: git_push
    branch: "feature/droplet-agentis-integration"
```

*Templates referenced above should mirror the HTML snippets in Section 4.*

---

## 7. SEO & Accessibility Checklist
- Use semantic headings `<h2>` / `<h3>` for new sections.  
- Provide `alt` attributes for all images.  
- Ensure contrast ratios ≥ 4.5:1 for text on backgrounds.  
- Generate structured data (JSON‑LD) for Organization, WebSite, and Article schema.

---

## 8. Testing & Deployment
1. **Local Build** – `npm run build` / `gatsby build` (adjust for actual stack).  
2. **Lighthouse Audit** – Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90.  
3. **Cross‑Browser QA** – Latest Chrome, Firefox, Safari, Edge.  
4. **Staging Review** – Stakeholder sign‑off.  
5. **Production Release** – Merge & deploy via CI/CD.

---

## 9. Rollback Plan
- Tag current production commit (`prod‑backup‑YYYYMMDD`).  
- Maintain hot‑fix branch for critical regressions.  

---

## 10. Future Enhancements
- Interactive map of eDNA sampling sites (powered by Leaflet).  
- Agent-based chatbot for real‑time manuscript triage within Agentis section.  
- Live telemetry dashboard showing pipeline status across BioKEA agents.
