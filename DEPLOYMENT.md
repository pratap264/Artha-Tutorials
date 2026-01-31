# Artha Tutorials - React Vite Project

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/      # Reusable React components
├── pages/          # Page components
├── assets/         # Images, logos, etc
├── App.jsx         # Main App component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Deployment Options

### 1. GitHub Pages (Recommended - Free)
```bash
npm run deploy
```
Site: https://pratap264.github.io/artha-tutorials/

### 2. Netlify (Free - Better Performance)
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### 3. Vercel (Free - Fastest)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Auto-configured for Vite React

## Environment Variables

Create `.env.local` file:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Artha Tutorials
```

Access in code:
```javascript
console.log(import.meta.env.VITE_API_URL)
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Technology Stack

- React 18.3
- Vite 5.4
- Tailwind CSS
- React Router
- Axios
- EmailJS
- Slick Carousel

## License

MIT
