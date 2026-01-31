# Artha Tutorials

Modern React Vite application for tutorials and courses.

## Features

✅ Fast development with Vite HMR  
✅ React 18 with latest features  
✅ Tailwind CSS for styling  
✅ React Router for navigation  
✅ Auto-deploy on GitHub push  
✅ Optimized build for production  

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/pratap264/Artha-Tutorials.git
cd artha-tutorials

# Install dependencies
npm install

# Start development server
npm run dev
```

The app opens at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Deploy

```bash
npm run deploy
```

Auto-deploys to GitHub Pages at: https://pratap264.github.io/artha-tutorials/

## Project Structure

```
project-root/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── assets/           # Images, logos, etc
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── config/               # Configuration files
├── vite.config.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## Dependencies

- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **EmailJS** - Email service
- **Slick Carousel** - Carousel component
- **Swiper** - Slider library

## Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## GitHub Actions CI/CD

Every push to `main` branch automatically:
1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

No manual deployment needed!

## License

MIT © 2026 Artha Tutorials
