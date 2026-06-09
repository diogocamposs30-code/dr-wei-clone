# AnnouncementBar Specification

## Overview
- **Target file:** `src/components/AnnouncementBar.tsx`
- **Interaction model:** time-driven (CSS animation, infinite scroll)

## DOM Structure
A dark full-width bar that continuously scrolls promotional text horizontally.
Container > inner scrolling div (doubled content for seamless loop) > text items separated by dots/dividers.

## Computed Styles

### Container
- backgroundColor: #0e0e0e
- color: #ffffff
- overflow: hidden
- paddingTop: 12px (mobile), 16px (desktop, ≥750px)
- paddingBottom: 12px (mobile), 16px (desktop)
- display: flex
- alignItems: center
- width: 100%

### Scrolling track (`.announcement-ticker`)
- display: flex
- columnGap: 60px (mobile), 100px (desktop)
- whiteSpace: nowrap
- animation: ticker-scroll 50s linear infinite

### Each text item
- fontSize: 1.6rem (mobile) = ~25.6px, 1.8rem (desktop) = ~28.8px
- fontFamily: Poppins, sans-serif
- fontWeight: 400
- color: #ffffff
- whiteSpace: nowrap

## States & Behaviors

### Infinite horizontal scroll
- **Trigger:** Immediate on load, always running
- **Animation:** translateX from 0 to calc(-50% - 30px) on mobile, calc(-50% - 50px) on desktop
- **Duration:** 50s linear infinite
- **Implementation:** Duplicate the 3 items so total = 6 items (or more). The animation scrolls exactly half the total width, then loops seamlessly.

## Text Content (verbatim)
Three items, separated by a bullet/divider:
1. "Oferta de Lançamento — 50% de Desconto"
2. "Promoção por Tempo Limitado"
3. "🎁 Inclui 3 Livros Grátis 🎁"

These items repeat multiple times in the HTML to fill the viewport width seamlessly. Render 4 copies of the 3 items (12 items total) to ensure no gap at any viewport width.

## Responsive Behavior
- **Mobile (<750px):** fontSize 1.6rem, column-gap 60px
- **Desktop (≥750px):** fontSize 1.8rem, column-gap 100px
- No vertical padding change on desktop: 16px

## Assets
None — text only.
