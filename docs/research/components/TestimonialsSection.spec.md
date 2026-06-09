# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** static display (3-column on desktop, single on mobile with dots)

## DOM Structure
Section wrapper (dark bg) → heading → 3 testimonial cards in a row (desktop) or stacked (mobile)

## Computed Styles

### Section wrapper
- backgroundColor: #0e0e0e
- color: #ffffff
- paddingTop: 51px (mobile), 68px (desktop)
- paddingBottom: 27px (mobile), 36px (desktop)

### Section heading "Leitores verificados"
- fontFamily: Poppins, sans-serif
- fontWeight: 700
- fontSize: 28px (mobile), 36px (desktop)
- color: #ffffff
- textAlign: center
- marginBottom: 32px

### Cards grid
- display: grid
- gridTemplateColumns: 1fr (mobile), repeat(3, 1fr) (desktop ≥750px)
- gap: 20px (mobile), 24px (desktop)
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 20px

### Testimonial card
- backgroundColor: #1a1a1a (slightly lighter than section bg)
- borderRadius: 16px
- padding: 28px 24px
- display: flex, flexDirection: column, gap: 16px

### Quote icon container
- color: rgba(147,124,30,0.8) = gold, opacity-tinted
- marginBottom: 8px
- svg width: 28px, height: 28px

### Review text
- fontFamily: 'EB Garamond', Georgia, serif
- fontStyle: italic (from `.rte p`)
- fontSize: 16px (mobile), 17px (desktop)
- lineHeight: 1.6
- color: rgba(255,255,255,0.9)

### Stars row
- display: flex, gap: 4px
- marginBottom: 4px

### Each star
- width: 14px, height: 14px
- color: #ffcc00

### Author name
- fontFamily: Poppins
- fontStyle: italic
- fontWeight: 700
- fontSize: 14px
- color: rgba(255,255,255,0.7)

## Testimonial Data (verbatim)

### Pedro C.
- Rating: 5/5
- Text: "Sempre achei que era mau com o dinheiro. Afinal, ninguém me tinha ensinado a pensar sobre ele. Este livro ensinou. É calmo, honesto e lê-se como se estivéssemos a conversar."

### Rui T.
- Rating: 5/5
- Text: "Aos 63 anos, pensava que já tinha ouvido tudo. Não tinha. O capítulo sobre o que deixamos para trás tocou-me a fundo. Partilhei com os meus filhos."

### Inês R.
- Rating: 5/5
- Text: "Eu e o meu marido evitávamos completamente falar de dinheiro. As quatro conversas mudaram isso. Sentámo-nos mesmo a conversar e, pela primeira vez, não foi uma discussão. Não podia recomendar mais."

## Quote SVG Icon
SVG path for left double-quote marks (two circular shapes):
```
M119.472 66.59C53.489 66.59 0 120.094 0 186.1c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.135 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.829-6.389c82.925-90.7 115.385-197.448 115.385-251.8C238.989 120.094 185.501 66.59 119.472 66.59z
M392.482 66.59c-65.983 0-119.472 53.505-119.472 119.51c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.136 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.828-6.389C479.539 347.2 512 240.452 512 186.1C512 120.094 458.511 66.59 392.482 66.59z
```
viewBox: "0 0 512 512"

## Responsive Behavior
- **Mobile (<750px):** Single column, cards stack vertically
- **Desktop (≥750px):** 3-column grid, cards side by side
