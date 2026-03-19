# Portfolio - Zahradeen Muazu

A stunning Matrix-themed portfolio built with Nuxt 3, featuring a hacker/terminal aesthetic, dynamic blog system, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Nuxt-3.15.1-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- 🎨 **Matrix Rain Animation** - Animated falling characters background
- 💻 **Terminal UI Theme** - Hacker/terminal aesthetic throughout
- 📝 **Blog System** - Markdown-based blog with syntax highlighting
- 🎯 **Project Showcase** - Interactive project cards with filtering
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Fast & Optimized** - Built with Nuxt 3 for optimal performance
- 📧 **Contact Integration** - Email and WhatsApp messaging

## 🛠️ Tech Stack

- **Framework**: Nuxt 3.15.1
- **UI**: Vue 3 with Composition API
- **Language**: TypeScript
- **Content**: Nuxt Content v2
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Nuxt Icon

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/itxDeeni/portfolio-nuxt.git
cd portfolio-nuxt

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `https://zahradeen.com` or `http://localhost:3000` to see your portfolio.

### Build for Production

```bash
# Build the application
npm run build

# Generate static site
npm run generate
```

## 📁 Project Structure

```
portfolio-nuxt/
├── assets/css/          # Global styles
├── components/          # Vue components
│   ├── common/         # Reusable components
│   ├── home/           # Homepage components
│   └── layout/         # Layout components
├── content/blog/       # Markdown blog posts
├── data/               # Data files (profile, projects, skills)
├── layouts/            # Nuxt layouts
├── pages/              # Application pages
└── nuxt.config.ts      # Nuxt configuration
```

## 🎨 Customization

### Update Personal Information
Edit `data/profile.ts`:
```typescript
export const profile = {
    name: 'Your Name',
    email: 'your@email.com',
    whatsapp: '+1234567890',
    // ... other fields
}
```

### Add Projects
Edit `data/projects.ts` to add your projects.

### Add Blog Posts
Create markdown files in `content/blog/`:
```markdown
---
title: "Your Post Title"
date: "2024-01-15"
description: "Post description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Modify Styles
Global styles and CSS variables are in `assets/css/main.css`.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run generate
# Deploy the .output/public directory
```

### GitHub Pages
```bash
npm run generate
# Deploy the .output/public directory to gh-pages branch
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **Email**: zahradeenmuazu@yahoo.com
- **WhatsApp**: +2348078236426
- **GitHub**: [@itxDeeni](https://github.com/itxDeeni)
- **LinkedIn**: [zaharadeen-muazu](https://linkedin.com/in/zaharadeen-muazu)
- **X (Twitter)**: [@itxdeeni](https://x.com/itxdeeni)

---

Built with ❤️ using Nuxt 3
