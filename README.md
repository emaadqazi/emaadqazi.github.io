# Emaad Qazi - Portfolio Website

A modern, responsive React portfolio website featuring infinite scrolling, smooth animations, and a sleek black and green theme.

## Features

- 🚀 **React 18** with modern hooks and functional components
- 🎨 **Black & Green Theme** with gradient accents and neon highlights
- 📱 **Fully Responsive** design that works on all devices
- ✨ **Smooth Animations** powered by Framer Motion
- 🔗 **React Router** for seamless navigation
- 📄 **Infinite Scrolling** single-page experience
- 🎯 **Direct Navigation** to specific sections via URL routing
- 💫 **Interactive Elements** with hover effects and transitions

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 with CSS Grid and Flexbox
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome)
- **Build Tool**: Create React App

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Navbar.css
├── pages/
│   ├── Home.js            # Hero section
│   ├── About.js           # About section
│   ├── Projects.js        # Projects showcase
│   ├── Skills.js          # Skills & technologies
│   ├── Experience.js      # Work experience timeline
│   ├── Resume.js          # Resume viewer/download
│   ├── Contact.js         # Contact form & info
│   └── *.css              # Individual page styles
├── App.js                 # Main app component
├── App.css               # Global styles
├── index.js              # React entry point
└── index.css             # Base styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd emaadqazi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Copy your existing images**
   ```bash
   # Copy your images from the original project to public/images/
   cp -r /path/to/original/images public/images/
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Customization

### Colors
The color scheme is defined in `src/index.css` using CSS custom properties:

```css
:root {
  --primary-black: #000000;
  --secondary-black: #111111;
  --accent-green: #00ff88;
  --light-green: #00cc6a;
  --dark-green: #00aa55;
  --text-white: #ffffff;
  --text-gray: #cccccc;
  --border-green: rgba(0, 255, 136, 0.3);
}
```

### Content
- Update personal information in each page component
- Modify project data in `src/pages/Projects.js`
- Update experience details in `src/pages/Experience.js`
- Change contact information in `src/pages/Contact.js`

### Images
- Place your images in the `public/images/` folder
- Update image paths in the respective components

## Features Breakdown

### Navigation
- Fixed header with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth page transitions

### Pages
- **Home**: Hero section with animated profile image
- **About**: Personal introduction with rotating border animation
- **Projects**: Project cards with hover effects and tech tags
- **Skills**: Categorized skills with icons and animations
- **Experience**: Timeline layout with company logos
- **Resume**: PDF viewer with download functionality
- **Contact**: Contact form with social links

### Animations
- Framer Motion for page transitions
- CSS animations for hover effects
- Staggered animations for lists
- Smooth scrolling between sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Emaad Qazi - emaadqazi.dev@gmail.com

Project Link: [https://github.com/emaadqazi/emaadqazi.github.io](https://github.com/emaadqazi/emaadqazi.github.io)