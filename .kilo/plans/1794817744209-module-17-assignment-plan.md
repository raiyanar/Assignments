# Module 17 Assignment - React + Tailwind Website Plan

## Project Overview

Build a 5-page responsive website using React.js and Tailwind CSS v4 with React Router for navigation. **All content in English.**

**Goal:** Make it MINIMAL - only code needed to fulfill requirements. Easy for a 12-year-old to understand structure.

## Requirements Checklist

- [x] 5 Pages: Home, About, Services, Gallery, Contact
- [x] Tailwind CSS for responsive design
- [ ] Separate component for each page
- [x] Header component
- [x] Footer component
- [ ] React Router for 5 pages
- [ ] Multiple reusable components (min 2: Button, Card)
- [ ] useState for button click counter AND mobile menu
- [ ] useEffect for welcome message on Home load
- [ ] Contact form on Contact page
- [ ] Frontend only, no backend/database
- [ ] Beautiful responsive design

## Current State

- ✅ Vite + React 19 + Tailwind CSS v4 configured
- ✅ React Router installed
- ✅ Header.jsx created (with useState for mobile menu)
- ✅ Footer.jsx created
- ❌ Button.jsx, Card.jsx (reusable components)
- ❌ All 5 page components empty
- ❌ App.jsx - no routing yet

## Minimal Implementation Tasks (In Order)

### 1. Create Reusable Components (2 only - Button, Card)

**Button.jsx** - `src/components/reusableComponents/Button.jsx`
- Props: children, variant (primary/secondary), onClick, disabled
- Blue for primary, gray for secondary

**Card.jsx** - `src/components/reusableComponents/Card.jsx`
- Props: title, description, image, children
- Used in Services and Gallery pages

### 2. Create 5 Page Components

**Home.jsx** - `src/components/pages/Home.jsx`
- Hero with headline, CTA button
- useEffect → welcome alert() on mount
- useState → button click counter
- 3 feature cards using Card component

**About.jsx** - `src/components/pages/About.jsx`
- About content
- Team cards using Card component

**Services.jsx** - `src/components/pages/Services.jsx`
- Grid of 4-6 service cards using Card component
- Emoji icons (🎨, 💻, 📱, 📷)

**Gallery.jsx** - `src/components/pages/Gallery.jsx`
- Image grid using Card component
- picsum.photos placeholder images

**Contact.jsx** - `src/components/pages/Contact.jsx`
- Form: Name, Email, Subject, Message
- useState for form data (single object)
- HTML5 validation (required, type=email)
- Submit → alert success + reset form
- Contact info sidebar

### 3. Set Up Routing in App.jsx

- BrowserRouter, Routes, Route from react-router-dom
- Layout: Header → Routes → Footer
- Routes: /, /about, /services, /gallery, /contact

### 4. Styling (Tailwind only)

- Blue-600 primary, Gray-600 secondary
- Responsive: md breakpoint (768px)
- Simple hover states
- Focus rings for accessibility

## File Structure (Minimal)

```
src/
├── main.jsx
├── App.jsx                    ← Routing + Header + Footer
├── index.css                  ← @import "tailwindcss"
├── components/
│   ├── reusableComponents/
│   │   ├── Header.jsx         ← Done (useState for menu)
│   │   ├── Footer.jsx         ← Done
│   │   ├── Button.jsx         ← NEW (reusable)
│   │   └── Card.jsx           ← NEW (reusable)
│   └── pages/
│       ├── Home.jsx           ← NEW (useEffect + useState)
│       ├── About.jsx          ← NEW
│       ├── Services.jsx       ← NEW
│       ├── Gallery.jsx        ← NEW
│       └── Contact.jsx        ← NEW (useState form)
```

## Simplicity Rules

- No external deps beyond react-router-dom
- Emoji for icons (🏠, ℹ️, 🛠️, 🖼️, 📧, ☰, ✕, 🎨, 💻, 📱, 📷)
- alert() for feedback (welcome, form success)
- HTML5 validation only
- picsum.photos for images
- ~50-80 lines per component
- Clear names: isMenuOpen, formData, clickCount
- Comment WHY not what

## Current State

- ✅ Vite + React 19 + Tailwind CSS v4 configured
- ✅ Component structure exists (empty files)
- ❌ No React Router installed
- ❌ All components empty
- ❌ App.jsx renders all pages at once (no routing)

---

## Validation Steps

1. `npm run dev` - Start dev server
2. Verify all 5 pages load via navigation
3. Test mobile menu toggle (☰/✕)
4. Test Contact form submission (alert + reset)
5. Verify welcome `alert()` appears on Home load
6. Check responsive behavior at different widths
7. `npm run build` - Production build succeeds
8. `npm run lint` - No linting errors
