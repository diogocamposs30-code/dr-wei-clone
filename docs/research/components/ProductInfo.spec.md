# ProductInfo Specification

## Overview
- **Target file:** `src/components/ProductInfo.tsx`
- **Interaction model:** static (no scroll/click interactions in main display)

## DOM Structure
Vertical stack of:
1. Decorative SVG divider (diamond + oval + lines pattern)
2. Brand label "O Método Goldman"
3. H1 heading
4. Italic subtitle paragraph
5. Star rating row
6. "Compra hoje e recebe" gift bundle box
7. Price display
8. Quantity input + Add to Cart button
9. Feature trust icons row (optional, from Shopify theme)

## Computed Styles

### Container
- maxWidth: 560px
- margin: 0 auto
- padding: 5px 14px (from original inline style)

### Decorative SVG divider
- SVG with diamond shapes + oval + lines, all in color #9A7636
- Width: 100%, maxWidth: 360px, height: auto, margin: 0 auto, display: block
- The SVG has: rect rotated 45° (diamond), polygon lines, ellipse (path), another polygon, rect again

### Brand label "O Método Goldman"
- fontFamily: 'Playfair Display', Georgia, serif
- fontWeight: 800
- textTransform: uppercase
- letterSpacing: 0.03em
- fontSize: 23px
- color: #9A7636
- marginBottom: 14px
- display: block
- whiteSpace: nowrap
- textAlign: center

### H1 heading "Nunca te ensinaram a pensar sobre o dinheiro."
- fontFamily: 'Cormorant Garamond', Georgia, serif
- fontWeight: 600
- fontSize: 32px
- lineHeight: 1.14
- color: #17140F
- margin: 0 0 16px
- textAlign: center

### Italic subtitle
- fontFamily: 'EB Garamond', Georgia, serif
- fontStyle: italic
- color: #6B655C
- fontSize: 17px
- lineHeight: 1.45
- maxWidth: 600px
- margin: 0 auto 16px
- textAlign: center

### Star rating row
- display: flex, alignItems: center, justifyContent: center, gap: 6px
- Stars: 5 gold stars filled to 4.9/5
- Star color: #ffcc00 (overlay), #ececec (background)
- Star size: 12px-14px
- Rating text: "4.9" fontWeight 700, color #121212
- Review count text: "+1.000 futuros empreendedores" color #6B655C, fontSize 12px

## "Compra hoje e recebe" Gift Bundle Box

### Outer container
- maxWidth: 560px, margin: 0 auto, marginTop: 20px, marginBottom: 8px, padding: 0 14px

### Box heading "Compra hoje e recebe"
- fontFamily: Cormorant Garamond, fontWeight: 600, fontSize: 20px, color: #17140F
- marginBottom: 8px

### Box wrapper
- border: 1px solid #17140F
- padding: 4px 14px

### Each gift row
- display: flex, gap: 12px, alignItems: center
- padding: 11px 0
- borderBottom: 1px solid #D9D4CC (except last item)

### Gift thumbnail
- width: 56px, height: 56px, flex: 0 0 56px
- border: 1px solid #D9D4CC
- backgroundColor: #fff
- display: flex, alignItems: center, justifyContent: center
- overflow: hidden
- padding: 3px (on image)

### Gift name
- flex: 1
- fontFamily: 'Cormorant Garamond', Georgia, serif
- fontWeight: 700
- fontSize: 18px
- lineHeight: 1.2
- color: #17140F

### Gift price (right column)
- flex: 0 0 auto, textAlign: right
- Original price: fontSize 13px, color #6B655C, textDecoration line-through
- "Grátis" label: display block, color #9A7636, textTransform uppercase, letterSpacing 0.12em, fontSize 11px, fontWeight 600, marginTop 2px

## Free Gifts Data
1. Image: `/images/hf_20260602_004623_fbd523b6-1e11-4555-9d8b-972fb949367d.png`, Alt: "As 7 Perguntas Que Importam", Name: "As 7 Perguntas Que Importam", Price: "€8.95"
2. Image: `/images/3_REGALOS_GRATOS.png`, Alt: "Presente Surpresa", Name: "Presente Surpresa", Price: "€4.95"
3. Image: `/images/hf_20260602_014909_1ea52038-affc-4970-83a5-0e39b55e9c94.png`, Alt: "O Hábito das Contas", Name: "O Hábito das Contas", Price: "€7.95"

## Price Display

### Price container (margin top/bottom: 24px)
- Sale price "€12,95": fontSize 24px (large), fontWeight 700, color #121212
- Compare price "€25,90": strikethrough, color #9A7636, fontSize 18px
- "SAVE 50%" badge: backgroundColor #0e0e0e, color #fff, fontSize 12px, fontWeight 700, padding 3px 8px, borderRadius 4px

## Quantity Selector
- label "Quantidade": fontSize 14px, color #121212, marginBottom 4px
- input group: border 1px solid rgba(147,124,30,0.2) (gold tint), borderRadius 8px
- minus/plus buttons: 40px wide, color #121212
- number input: 48px wide, textAlign center

## Add to Cart Button
- backgroundColor: #0e0e0e
- color: #ffffff
- width: 100%
- padding: 14px 24px
- fontSize: 14px, fontWeight: 700, letterSpacing: 0.06em, textTransform: uppercase
- borderRadius: 6px
- cursor: pointer
- Hover: backgroundColor rgba(14,14,14,0.85)
- Text: "ADICIONAR AO CARRINHO"

## Text Content (verbatim)
- Brand label: "O Método Goldman"
- H1: "Nunca te ensinaram\na pensar sobre o dinheiro."
- Subtitle: "O livro que te ensina a pensar com clareza sobre o dinheiro — para que o construas, o protejas e o transmitas sem medo."
- Rating sub-text: "+1.000 futuros empreendedores"
- Gift box heading: "Compra hoje e recebe"
- Button: "ADICIONAR AO CARRINHO"
- Note: "Esgotado" (out of stock badge)

## Responsive Behavior
- **Mobile (<750px):** Full width, padding 14px, stacked layout
- **Desktop (≥750px):** Constrained to maxWidth 560px, in right column of 2-col grid
