# Customization Guide

This guide will help you customize your portfolio to make it your own.

## Quick Customization Checklist

- [ ] Update personal information in `src/data/portfolio.ts`
- [ ] Replace placeholder images
- [ ] Update the base URL in `vite.config.ts`
- [ ] Customize colors in `tailwind.config.js`
- [ ] Add your actual projects with screenshots
- [ ] Update contact information
- [ ] Review and update all social media links

## Step 1: Update Personal Data

Edit `src/data/portfolio.ts` to add your information:

### Projects

```typescript
export const projects: Project[] = [
  {
    id: 'your-project-id',  // Used in URL: /project/your-project-id
    title: 'Your Project Name',
    description: 'Full detailed description...',
    shortDescription: 'Brief one-line description',
    technologies: ['React', 'TypeScript', 'etc'],
    images: [
      'https://your-image-url.com/image1.jpg',
      'https://your-image-url.com/image2.jpg',
    ],
    githubUrl: 'https://github.com/you/project',
    liveUrl: 'https://your-project.com',
    category: 'Web Development',
    featured: true,  // Shows "Featured" badge
  },
  // Add more projects...
];
```

### Experience

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, State',
    startDate: '2022-01',
    endDate: 'Present',
    current: true,  // Set to true for current position
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      // Add more bullet points...
    ],
  },
  // Add more experiences...
];
```

### Education

```typescript
export const education: Education[] = [
  {
    id: '1',
    degree: 'Your Degree',
    institution: 'University Name',
    location: 'City, State',
    startDate: '2015',
    endDate: '2019',
    description: 'Focus area or notable achievements',
  },
];
```

### Skills

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Node.js', category: 'backend', level: 80 },
  { name: 'Docker', category: 'tools', level: 75 },
  // Add your skills with honest proficiency levels (0-100)
];
```

Categories:
- `frontend`: Frontend technologies
- `backend`: Backend technologies
- `tools`: Development tools and other technologies

### Contact Information

```typescript
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',  // Optional
  location: 'Your City, State',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile',
  twitter: 'https://twitter.com/yourprofile',  // Optional
};
```

## Step 2: Replace Images

### Hero Section Portrait

Replace the placeholder in `src/components/Hero.tsx`:

```typescript
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Your Name"
  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
/>
```

### About Section Profile Picture

Replace in `src/components/About.tsx`:

```typescript
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Profile"
  className="rounded-lg shadow-xl w-full max-w-md"
/>
```

### Image Hosting Options

1. **Use images from your project** (recommended):
   - Place images in the `public` folder
   - Reference as `/image-name.jpg` in your code

2. **Use external URLs**:
   - Upload to [Imgur](https://imgur.com)
   - Use [Unsplash](https://unsplash.com) for temporary placeholders
   - Host on your own server

3. **GitHub repository**:
   - Store in `public/images/` folder
   - Access via the GitHub Pages URL

## Step 3: Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'primary-dark': '#2d4a3e',      // Dark green
      'primary-green': '#3a5a4a',     // Medium green
      'accent-yellow': '#f5a623',     // Yellow accent
      'accent-orange': '#ff8c42',     // Orange accent
      'beige': '#f5f0e8',             // Background beige
      'dark-bg': '#1a1a1a',           // Dark background
    },
  },
},
```

### Popular Color Schemes

**Blue Professional**:
```javascript
'primary-dark': '#1e3a8a',
'primary-green': '#3b82f6',
'accent-yellow': '#fbbf24',
'accent-orange': '#f97316',
'beige': '#f8fafc',
```

**Purple Creative**:
```javascript
'primary-dark': '#581c87',
'primary-green': '#7c3aed',
'accent-yellow': '#fbbf24',
'accent-orange': '#f97316',
'beige': '#faf5ff',
```

**Dark Mode**:
```javascript
'primary-dark': '#111827',
'primary-green': '#1f2937',
'accent-yellow': '#fbbf24',
'accent-orange': '#f97316',
'beige': '#f9fafb',
```

## Step 4: Update Repository Configuration

In `vite.config.ts`, update the base path to match your GitHub repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/',  // IMPORTANT: Must match exactly!
  build: {
    outDir: 'dist',
  },
})
```

## Step 5: Customize Text and Copy

### Hero Section

Edit `src/components/Hero.tsx`:

```typescript
<p className="text-lg mb-8 max-w-lg leading-relaxed">
  YOUR CUSTOM INTRODUCTION HERE
</p>
```

### About Section

Edit `src/components/About.tsx`:

```typescript
<h2 className="text-5xl md:text-6xl font-bold mb-6">
  Hello,
  <br />
  I'm YOUR NAME!
</h2>

<p className="text-lg text-gray-700 mb-6 leading-relaxed">
  YOUR BIO HERE
</p>
```

### Contact Section

The contact section automatically uses data from `src/data/portfolio.ts`, but you can customize the footer text in `src/components/Contact.tsx`.

## Step 6: Add Custom Sections (Optional)

### Adding a Blog Section

1. Create `src/components/Blog.tsx`
2. Add blog data to `src/data/portfolio.ts`
3. Import and use in `src/pages/HomePage.tsx`

### Adding a Testimonials Section

1. Create `src/components/Testimonials.tsx`
2. Add testimonial data
3. Include in the home page

## Step 7: SEO and Meta Tags

Update `index.html` to improve SEO:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Update these -->
  <title>Your Name - Full Stack Developer</title>
  <meta name="description" content="Portfolio of Your Name, a Full Stack Developer specializing in React, TypeScript, and modern web technologies." />
  <meta name="keywords" content="developer, react, typescript, portfolio" />
  <meta name="author" content="Your Name" />

  <!-- Open Graph (for social sharing) -->
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Full Stack Developer Portfolio" />
  <meta property="og:image" content="URL_TO_YOUR_PREVIEW_IMAGE" />
  <meta property="og:url" content="YOUR_PORTFOLIO_URL" />
</head>
```

## Step 8: Fonts (Optional)

The portfolio uses Google Fonts (Playfair Display and Inter). To change fonts:

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Update the link in `index.html`
4. Update `tailwind.config.js`:

```javascript
fontFamily: {
  'serif': ['Your Serif Font', 'serif'],
  'sans': ['Your Sans Font', 'sans-serif'],
},
```

## Testing Your Changes

After making changes:

```bash
# Run development server
npm run dev

# Test production build
npm run build
npm run preview
```

## Common Customizations

### Change Animation Speed

In `src/index.css`, adjust transition durations:

```css
.card {
  /* Change from 300 to your desired value (in ms) */
  @apply transition-transform duration-500 hover:scale-105;
}
```

### Modify Layout Spacing

Adjust padding in section components:

```typescript
// From:
<section className="bg-beige py-24">

// To (more/less spacing):
<section className="bg-beige py-32">  // More
<section className="bg-beige py-16">  // Less
```

### Add New Project Categories

In `src/data/portfolio.ts`, add new categories to projects:

```typescript
category: 'Mobile Development',
category: 'Data Science',
category: 'Design',
// etc.
```

## Need Help?

- Check the main [README.md](./README.md) for general information
- See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for deployment help
- React documentation: https://react.dev
- Tailwind CSS docs: https://tailwindcss.com
- TypeScript docs: https://www.typescriptlang.org

Happy customizing! 🎨
