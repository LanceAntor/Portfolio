# Lance Antor - Portfolio Website

## 🚀 AI Enthusiast & Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features interactive animations, particle backgrounds, and comprehensive project showcases.

### 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth scroll-triggered animations using Intersection Observer
- **Particle Background**: Dynamic particle system using tsParticles
- **Video Integration**: Interactive video previews for projects
- **SEO Optimized**: Complete SEO setup for Google search visibility
- **Modern Tech Stack**: React 19, TypeScript, Vite

### 🛠️ Technologies Used

- **Frontend**: React 19, TypeScript, CSS3
- **Build Tool**: Vite
- **Animations**: CSS Keyframes, Intersection Observer API
- **Particles**: @tsparticles/react
- **Icons**: React Icons
- **Deployment**: Vercel

### 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── HomePage.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   └── ParticleBackground.tsx
│   ├── assets/
│   └── App.css
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
└── vercel.json
```

### 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/LanceAntor/Portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### 🌐 SEO Configuration

This portfolio is optimized for search engines with:

- **Meta Tags**: Comprehensive meta tags for social media and search engines
- **Structured Data**: JSON-LD schema for person/developer profile
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Proper URL structure

### 📈 Google Search Optimization

To appear in Google search results for "Lance Antor":

1. **Deploy to Vercel** with your custom domain
2. **Update URLs** in `index.html`, `sitemap.xml`, and structured data
3. **Submit to Google Search Console**
4. **Add to Google My Business** (if applicable)
5. **Build backlinks** from other websites
6. **Regular content updates** to maintain search ranking

### 🔧 Deployment Instructions

1. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the build settings
   - Update all `your-vercel-domain.vercel.app` references with your actual domain

2. **Post-Deployment SEO Setup**:
   - Update `index.html` with your actual Vercel domain
   - Update `sitemap.xml` with your domain
   - Submit sitemap to Google Search Console
   - Verify domain ownership in Google Search Console

### 📱 Contact & Social Media

Update the social media links in the components to match your profiles:
- GitHub: https://github.com/LanceAntor
- LinkedIn: https://linkedin.com/in/lance-antor
- Facebook: https://facebook.com/lance.antor

### 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Lance Antor** - AI Enthusiast & Full Stack Developer  
📧 Contact: [your-email@example.com]  
🌐 Portfolio: [your-vercel-domain.vercel.app]

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
