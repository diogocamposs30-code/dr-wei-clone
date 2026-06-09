# ContentSections Specification

## Overview
- **Target file:** `src/components/ContentSections.tsx`
- **Interaction model:** static

## DOM Structure
Multiple custom HTML content blocks on the dark background section between the product area and testimonials. Contains:
1. Delivery & Access section
2. Book contents/benefits
3. 90-day guarantee section
4. CTA text blocks

## Computed Styles

### Section wrapper
- backgroundColor: #0e0e0e
- paddingTop: 48px (mobile), 64px (desktop)
- paddingBottom: 48px

### Content container
- maxWidth: 720px
- margin: 0 auto
- padding: 0 20px

### Section headings (h2 level)
- fontFamily: 'Cormorant Garamond', Georgia, serif
- fontWeight: 600
- fontSize: 28px (mobile), 36px (desktop)
- color: #ffffff
- marginBottom: 16px
- textAlign: center (for some sections)

### Body paragraphs
- fontFamily: 'EB Garamond', Georgia, serif
- fontSize: 17px
- lineHeight: 1.6
- color: rgba(255,255,255,0.8)
- marginBottom: 12px

### Gold accent text
- color: #9A7636

### Icon/emoji decorators
- fontSize: 24px, marginRight: 8px

## Delivery Section Content (verbatim)
**Title:** "Entrega e Acesso"
**Text:** "A tua encomenda chega por email poucos minutos após a compra, para que possas começar a ler hoje — no telemóvel, tablet, computador ou e-reader. Perdeste o ficheiro? Escreve-nos quando quiseres e voltamos a enviá-lo, grátis."

## Guarantee Section Content (verbatim)
**Title:** "Garantia de Reembolso"
**Text:** "A sua compra está protegida durante 90 dias. Se em algum momento deste período sentir que o livro não lhe trouxe valor real, basta escrever-nos. Sem perguntas. Receberá o reembolso total, imediatamente. Os bónus ficam consigo, de qualquer forma."

## CTA Text Blocks (verbatim)
- "Não é o que ganhas. É o que sabes fazer com isso."
- "Não tens um problema de dinheiro. Tens uma pergunta por responder."

## Book Contents Section
**Title:** "O que está dentro do livro"
**Items:**
- "As quatro perguntas" — O que é o dinheiro, o que ele exige, o que o destrói, e o legado
- "Dinheiro sem medo" — Acabar com a ansiedade silenciosa
- "Emprestar e a família" — Dizer não, proteger relações
- "A arte do suficiente" — Saber o que merece o seu dinheiro
- "O que deixas para trás" — Legado vs. discussões

## Responsive Behavior
- **Mobile (<750px):** maxWidth 100%, padding 20px
- **Desktop (≥750px):** maxWidth 720px centered
