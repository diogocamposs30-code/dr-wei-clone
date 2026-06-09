# Page Topology — issacgold.store/products/o-oficio-do-dinheiro

## Overall Structure
- **Platform**: Shopify (Shrine PRO theme v1.3.0)
- **Language**: Portuguese (PT-PT)
- **Max page width**: 140rem
- **Scroll container**: Native browser scroll
- **Sections** (top to bottom):

---

## Section 1: Announcement Ticker Bar
- **Type**: Fixed width, flow content at top
- **Interaction**: Time-driven — infinite horizontal scroll animation
- **Background**: color-accent-2 = #0e0e0e (near black)
- **Text color**: White
- **Font sizes**: 1.6rem mobile, 1.8rem desktop
- **Animation**: `translateX(calc(-50% - 30px))` on mobile, `calc(-50% - 50px)` desktop, 50s linear infinite
- **Items**: "Oferta de Lançamento — 50% de Desconto" | "Promoção por Tempo Limitado" | "🎁 Inclui 3 Livros Grátis 🎁"
- **Padding**: 12px top/bottom mobile, 16px desktop

## Section 2: Sticky Header
- **Type**: sticky, `data-sticky-type="on-scroll-up"`
- **Interaction**: Static on initial view; appears on scroll-up
- **Background**: White (color-background-1 gradient)
- **Layout**: Middle-center on desktop, mobile-center
- **Contents**: Logo (brand name "issac goldman pt"), hamburger (mobile), navigation links, search icon, cart icon

## Section 3: Main Product Section
- **Type**: Flow content
- **Interaction**: Static
- **Layout**: 2-column grid tablet+ (image gallery left, product info right)
- **Background**: White
- **Product info contains**:
  - Decorative SVG divider (diamond/oval/line pattern in #9A7636)
  - Brand label "O Método Goldman" (Playfair Display 800, uppercase, #9A7636)
  - H1 heading (Cormorant Garamond 600, 32px)
  - Italic subtitle (EB Garamond italic)
  - Star rating (4.9/5, +1000)
  - "Compra hoje e recebe" box with 3 free gift items
  - Price display (€12,95 sale, €25,90 original, SAVE 50%)
  - Quantity selector + Add to Cart button
  - Delivery note + refund guarantee info

## Section 4: Wave Divider (White → Dark)
- **Type**: SVG animated wave
- **Background shift**: white → #0e0e0e (dark)
- **Animation**: Parallax wave CSS animation

## Section 5: Product Description/Benefits (Dark Background)
- **Type**: Static content sections
- **Background**: #0e0e0e
- **Contains**: Delivery details, book contents sections, guarantee info
- **Text**: White/light

## Section 6: Testimonials (Dark Background)
- **Type**: Carousel/slider
- **Interaction**: Click-driven pagination (mobile swipe)
- **Background**: #0e0e0e
- **Layout**: 3 cards in a row (desktop), swipe on mobile
- **Heading**: "Leitores verificados"

## Section 7: Wave Divider (Dark → White)
- SVG animated wave, dark → white

## Section 8: FAQ Accordion (White)
- **Type**: Collapsible accordion
- **Interaction**: Click-driven expand/collapse
- **Background**: #0e0e0e
- **Heading**: "Perguntas Frequentes" (with purple highlight color #6d388b)
- **4 questions** with text answers

## Section 9: Footer (Dark Background)
- **Type**: Static
- **Background**: #0e0e0e
- **Contains**: "Links Rápidos" nav column, payment method icons, copyright
