# TaxSafar - Smart Tax Filing Platform

<div align="center">

![TaxSafar Logo](https://img.shields.io/badge/TaxSafar-Smart%20Tax%20Filing-blue?style=for-the-badge&logo=react)

**India's most trusted CA-backed tax filing platform**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## Overview

TaxSafar is a modern, feature-rich tax filing platform that makes taxes simple, accurate, and stress-free for every Indian. Built with React 18, Vite, and Tailwind CSS, it offers a beautiful user interface with advanced animations, theme switching, and comprehensive tax services.

## Features

### Core Functionality
- **Tax Filing Services**: ITR, GST, TDS, and more
- **Company Registration**: Pvt Ltd, LLP, OPC
- **Notice Support**: Professional assistance for tax notices
- **CA-Backed Services**: Expert guidance from chartered accountants
- **Real-time Chat**: WhatsApp integration for support

### User Experience
- **8 Beautiful Themes**: Default, Redmi, Ocean, Forest, Sunset, Aurora, Midnight, Cherry
- **Animated Backgrounds**: Dynamic bubble effects and theme transitions
- **3D Animations**: Modern UI with depth and motion
- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Eye-friendly interface for extended use

### Advanced Features
- **Theme Switching**: Instant visual transformation with bubble animations
- **Animated Bubbles**: Continuous falling bubbles with theme-matched colors
- **3D Components**: Interactive elements with depth perception
- **Glassmorphism**: Modern frosted glass effects
- **Smooth Transitions**: Professional micro-interactions

## Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **Vite 5.1.0** - Fast development and building
- **React Router 7.14.1** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first styling
- **PostCSS** - CSS processing and optimization

### Development Tools
- **ESLint** - Code quality and consistency
- **Autoprefixer** - CSS vendor prefixes
- **Hot Module Replacement** - Instant development feedback

## Project Structure

```
taxsafar/
src/
  components/          # Reusable UI components
    - Navbar.jsx       # Navigation with theme switcher
    - Footer.jsx       # Footer with links and info
    - Hero.jsx         # Landing page hero section
    - ThemeSwitcher.jsx # Theme selector with animations
    - BubbleEffect.jsx # Theme change animations
    - BackgroundBubbles.jsx # Ambient bubble effects
    - ThemeWrapper.jsx # Theme context wrapper
  contexts/           # React contexts
    - ThemeContext.jsx # Theme management
  pages/              # Page components
    - Home.jsx         # Landing page
    - Services.jsx     # Services overview
    - Pricing.jsx      # Pricing plans
    - About.jsx        # About page
    - Blog.jsx         # Blog and articles
    - HelpCenter.jsx   # Support documentation
    - Contact.jsx      # Contact form
    - Dashboard.jsx    # User dashboard
    - NoticeSupport.jsx # Tax notice assistance
    - FileITR.jsx      # ITR filing service
    - GSTRegistration.jsx # GST registration
    - GSTFiling.jsx    # GST filing service
    - CompanyRegistration.jsx # Company setup
    - LLPRegistration.jsx # LLP registration
    - TDSFiling.jsx    # TDS filing service
    - TaxAdvisory.jsx  # Tax consultation
    - WhatsAppChat.jsx # WhatsApp integration
    - Careers.jsx      # Job opportunities
    - PrivacyPolicy.jsx # Privacy policy
    - TermsOfService.jsx # Terms and conditions
    - RefundPolicy.jsx # Refund information
    - Security.jsx     # Security measures
    - CookiePolicy.jsx # Cookie policy
    - ClientPortal.jsx # Client dashboard
    - TrackStatus.jsx  # Application tracking
  data/               # Static data
    - siteData.js      # Site configuration
  App.jsx             # Main application component
  main.jsx           # Application entry point
  index.css          # Global styles and animations
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taxsafar-project/taxsafar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Themes

TaxSafar includes 8 beautiful color themes:

| Theme | Description | Primary Colors |
|-------|-------------|----------------|
| **Default** | Classic blue-green gradient | Electric Blue, Emerald Green |
| **Redmi** | Warm orange-red palette | Orange, Red, Crimson |
| **Ocean** | Cool cyan-blue tones | Cyan, Blue, Indigo |
| **Forest** | Natural green shades | Green, Lime, Olive |
| **Sunset** | Warm sunset colors | Orange, Yellow, Red |
| **Aurora** | Northern lights inspired | Purple, Pink, Cyan |
| **Midnight** | Professional dark theme | Indigo, Green, Gold |
| **Cherry** | Bold red-pink palette | Red, Pink, Yellow |

### Theme Features
- **Instant Switching**: Change themes with one click
- **Bubble Animations**: Theme-matched bubble effects
- **CSS Variables**: Dynamic color updates
- **Local Storage**: Theme preference saved
- **Smooth Transitions**: Professional color morphing

## Animations

### Background Effects
- **Falling Bubbles**: Continuous ambient bubbles from top
- **Theme Bubbles**: Burst effect when switching themes
- **Animated Mesh**: Dynamic gradient backgrounds
- **Aurora Effects**: Shifting color gradients
- **Morphing Shapes**: Organic background elements

### UI Animations
- **3D Transforms**: Depth and perspective effects
- **Hover States**: Interactive feedback
- **Loading States**: Professional skeleton screens
- **Micro-interactions**: Button and form animations
- **Scroll Animations**: Fade-in effects on scroll

## Services

### Tax Filing
- **Income Tax Returns (ITR)**: Individual and business filing
- **GST Registration & Filing**: Monthly and annual compliance
- **TDS Filing**: Tax deduction at source
- **Tax Advisory**: Professional consultation services

### Business Services
- **Company Registration**: Pvt Ltd, LLP, OPC setup
- **Notice Support**: IT and GST notice assistance
- **Legal Representation**: Tax audit and litigation support

### Support Channels
- **24/7 Chat**: WhatsApp and in-app messaging
- **Phone Support**: Direct CA consultation
- **Email Support**: Detailed assistance
- **Help Center**: Comprehensive documentation

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

We welcome contributions! Please read our contributing guidelines and submit pull requests to the development branch.

### Development Guidelines
- Use React hooks for state management
- Follow the existing code style
- Test on multiple browsers
- Ensure responsive design
- Add proper error handling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [taxsafar.com](https://taxsafar.com)
- **Email**: support@taxsafar.com
- **Phone**: +91 98765 43210
- **Address**: 123, Tax Plaza, Bangalore, Karnataka 560001

## Acknowledgments

- React team for the amazing framework
- Vite for the lightning-fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors and beta testers

---

<div align="center">

**Made with React, Vite, and Tailwind CSS**

*[TaxSafar - Making taxes simple for every Indian]*

</div>
