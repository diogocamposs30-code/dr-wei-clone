# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Interaction model:** static

## DOM Structure
Footer with dark background → top section (nav links) → bottom section (payment icons + copyright)

## Computed Styles

### Footer container
- backgroundColor: #0e0e0e
- color: rgba(255,255,255,0.7)
- paddingTop: 48px (mobile), 64px (desktop)
- paddingBottom: 32px

### Top section
- maxWidth: 1400px, margin: 0 auto, padding: 0 20px
- display: grid, gridTemplateColumns: 1fr (mobile) / 3fr 3fr (desktop)

### Section heading "Links Rápidos"
- fontFamily: Poppins
- fontWeight: 700
- fontSize: 14px
- color: #ffffff
- textTransform: uppercase
- letterSpacing: 0.1em
- marginBottom: 16px

### Footer links list
- listStyle: none
- display: flex, flexDirection: column, gap: 10px

### Footer link
- fontFamily: Poppins
- fontSize: 13px
- color: rgba(255,255,255,0.6)
- textDecoration: none
- Hover: color rgba(255,255,255,0.9)

### Bottom section
- borderTop: 1px solid rgba(255,255,255,0.1)
- marginTop: 32px
- paddingTop: 24px
- display: flex, justifyContent: space-between, alignItems: center
- flexWrap: wrap, gap: 16px

### Copyright text
- fontSize: 12px
- color: rgba(255,255,255,0.4)

### Payment icons list
- display: flex, flexWrap: wrap, gap: 6px, alignItems: center

## Footer Links (verbatim)
- "Contact Information" → "/policies/contact-information"
- "Aviso Legal" → "/policies/legal-notice"
- "Política de Privacidade" → "/policies/privacy-policy"
- "Política de Reembolso e Devolução" → "/policies/refund-policy"
- "Política de Envio" → "/policies/shipping-policy"
- "Termos de Serviço" → "/policies/terms-of-service"

## Copyright
"© 2026, issac goldman pt"

## Payment Methods
Include SVG icons for: Visa, Mastercard, PayPal, Apple Pay, Google Pay, American Express, Maestro, Multibanco, Shop Pay

## Responsive Behavior
- **Mobile (<750px):** Single column, links stacked
- **Desktop (≥750px):** Side-by-side columns
