# Small Wonder — Infant Massage Website

Full-featured static website for Small Wonder, a baby massage coaching service on Waiheke Island.

## Tech Stack

- **Astro** - Static site generator with TypeScript support
- **React** - For interactive components (navigation, FAQs, contact form)
- **Markdown** - Content files for easy editing
- **GitHub Pages** - Free hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── components/     # Astro and React components
│   ├── layouts/        # Base layout
│   ├── pages/          # Pages (index.astro)
│   ├── content/        # Markdown content files
│   └── styles/         # Global styles
├── public/
│   ├── images/         # Images and placeholders
│   └── CNAME           # Custom domain config
└── docs/               # Documentation
```

## Content

Content is stored in markdown files in `src/content/`:

- `what-is.md` - What is infant massage?
- `about-practitioner.md` - About Millie
- `classes.md` - Classes and options
- `benefits.md` - Benefits in detail

Edit these files to update the website content.

## Images

Placeholder images are in `public/images/` with clear labels indicating what real images should replace them.

## Deployment

The site is configured to deploy to GitHub Pages automatically via GitHub Actions when pushing to the `main` branch.

1. Push code to GitHub
2. GitHub Actions will build and deploy automatically
3. The site will be available at `https://smallwonder.nz`

## Custom Domain

The `CNAME` file is automatically copied to the build output during the build process to maintain the custom domain configuration.

## Contact Form

The contact form uses Web3Forms. See `docs/form-setup.md` for setup instructions. You'll need to:
1. Get a free access key from [web3forms.com](https://web3forms.com)
2. Replace `YOUR_ACCESS_KEY` in `src/components/Contact.tsx` with your actual key

## License

Public domain (CC0) or adapt as you wish.
