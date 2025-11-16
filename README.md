# 🚀 Lance Antor - Portfolio Website

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)](https://lanceantor.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and AI Enthusiast.

## 🌟 Live Demo

**Visit the live portfolio:** [https://lanceantor.vercel.app](https://lanceantor.vercel.app)

## ✨ Features

### 🎨 **Interactive Design**
- **Particle Background**: Dynamic, interactive particle system with mouse tracking
- **Smooth Animations**: CSS animations with Intersection Observer API
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Modern UI**: Clean, professional interface with gaming-inspired elements

### 📱 **Mobile Optimization**
- **Performance Optimized**: Reduced particle count on mobile devices (62% fewer particles)
- **Touch-Friendly**: Optimized interaction distances for touch screens
- **Responsive Layout**: Adaptive design for all screen sizes
- **Fast Loading**: Optimized assets and lazy loading

### 🔧 **Technical Features**
- **React 19**: Latest React with TypeScript
- **Vite Build Tool**: Fast development and optimized production builds
- **EmailJS Integration**: Direct email functionality without backend
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Progressive Enhancement**: Works without JavaScript for core functionality

### 📧 **Contact System**
- **Direct Email**: Send emails directly through the contact form
- **Spam Protection**: Multi-layer spam prevention system
  - Honeypot fields
  - Rate limiting
  - Content validation
  - Time-based checks
- **Form Validation**: Real-time form validation and error handling
- **Success Feedback**: User-friendly confirmation messages
### 🎯 **Sections**

#### 🏠 **Homepage**
- Interactive navigation
- Typewriter effect for role titles
- Social media links
- Professional profile photo with slideshow

#### 👨‍💻 **About Me**
- Photo slideshow with multiple images
- Professional description
- CV viewer and download functionality
- Smooth scrolling to contact section

#### 🛠️ **Tech Stack**
- Interactive technology grid
- 18+ technologies with icons
- Responsive 4-column mobile layout
- Animated reveal effects

#### 🚀 **Projects**
- Featured project showcases
- Video demos and screenshots
- Live demo links and source code
- APK download functionality for mobile apps

#### 📬 **Contact**
- Professional contact form
- Direct Gmail integration
- Social media links
- Geographic information

#### 🦶 **Footer**
- Professional footer with social links
- Gaming-themed decorative elements
- Animated floating effects
- Copyright information

## 🛠️ Technologies Used

### **Frontend**
- **React 19.1.1** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with animations
- **React Icons** - Comprehensive icon library

### **Particle System**
- **@tsparticles/react** - Interactive particle background
- **@tsparticles/slim** - Lightweight particle engine
- **Custom Configuration** - Mobile-responsive particle settings

### **Email Integration**
- **EmailJS** - Client-side email service
- **Environment Variables** - Secure credential management
- **Spam Prevention** - Multi-layer protection system

### **Performance & SEO**
- **Intersection Observer API** - Efficient scroll animations
- **Lazy Loading** - Optimized resource loading
- **Meta Tags** - Comprehensive SEO optimization
- **Structured Data** - Rich snippets for search engines

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LanceAntor/Portfolio.git
   cd Portfolio/my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### **EmailJS Setup**

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail recommended)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

### **Particle System**

Customize particles in `src/particles.json`:
```json
{
  "particles": {
    "number": {
      "value": 40  // Desktop particle count
    }
  }
}
```

### **Personal Information**

Update personal details in:
- `src/components/HomePage.tsx` - Name and roles
- `src/components/AboutMe.tsx` - Biography and CV
- `src/components/Contact.tsx` - Contact information
- `public/index.html` - SEO meta tags

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/              # Static assets
│   │   ├── *.png           # Icons and images
│   │   ├── prog/           # Programming language icons
│   │   └── Curriculum Vitae.pdf  # CV file
│   ├── favicon.svg         # Site favicon
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # React components
│   │   ├── AboutMe.tsx     # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Site footer
│   │   ├── HomePage.tsx    # Homepage/hero
│   │   ├── ParticleBackground.tsx  # Particle system
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── TechStack.tsx   # Technology grid
│   ├── assets/            # Component assets
│   ├── particles.json     # Particle configuration
│   ├── App.tsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.tsx          # Entry point
├── .env.local            # Environment variables
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### **Manual Build**

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Mobile Optimization

The portfolio automatically adjusts for mobile devices:

- **Particle Count**: 40 particles on desktop, 15 on mobile
- **Interaction Distance**: Reduced for touch screens
- **Layout**: Stack layout on mobile, side-by-side on desktop
- **Images**: Square profile photos on mobile
- **Navigation**: Touch-optimized navigation elements

## 🔒 Security Features

### **Spam Protection**
- Honeypot fields (invisible to users)
- Rate limiting (prevents rapid submissions)
- Content validation (detects spam patterns)
- Time-based checks (prevents automated submissions)

### **Environment Security**
- Sensitive credentials in environment variables
- `.gitignore` protection for local environment files
- Client-side only - no backend required

## 🎨 Customization

### **Colors and Styling**
- Primary colors defined in `src/App.css`
- Gaming theme with retro elements
- Easy color scheme modification

### **Animations**
- Intersection Observer for scroll animations
- CSS transitions and keyframes
- Particle system customization

### **Content**
- Easy content updates in component files
- Image replacement in assets folders
- Social media links configuration

## 🐛 Troubleshooting

### **Common Issues**

1. **Particles not showing**
   - Check particle count in `particles.json`
   - Verify component is properly imported

2. **Email not sending**
   - Verify EmailJS environment variables
   - Check EmailJS service configuration
   - Ensure template exists

3. **Mobile layout issues**
   - Check CSS media queries
   - Verify responsive breakpoints

### **Performance Issues**
- Reduce particle count in `particles.json`
- Optimize image sizes in assets
- Check network requests in dev tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Lance Antor** (Lynnon Lance Antor)
- **Portfolio**: [https://lanceantor.vercel.app](https://lanceantor.vercel.app)
- **LinkedIn**: [https://linkedin.com/in/lance-antor](https://linkedin.com/in/lance-antor)
- **GitHub**: [https://github.com/LanceAntor](https://github.com/LanceAntor)
- **Email**: [lanceantor@gmail.com](mailto:lanceantor@gmail.com)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **EmailJS** for client-side email functionality
- **TSParticles** for the interactive particle system
- **React Icons** for the comprehensive icon library

---

⭐ **Star this repository if you found it helpful!**

📞 **Questions?** Feel free to reach out through the contact form or social media links.

🚀 **Want to use this template?** Fork the repository and customize it with your own information!
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
