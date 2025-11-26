# Real Estate of the West

A modern, responsive real estate website built with React and Vite.

## Brand Colors

- **Primary**: Oxblood Red (#4A110E)
- **Accent Warm**: Aged Saddle Tan (#C7A27A)
- **Accent Cool**: Frontier Midnight Blue (#1C2A39)
- **Neutrals**: White (#FFFFFF) and Charcoal (#2B2B2B)

## Features

- Modern, responsive design with smooth scrolling
- React Router for navigation
- Home page with hero section and featured properties
- Properties/Listings page
- Sell page with seller's guide download
- Buy page with property search and map integration
- Team page showcasing team members
- Contact page with office location map

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Customization Needed

1. **Team Member Photos**: Add actual team member photos to `src/pages/Team.jsx`
   - Replace placeholder images with actual photos of Lynn Ritter, Cody Renner, and Bonnie Kirk
   - Recommended: Add images to `public/team/` folder

2. **Seller's Guide PDF**: Replace `public/sellers-guide.pdf` with the actual seller's guide document

3. **HomeFinder Integration**: Update the Buy page (`src/pages/Buy.jsx`) with your HomeFinder widget URL
   - Replace `YOUR_AGENT_ID` in the iframe src with your actual HomeFinder agent ID
   - Or use the HomeFinder widget embed code provided by HomeFinder

4. **Property Listings**: Update property data in `src/pages/Properties.jsx` and `src/pages/Home.jsx` with actual listings

5. **Google Maps**: The contact page map is set up for 455 Main Street, Lander, WY. Verify the coordinates are correct.

## Deployment

The site is deployed to GitHub Pages at:
**https://noah-gans.github.io/realestate_of_the_west/**

To update the live site, run:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer)
├── pages/         # Page components (Home, Properties, Sell, Buy, Team, Contact)
├── App.jsx        # Main app component with routing
└── main.jsx       # Entry point
```
