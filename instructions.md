# BioKEA Website Enhancement Implementation Plan

## Overview
This plan outlines the step-by-step process to enhance the BioKEA.ai website according to the requirements in the enhancement framework. The goal is to integrate Droplet eDNA capabilities, highlight the Agentis AI-assisted journal, and introduce the new brand slogan "an AI-driven Bioinformatics OS" while maintaining a high aesthetic standard.

## 1. Global Site-Wide Updates

### 1.1 Update Hero Section
- Modify `src/components/Hero.tsx` to:
  - Add the new tagline "an AI-driven Bioinformatics OS" beneath the main heading
  - Ensure the tagline has appropriate styling to match the site's aesthetic
  - Adjust spacing to maintain visual balance

### 1.2 Update Metadata
- Modify `src/pages/index.tsx` to:
  - Update the `<title>` tag to "BioKEA – an AI-driven Bioinformatics OS"
  - Update the meta description to emphasize eDNA, AI peer-review, and agent-based bioinformatics

### 1.3 Update Navigation
- Modify `src/components/Navbar.tsx` to:
  - Add new top-level links: "eDNA Solutions" (anchors to new section) and "Agentis Journal"
  - Rename existing "AgentisJ" link to "Agentis Journal" with the same URL
  - Ensure changes are applied to both desktop and mobile navigation

## 2. New Content Sections

### 2.1 Add eDNA Solutions Section
- Modify `src/pages/index.tsx` to:
  - Add a new section with ID "edna" after the "High-Value Curated Datasets for DeSci" section
  - Implement the section according to the HTML structure provided in the framework
  - Style the section to match the site's aesthetic using Tailwind CSS classes
  - Ensure the section is responsive on all device sizes

### 2.2 Add AI-Enhanced Publishing Section
- Modify `src/pages/index.tsx` to:
  - Add a new section with ID "agentis" after the "eDNA Solutions" section
  - Implement the section according to the HTML structure provided in the framework
  - Style the section to match the site's aesthetic using Tailwind CSS classes
  - Ensure the section is responsive on all device sizes

## 3. Footer Updates

### 3.1 Update Footer Content
- Modify `src/components/Footer.tsx` to:
  - Add Droplet and Agentis logos with short descriptions
  - Add social links if available
  - Add the slogan tagline for SEO purposes
  - Ensure the footer maintains its responsive design

## 4. SEO & Accessibility Improvements

### 4.1 Implement SEO Best Practices
- Ensure all new sections use semantic headings (`<h2>`, `<h3>`)
- Add appropriate `alt` attributes to all images
- Verify contrast ratios for text on backgrounds
- Add structured data (JSON-LD) for Organization, WebSite, and Article schema

### 4.2 Ensure Accessibility
- Verify that all interactive elements are keyboard accessible
- Ensure proper ARIA attributes are used where needed
- Check that color contrast meets WCAG standards

## 5. Testing & Deployment

### 5.1 Local Testing
- Run the development server to verify changes
- Test responsiveness across different screen sizes
- Verify all links work correctly

### 5.2 Build & Deploy
- Build the project for production
- Deploy to GitHub
- Use Wrangler to deploy to Cloudflare

## 6. Post-Deployment Verification
- Verify the live site works as expected
- Check all new sections and features
- Ensure the site maintains high performance

## Implementation Timeline
1. Global site-wide updates (1 hour)
2. New content sections (2 hours)
3. Footer updates (1 hour)
4. SEO & accessibility improvements (1 hour)
5. Testing & deployment (1 hour)

Total estimated time: 6 hours
