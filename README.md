## WhatBytes Assigment

## Preview

Visit the website for live preview: https://whatbytes-assignment-tawny.vercel.app/

## Features Implemented

- **Home Page (/) – Product Listing**: Logo, Search, Cart, Profile
- **Main Section Sidebar Filter**: Category filter, Price Range
- **Product Grid**: Responsive, Card: Image, Title, Price, Rating Stars, Add to Cart button
- **Footer**: Additional Link Sections, Social Media Icons, Copyright info.
- **/product/[id] page**: Product Card: Large Image on the left, product details on right: product title, price, rating stars, description, category, brand name, Quantity Selector, Add to Cart button.  
- **/cart Page**: List of added product, product card with details: small image, title, price, quantity update control, remove product, total items, price summary, checkout button
- **Logic**: Redux for state management, fully working cart, url based search filter with debounce, url based filters, dynamic routing, saving cart to localStorage, toast messages, styled using TailwindCSS, fully responsive across multiple devices and viewport
- **History Tracking**: Saves quiz history using **IndexedDB**.
- **Deployment**: Easily deployable on **Netlify** or **Vercel**.
- **Responsive and Dark Mode**: The app is responsive and has dark and light mode theme.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.