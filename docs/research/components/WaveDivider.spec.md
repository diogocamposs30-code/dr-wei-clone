# WaveDivider Specification

## Overview
- **Target file:** `src/components/WaveDivider.tsx`
- **Interaction model:** time-driven (CSS animation)

## DOM Structure
Three stacked divs:
1. Top spacer (colored background 1)
2. SVG wave shape (transitioning from bg1 to bg2)
3. Bottom spacer (colored background 2)

Accepts props: `fromColor` and `toColor` to support both white→dark and dark→white transitions.

## Computed Styles

### SVG container
- width: 100%
- height: 50px (viewBox "0 24 150 28")
- overflow: hidden
- position: relative

### Wave shape
- fill: currentColor (inherits from parent)
- 4 animated parallax groups

## Animation
The SVG uses 4 parallax layers at different speeds:
- `.parallax1`: translateX(-90px) over 7s, linear, infinite
- `.parallax2`: translateX(-85px) over 10s, linear, infinite
- `.parallax3`: translateX(-80px) over 13s, linear, infinite
- `.parallax4`: translateX(-160px) over 20s, linear, infinite

## SVG Content
```svg
<svg class="waves-animated" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28" preserveAspectRatio="none">
  <defs>
    <path id="gentle-wave"
    d="M-160 44c30 0
      58-18 88-18s
      58 18 88 18
      58-18 88-18
      58 18 88 18
      v44h-352z" />
  </defs>
  <g class="parallax1"><use href="#gentle-wave" x="50" y="3" fill="currentColor"/></g>
  <g class="parallax2"><use href="#gentle-wave" x="50" y="0" fill="currentColor"/></g>
  <g class="parallax3"><use href="#gentle-wave" x="50" y="9" fill="currentColor"/></g>
  <g class="parallax4"><use href="#gentle-wave" x="50" y="6" fill="currentColor"/></g>
</svg>
```

## Usage Variants
- **White to Dark**: from `#ffffff` to `#0e0e0e` — wave is dark colored, background starts white
- **Dark to White**: from `#0e0e0e` to `#ffffff` — wave is white colored, background starts dark

## Responsive Behavior
- Full width at all breakpoints
- Height auto from SVG viewBox ratio
