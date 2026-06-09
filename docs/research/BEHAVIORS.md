# Behavior Documentation — issacgold.store Product Page

## Scroll Behaviors
- **Sticky header**: `data-sticky-type="on-scroll-up"` — header hides on scroll down, reappears on scroll up
- **Section animations**: `animate--hidden` → visible via IntersectionObserver (fade-in from below on entrance)
- **Wave dividers**: CSS parallax animation on the wave shapes (`.parallax1/.parallax2/.parallax3/.parallax4`)

## Announcement Bar Animation
- **Type**: CSS keyframe animation, infinite scroll
- **Mobile**: `translateX(calc(-50% - 30px))`, 50s linear infinite
- **Desktop**: `translateX(calc(-50% - 50px))`, 50s linear infinite (direction: normal forwards)
- **Trigger**: Immediate on page load, always playing

## Testimonial Slider
- **Type**: Splide.js carousel
- **Desktop**: Shows 3 cards at once
- **Mobile**: Single card, swipe gesture
- **Pagination**: Dot indicators at bottom

## FAQ Accordion
- **Type**: Native HTML `<details>/<summary>` element
- **Interaction**: Click to expand/collapse
- **Indicator**: Caret SVG icon rotates on open
- **Animation**: Content height transition (CSS)

## Hover States (expected from Shopify theme)
- **Navigation links**: Underline on hover
- **Buttons**: Slight opacity/color change
- **Links**: Color change to accent gold

## Responsive Breakpoints
- **Mobile**: < 750px (single column, ticker col-gap 60px)
- **Tablet+**: ≥ 750px (2-column product grid, ticker col-gap 100px)
- **Desktop**: ≥ 990px (full desktop layout)

## Sticky ATC Bar
- A sticky "Add to Cart" bar appears at bottom of page after user scrolls past the main ATC button
- Contains: small product image, title, price badge, ATC button
- Background: white, border-top
