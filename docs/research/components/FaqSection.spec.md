# FaqSection Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Interaction model:** click-driven (accordion expand/collapse)

## DOM Structure
Section (dark bg) → container → heading → accordion list of 4 items.
Each item: `<details>` + `<summary>` with question + caret icon, content div with answer.

## Computed Styles

### Section wrapper
- backgroundColor: #0e0e0e
- color: #ffffff
- paddingTop: 51px (mobile), 68px (desktop)
- paddingBottom: 27px (mobile), 36px (desktop)

### Heading "Perguntas Frequentes"
- fontFamily: Poppins
- fontWeight: 700
- fontSize: 32px (equivalent of h1 in site)
- color: #ffffff
- textAlign: center
- marginBottom: 40px

### Accordion container
- maxWidth: 720px
- margin: 0 auto
- padding: 0 20px

### Accordion item (details element)
- borderTop: 1px solid rgba(255,255,255,0.15)
- paddingTop: 0

### Summary (question row)
- display: flex
- justifyContent: space-between
- alignItems: center
- paddingTop: 20px
- paddingBottom: 20px
- cursor: pointer
- gap: 12px
- listStyle: none (hide default marker)

### Question icon (material icon "help")
- display: inline-flex
- color: #9A7636 (gold)
- fontSize: 20px (material icon size)
- fontFamily: 'Material Symbols Outlined'

### Question text
- fontFamily: Poppins
- fontWeight: 700
- fontSize: 16px
- color: #ffffff
- flex: 1

### Caret icon
- width: 16px, height: 16px
- color: rgba(255,255,255,0.6)
- transition: transform 0.2s ease
- When open: rotate(180deg)

### Answer content
- paddingBottom: 20px
- paddingLeft: 32px (indent under question)

### Answer text
- fontFamily: Poppins
- fontWeight: 400
- fontSize: 14px
- lineHeight: 1.6
- color: rgba(255,255,255,0.7)

## FAQ Data (verbatim)

1. **Q:** "Preciso de ter alguma experiência?"
   **A:** "Absolutamente nenhuma. O livro foi escrito para pessoas comuns, numa linguagem simples — sem jargão, sem fórmulas, sem pressupostos."

2. **Q:** "Este é um livro de 'ficar rico'?"
   **A:** "Não — e é esse precisamente o objetivo. Não te promete riqueza nem truques rápidos. Promete-te clareza — e isso, na nossa experiência, vale muito mais."

3. **Q:** "Isto vai funcionar para mim?"
   **A:** "Sim. Estes não são truques para os ricos ou para os sortudos. São princípios extraídos de uma vida inteira a aconselhar famílias reais — que funcionaram para pessoas comuns, em situações reais."

4. **Q:** "Posso pedir reembolso?"
   **A:** "Sim. Há uma garantia vitalícia. Se o livro não te der valor real, escreve-nos a qualquer momento e devolvemos-te a totalidade do valor — sem prazos, sem perguntas."

## Behavior Details
- Use native HTML `<details>` and `<summary>` for accordion
- Caret SVG icon rotates 180° when `[open]` attribute is present
- Smooth height transition via CSS max-height trick or details animation

## Responsive Behavior
- **Mobile (<750px):** Full width, padding 20px horizontal
- **Desktop (≥750px):** maxWidth 720px, centered
