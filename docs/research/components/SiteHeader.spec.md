# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Interaction model:** scroll-driven (sticky, hides on scroll down, reappears on scroll up)

## DOM Structure
- `<header>` with white background
- Left: hamburger menu button (mobile only, hidden on desktop)
- Center: Brand logo/name "issac goldman pt" as text link
- Right: search icon, user/login icon, cart icon with count badge

## Computed Styles

### Header wrapper
- position: sticky
- top: 0
- zIndex: 50
- backgroundColor: #ffffff
- borderBottom: 1px solid rgba(18,18,18,0.08)
- transition: all 0.3s ease
- boxShadow: none initially, subtle shadow when scrolled

### Header inner
- display: flex
- alignItems: center
- justifyContent: space-between (mobile) / space-between (desktop)
- maxWidth: 1400px (140rem)
- margin: 0 auto
- padding: 0 20px
- height: 56px (mobile), 64px (desktop)

### Brand/Logo
- fontFamily: Poppins, sans-serif
- fontWeight: 700
- fontSize: 14px (mobile), 16px (desktop)
- color: #121212
- textTransform: uppercase
- letterSpacing: 0.06em

### Nav links (desktop, hidden on mobile)
- display: none on mobile, flex on desktop
- gap: 32px
- fontFamily: Poppins
- fontSize: 14px
- color: #121212
- Items: "Início", "Catálogo", "Contacto"
- Hover: opacity 0.7, transition 0.2s

### Icon buttons
- color: #121212
- width: 40px, height: 40px
- display: flex, alignItems: center, justifyContent: center
- Hover: opacity 0.7

## States & Behaviors

### Sticky behavior
- Initially visible at top
- Hides when scrolling down (translateY(-100%))
- Reappears when scrolling up
- Transition: transform 0.3s ease

## Navigation Links
- "Início" → "/"
- "Catálogo" → "/collections/all"
- "Contacto" → "/pages/contact"
- "Iniciar sessão" (icon only on mobile)

## Responsive Behavior
- **Mobile (<750px):** Hamburger menu, logo centered, icons on right
- **Desktop (≥750px):** Full nav links visible, logo left or center
