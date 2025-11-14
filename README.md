# Developer Portfolio

A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. This portfolio showcases your projects, skills, experience, and education in a professional and visually appealing way.

## Features

- **Hero Section** with introduction and call-to-action
- **About Me** section with bio and contact information
- **Skills** section displaying technical competencies with progress bars
- **Projects** section with featured projects and detailed project pages
- **Project Detail Pages** with image sliders for showcasing project screenshots
- **Experience** section with timeline of work history
- **Education** section highlighting academic background
- **Contact** section with social media links and contact information
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Smooth Scrolling** and navigation
- **GitHub Pages** deployment with CI/CD

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling with @apply patterns
- **React Router** - Client-side routing (HashRouter for GitHub Pages)
- **GitHub Actions** - CI/CD pipeline

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Update Your Information

1. **Personal Data**: Edit `src/data/portfolio.ts` to update:
   - Projects
   - Experience
   - Education
   - Skills
   - Contact information

2. **Images**: Replace placeholder images with your own:
   - Hero section portrait
   - About section profile picture
   - Project screenshots

3. **Colors**: Customize the color scheme in `tailwind.config.js`

4. **Base URL**: Update the `base` property in `vite.config.ts` to match your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

3. The workflow will automatically build and deploy your site when you push to the main branch.

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/             # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── ImageSlider.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── ProjectDetailPage.tsx
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Tailwind styles
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (manual)

## Best Practices Implemented

- **TypeScript**: Full type safety across the application
- **Component Organization**: Modular, reusable components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and lazy loading
- **Clean Code**: Consistent formatting and naming conventions
- **Git Workflow**: Proper commit messages and branching

## Customizing for GitHub Pages

The portfolio uses HashRouter instead of BrowserRouter to ensure proper routing on GitHub Pages. The `vite.config.ts` includes the correct `base` configuration for GitHub Pages deployment.

## License

MIT License - feel free to use this portfolio template for your own projects!

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
