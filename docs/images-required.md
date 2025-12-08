# Required Images Documentation

This document lists all images required for the Small Wonder website, including dimensions, content descriptions, and usage context.

## Image Specifications

### 1. Hero Image
- **File path:** `/public/images/hero.jpg` (or `.png`, `.webp`)
- **Current placeholder:** `hero-placeholder.svg`
- **Dimensions:** 
  - Recommended: 1200px × 800px (3:2 aspect ratio)
  - Minimum: 600px × 400px
  - Maximum display: 600px wide (responsive)
- **Aspect ratio:** 3:2 (landscape)
- **File format:** JPG, PNG, or WebP
- **File size:** Optimize for web (aim for < 200KB)
- **Content description:**
  - Practitioner or parent with baby
  - Relaxed, warm, and welcoming atmosphere
  - Fully clothed, clearly non-clinical setting
  - Natural lighting preferred
  - Should convey gentleness, calm, and connection
  - Baby should appear comfortable and safe
  - Background should be soft and uncluttered
- **Usage:** Hero section on homepage, above the fold
- **Alt text:** "Practitioner or parent with baby, relaxed and fully clothed, clearly non-clinical"
- **Loading:** Eager (above the fold)

---

### 2. Practitioner Photo
- **File path:** `/public/images/practitioner.jpg` (or `.png`, `.webp`)
- **Current placeholder:** `practitioner-placeholder.svg`
- **Dimensions:**
  - Recommended: 800px × 800px (square)
  - Minimum: 400px × 400px
  - Maximum display: 400px × 400px (responsive)
- **Aspect ratio:** 1:1 (square)
- **File format:** JPG, PNG, or WebP
- **File size:** Optimize for web (aim for < 150KB)
- **Content description:**
  - Professional but friendly portrait of Millie
  - Casual-professional style (not overly formal)
  - Warm, approachable expression
  - Good lighting, clear focus on face
  - Neutral or soft background
  - Should convey trustworthiness and warmth
- **Usage:** About the practitioner section
- **Alt text:** "Millie, certified infant massage instructor"
- **Loading:** Lazy (below the fold)

---

## Image Guidelines

### General Requirements

1. **Consent and Privacy:**
   - All photos of babies and parents must have explicit consent
   - Ensure proper model releases are obtained
   - Respect privacy and dignity of all subjects

2. **Style Consistency:**
   - Maintain consistent lighting and color tone
   - Use natural, soft lighting where possible
   - Avoid harsh shadows or overexposure
   - Colors should complement the brand palette (rose, sage, sand)

3. **Technical Specifications:**
   - High resolution source files (for future use)
   - Web-optimized versions (compressed, appropriate format)
   - Responsive images (consider srcset for different screen sizes)
   - Proper file naming (lowercase, hyphens, descriptive)

4. **Accessibility:**
   - All images must have descriptive alt text
   - Decorative images should have empty alt text (`alt=""`)
   - Ensure sufficient contrast if text overlays images

5. **Content Guidelines:**
   - Always show babies fully clothed or wrapped
   - Non-sexual, nurturing contexts only
   - Avoid overly posed or stock-photo clichés
   - Prefer real, authentic moments over staged photos
   - Ensure all subjects appear comfortable and safe

---

## Optional Future Images

These images are not currently implemented but may be useful for future enhancements:

### 3. Class Environment (Optional)
- **Dimensions:** 1200px × 800px (3:2 aspect ratio)
- **Content:** Small group class setting, warm and inviting space, parents with babies in a relaxed learning environment

### 4. Massage Technique Demonstration (Optional)
- **Dimensions:** 800px × 600px (4:3 aspect ratio)
- **Content:** Hands demonstrating gentle massage technique on a doll (not a real baby), clear and instructional

### 5. Benefits Illustration (Optional)
- **Dimensions:** 600px × 600px (square)
- **Content:** Abstract or illustrative representation of bonding, calm, or connection (could be icon-based)

---

## Image Replacement Instructions

1. **Replace placeholders:**
   - Remove or archive placeholder SVG files
   - Add new images to `/public/images/` directory
   - Update image paths in components if filenames differ

2. **Update components:**
   - `src/components/Hero.astro` - Update hero image path
   - `src/components/AboutPractitioner.astro` - Update practitioner photo path

3. **Optimize images:**
   - Use tools like ImageOptim, Squoosh, or similar
   - Create WebP versions for modern browsers
   - Consider responsive image sets (srcset) for hero image

4. **Test:**
   - Verify images load correctly
   - Check responsive behavior on mobile and desktop
   - Ensure alt text is appropriate
   - Test loading performance

---

## Current Placeholder Files

- `/public/images/hero-placeholder.svg` - To be replaced with hero image
- `/public/images/practitioner-placeholder.svg` - To be replaced with practitioner photo

These placeholder files can be removed once real images are added.

