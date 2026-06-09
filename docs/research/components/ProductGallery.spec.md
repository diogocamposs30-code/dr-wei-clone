# ProductGallery Specification

## Overview
- **Target file:** `src/components/ProductGallery.tsx`
- **Interaction model:** click-driven (thumbnail navigation)

## DOM Structure
A media gallery showing the main product image. Single image on this product.
On desktop: large main image, optional thumbnail strip at bottom.
On mobile: full-width scrollable image strip with dot pagination.

## Computed Styles

### Gallery container
- width: 100%
- position: sticky (on desktop, sticks while scrolling through product info)
- top: 80px (below sticky header)

### Main image container
- aspectRatio: 1/1 (square)
- borderRadius: 12px (--media-radius)
- overflow: hidden
- backgroundColor: #ffffff
- width: 100%

### Main image
- width: 100%
- height: 100%
- objectFit: contain (not cover — product images have transparent bg)

## Product Images
- Main image: `/images/3REGALOSGRATOS_1.png` (1946×1946 px, shows 4 books bundle)
  - This is the hero product image

## States & Behaviors
- Single image product, no thumbnail navigation needed
- Image can be clicked to open modal (zoom view)
- On mobile: full width, no border radius at edges

## Responsive Behavior
- **Mobile (<750px):** Full viewport width, borderRadius 0, no thumbnail strip
- **Desktop (≥750px):** Constrained width, borderRadius 12px, sticky positioning
