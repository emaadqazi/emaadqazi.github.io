# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern React portfolio website featuring infinite scrolling, smooth animations, and a sleek black and grey theme with subtle shimmer effects. Built with React 18, Framer Motion, and deployed via GitHub Actions to GitHub Pages.

## Development Commands

### Start Development Server
```bash
npm start
```
Opens development server at http://localhost:3000 with hot reload.

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `build/` directory.

### Run Tests
```bash
npm test
```
Launches test runner in interactive watch mode.

## Architecture

### Single-Page Architecture
This portfolio uses a unique single-page infinite scroll architecture rather than traditional React Router page navigation:

- **App.js**: Root component that renders `Navbar` and `SinglePage` components
- **SinglePage.js**: Main container component (src/components/SinglePage.js) that contains ALL page sections (Home, About, Projects, Skills, Experience, Resume, Contact) in a single scrollable view
- **Navbar.js**: Navigation component with scroll spy that highlights the active section as user scrolls

All content is in `SinglePage.js` with anchor-linked sections. Navigation uses `scrollIntoView()` rather than route changes.

### Component Structure
```
src/
├── components/
│   ├── Navbar.js          # Navigation with scroll spy, social links
│   ├── Navbar.css
│   ├── SinglePage.js      # All page sections in one component
│   └── SinglePage.css
├── App.js                 # Root component
├── App.css                # Global styles
├── index.js               # React entry point
└── index.css              # CSS custom properties, shimmer animations
```

### Data Management
All content (projects, skills, experiences) is defined as data arrays directly within `SinglePage.js`:
- **projects**: Array of project objects with title, description, image, URLs, tech stack, dates, and badges
- **skillCategories**: Array of skill category objects for the carousel (Languages, Frameworks, Databases, DevOps, Tools)
- **experiences**: Array of experience objects with company, position, duration, logo, and achievements

To update content, edit these arrays in src/components/SinglePage.js.

### Styling Approach
- **CSS Custom Properties**: Theme colors defined in src/index.css using CSS variables (`--primary-black`, `--accent-grey`, etc.)
- **Component Styles**: Each component has its own CSS file
- **Animations**: Framer Motion for component animations, CSS keyframes for background shimmer effects
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Key Features Implementation

**Shimmer Background Effect**: Implemented using multiple CSS pseudo-elements (body::before, body::after) with keyframe animations in src/index.css. Three layers: radial gradients, diagonal gradients, and floating particles.

**Skills Carousel**: Uses Framer Motion's `AnimatePresence` for slide transitions, supports keyboard navigation (arrow keys) and pagination dots. State managed with `currentSkillIndex` and `skillDirection`.

**Scroll Spy Navigation**: Navbar tracks scroll position and highlights active section by comparing `window.scrollY` against section offsets.

## Deployment

### GitHub Actions Workflow
Deployment is automated via `.github/workflows/deploy.yml`:
- Triggers on push to `main` branch
- Runs `npm ci` and `npm run build`
- Deploys build folder to GitHub Pages

### Manual Deployment
To deploy manually to GitHub Pages:
```bash
npm run build
# Then push changes to main branch
```

The GitHub Actions workflow will automatically deploy the built site.

## Asset Management

### Images
All images are stored in `public/images/` and referenced with relative paths:
- Profile images: `images/LinkedInPicture.jpg`, `images/GithubPFP.png`
- Project screenshots: `images/FitnessTrackerProject.png`, etc.
- Company logos: `images/SamsungLogo.png`, `images/AppleLogo.jpg`, etc.

### Resume
Resume PDF is stored in `public/resume/` and accessed at `/resume/Resume - Software Engineering, Emaad.pdf`

## Important Notes

- **No React Router**: This project does NOT use React Router. All navigation is scroll-based within a single page.
- **Content Updates**: Update projects, skills, or experiences by editing the data arrays in src/components/SinglePage.js.
- **Theme Colors**: Modify theme by updating CSS custom properties in src/index.css root selector.
- **Production Build**: Always test with `npm run build` before pushing to main, as the GitHub Actions workflow will fail if build fails.
