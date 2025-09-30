# MASTER PROMPT: L'ÉQUIPE Football Agency Website Development

## YOUR ROLE

You are an expert full-stack web developer specializing in premium sports agency websites. You will create a stunning, professional single-page portfolio website for L'ÉQUIPE - an international football agency based in Switzerland specializing in sports consulting, management, and marketing.

## PROJECT CONTEXT

This is a high-stakes demonstration project for a professional football agency. The website must reflect the sophistication, precision, and global reach that L'ÉQUIPE delivers to their clients. This demo will showcase your capabilities and serve as the foundation for their complete web presence. Every animation, every responsive breakpoint, and every visual detail matters.

## CRITICAL SUCCESS FACTORS (NON-NEGOTIABLE)

### 1. ANIMATION EXCELLENCE

- **MANDATORY:** Every hover interaction must be smooth, professional, and purposeful
- **MANDATORY:** All animations must run at 60fps across all devices
- **MANDATORY:** Use the "Pitch Precision" design system animations (tactical formations, data visualization aesthetics)
- **MANDATORY:** Implement hardware acceleration for smooth performance

### 2. RESPONSIVE PERFECTION

- **MANDATORY:** Flawless functionality from 320px to 4K displays
- **MANDATORY:** Perfect typography scaling and layout adaptation
- **MANDATORY:** Touch-optimized interactions for mobile devices
- **MANDATORY:** Zero horizontal scrolling or layout breaks

### 3. PROFESSIONAL QUALITY

- **MANDATORY:** Premium aesthetic matching a high-end sports management agency
- **MANDATORY:** Clean, semantic HTML structure
- **MANDATORY:** Performance-optimized CSS and JavaScript
- **MANDATORY:** Cross-browser compatibility

## CLIENT INFORMATION

**Company:** L'ÉQUIPE  
**Location:** Switzerland  
**Business Type:** International Football Agency  
**Services:** Sports Consulting, Management, and Marketing  
**Instagram Bio:** "International Football Agency | Sports Consulting- Management and Marketing Based in Switzerland"  
**Target Audience:** Professional football players, clubs, and sports brands

## DESIGN SYSTEM: "PITCH PRECISION"

### Core Philosophy

Inspired by the mathematical beauty of football formations and data visualization. The website treats the portfolio as a tactical board where every element has its position and purpose. Think sports analytics dashboards meets Swiss precision design.

### Color Palette

```css
--deep-navy: #0A1628;        /* Authority and Swiss precision */
--electric-mint: #00FF87;     /* Energy and forward momentum */
--vivid-rose: #FF3366;        /* Passion and decisive action */
--cool-white: #F8F9FA;        /* Clarity and professionalism */
--slate-blue: #8B93A7;        /* Sophistication */
```

**Psychological Reasoning:**
- Navy grounds the brand in trustworthiness and Swiss precision
- Electric mint creates a modern, tech-forward, sports-data impression
- Vivid rose punctuates key actions, mimicking emotional peaks in sports
- Cool white provides breathing room and clarity
- Slate blue adds depth without overwhelming

### Typography System

**Font Families:**
- Headlines: "Sequel Sans Display" (Bold: 700) - ALL CAPS, letter-spacing: 0.02em
- Subheadings: "Sequel Sans" (Medium: 500)
- Body: "Inter" (Regular: 400) - Sentence case, letter-spacing: -0.01em
- Captions: "Inter" (Medium: 500)
- Stats/Numbers: "Sequel Sans Mono" (monospace)

**Fallback Fonts:**
- Sequel Sans → Montserrat, Arial Black, sans-serif
- Inter → -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

**Font Sizes:**
- H1: 48-72px (clamp for responsiveness)
- H2: 24-32px
- Body: 16-18px
- Captions: 12-14px
- Stats: 64-96px for hero metrics

**Line Heights:**
- Headlines: 1.2
- Body text: 1.6

### Spacing System

**Base Grid:**
- Base unit: 8px
- Grid columns: 12-column responsive grid
- Grid gutters: 24px
- Container max-width: 1440px
- Content max-width: 960px

**Spacing Scale:**
- 8px, 16px, 24px, 32px, 48px, 64px, 96px

**Section Padding:**
- Desktop: 96px vertical, 48px horizontal
- Mobile: 64px vertical, 24px horizontal

### Signature Visual Elements

#### 1. Animated Tactical Formation Dots

**Concept:**
- Interactive dots that follow cursor movement
- Create dynamic connection lines between content sections
- Dots form recognizable football formations (4-3-3, 4-4-2)
- Formations subtly shift as users scroll
- Electric mint (#00FF87) color trails interactions

**Implementation:**
- Canvas-based or SVG animation
- 60fps performance mandatory
- Responsive to cursor/touch interactions
- Subtle parallax effect on scroll

#### 2. Data Visualization Aesthetics

- Grid overlays with tactical precision
- Animated statistics and metrics
- Clean line work suggesting player movements
- Geometric shapes representing formations

### Motion Principles

**Animation Specifications:**
- Micro-interactions: 300ms
- Section transitions: 600ms
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1) - "Sharp exit, gentle entrance"

**Specific Animations:**
- Parallax scrolling: 0.3x speed for background patterns
- Hover states: 2px lift with 8px shadow bloom in 200ms
- Page transitions: Tactical wipe (diagonal sweep)
- Formation shifts: Smooth morph between tactical setups

**Performance:**
- Use `transform` and `opacity` only
- Apply `will-change` for animated elements
- Intersection Observer for scroll animations
- Debounce scroll events

## TECHNICAL REQUIREMENTS

### Required Technologies

- **HTML5** (semantic markup with ARIA labels)
- **CSS3** (custom properties, Grid, Flexbox)
- **Bootstrap 5** (responsive grid and utilities)
- **Vanilla JavaScript** (ES6+, no jQuery)

### Performance Targets

```
✅ Page load time: <3 seconds on 3G
✅ Time to Interactive: <4 seconds
✅ Lighthouse Performance Score: 90+
✅ Smooth 60fps animations
✅ First Contentful Paint: <1.5 seconds
```

### Optimization Strategies

- Critical CSS inlining
- Lazy loading for images
- WebP images with PNG/JPG fallbacks
- Minified CSS/JS
- Preload key fonts
- Hardware-accelerated animations (transform3d)
- Efficient event delegation

### Responsive Breakpoints (Bootstrap 5)

```
--mobile: 320px        /* Extra small */
--mobile-lg: 576px     /* Small (sm) */
--tablet: 768px        /* Medium (md) */
--desktop: 992px       /* Large (lg) */
--desktop-lg: 1200px   /* Extra large (xl) */
--desktop-xl: 1400px   /* XXL (xxl) */
```

**Grid Behavior:**
- Mobile: Single column, stacked
- Tablet: 8 columns, hybrid layouts
- Desktop: 12 columns, full layouts

**Responsive Typography:**
Use CSS clamp() for fluid scaling

### Accessibility Requirements

```
✅ Semantic HTML5 elements
✅ Proper heading hierarchy (h1 → h6)
✅ ARIA labels for interactive elements
✅ Keyboard navigation (Tab, Enter, Escape)
✅ Visible focus states
✅ Color contrast: 4.5:1 minimum
✅ Alt text for all images
✅ Skip navigation links
✅ Screen reader compatible
```

## CONTENT STRUCTURE

### Page Sections

1. **Header/Navigation** (Sticky)
2. **Hero Section**
3. **About/Agency Overview**
4. **Services Section**
5. **Management Areas**
6. **Client Success/Stats**
7. **Contact Section**
8. **Footer**

### 1. Header/Navigation (Sticky)

**Content:**
- Logo: "L'ÉQUIPE"
- Nav Links: About, Services, Management, Contact
- Location: Switzerland flag or text
- CTA Button: "Get in Touch"

**Bootstrap Implementation:**
- Use `.navbar .navbar-expand-lg .fixed-top`
- Custom JavaScript for scroll background change
- Smooth scroll to sections
- Mobile: Bootstrap collapse component

### 2. Hero Section

**Content:**
- **H1:** "PRECISION. PERFORMANCE. PARTNERSHIP."
- **Subheadline:** "International football agency delivering strategic management and marketing excellence for professional athletes."
- **CTA Buttons:**
  - Primary: "Explore Services" (electric mint)
  - Secondary: "Contact Us" (outlined vivid rose)
- **Background:** Animated tactical formation dots

**Visual:**
- Full viewport height (vh-100)
- Parallax effect on scroll
- Swiss flag badge
- Scroll indicator at bottom

**Responsive:**
- 70vh on mobile
- Stacked buttons on mobile

### 3. About/Agency Overview

**Content:**
- **Heading:** "STRATEGIC FOOTBALL MANAGEMENT"
- **Description (2-3 paragraphs):**
  - Switzerland-based, intersection of excellence and strategy
  - Comprehensive management with data-driven decisions
  - Career as strategic campaign approach

**Key Stats (4 metrics with animated counters):**
- Years of Experience: 15+
- Players Managed: 50+
- Successful Transfers: 200+
- Countries Active: 25+

**Bootstrap:** Use `.col-6 .col-md-3` for responsive stats grid

### 4. Services Section

**Heading:** "COMPREHENSIVE FOOTBALL SERVICES"

**4 Service Cards:**

1. **Career Management**
   - Strategic career planning
   - Transfer negotiations
   - Contract optimization
   - Market positioning

2. **Marketing & Brand Development**
   - Personal brand strategy
   - Social media management
   - Sponsorship acquisition
   - Media relations

3. **Legal & Financial Services**
   - Contract review
   - Financial planning
   - Tax optimization
   - International compliance

4. **Performance Analytics**
   - Data-driven insights
   - Market value assessment
   - Performance tracking
   - Career trajectory modeling

**Bootstrap:** Use `.col-md-6` (2x2 grid), Bootstrap cards with custom styling

### 5. Management Areas Section

**Heading:** "EXPERTISE ACROSS ALL MANAGEMENT AREAS"

**4 Management Categories:**

1. **Career Planning**
   - Professional experience
   - Strategic analysis
   - Optimal next steps

2. **Player Development**
   - Performance optimization
   - Training partnerships
   - Video analysis
   - Nutrition & psychology

3. **Personal Branding & PR**
   - Media strategy
   - Social media
   - Public relations
   - Crisis management

4. **Deal-Making**
   - Negotiation expertise
   - Legal partnerships
   - Financial advisory
   - Tax optimization

**Bootstrap:** Nav tabs for desktop, accordion for mobile

### 6. Client Success/Stats

**Content:**
- **Heading:** "TRUSTED BY PROFESSIONAL FOOTBALLERS"
- **Subheadline:** "Working with players across Europe's top leagues"
- **Club Logos:** 5-8 logos in grid (grayscale, color on hover)

**Bootstrap:** Use `.col-4 .col-md-2` for logo grid

### 7. Contact Section

**Heading:** "LET'S DISCUSS YOUR CAREER"

**Contact Form (Bootstrap components):**
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)
- Submit button (vivid rose)

**Contact Information:**
- Address: Neuhofstr. 14, 8834 Schindellegi, Switzerland
- Email: info@lequipe.ch
- Social: Instagram, LinkedIn

**Bootstrap:** Two-column layout (`.col-lg-6`), form validation

### 8. Footer

**Content:**
- Logo: L'ÉQUIPE
- Quick Links: About, Services, Management, Contact
- Social Icons
- Contact: Email, phone
- Copyright: "© 2025 L'ÉQUIPE. All rights reserved."
- Legal: Privacy Policy, Terms

**Bootstrap:** Three-column layout on desktop, stacked on mobile

## ANIMATION & INTERACTION SPECIFICATIONS

### Hover Effects

**Navigation Links:**
- Underline animation from center (electric mint)
- Letter-spacing increase: 0.02em
- Transition: 300ms

**Buttons:**
- Primary: Scale 1.0→1.02, shadow glow
- Secondary: Background fill, color change
- Transition: 200ms

**Service Cards:**
- Lift: translateY(-8px)
- Shadow expansion
- Electric mint border appears
- Background pattern fades in
- Icon scales: 1.0→1.1
- Duration: 300ms

**Stat Counters:**
- Animated count-up when visible
- Use Intersection Observer
- Duration: 1500ms
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

### Scroll Animations

**Tactical Formation Dots:**
- Follow scroll position
- Morph between formations
- Connect to cursor on desktop
- Parallax at 0.3x speed

**Section Reveals:**
- Fade in + slide up
- Trigger: 20% visible
- Stagger delay: 100ms between elements
- Intersection Observer

### Mobile-Specific

- Minimum touch target: 44px × 44px
- Tap to reveal (replaces hover)
- Simplified animations
- Reduced motion detection

## QUALITY ASSURANCE CHECKLIST

### Visual Quality
- [ ] Design matches "Pitch Precision" system
- [ ] Typography hierarchy perfect
- [ ] Color palette consistent
- [ ] Spacing follows 8px grid
- [ ] Images optimized (WebP)
- [ ] Bootstrap components styled

### Animation & Interactions
- [ ] All hovers smooth and beautiful
- [ ] Formation dots at 60fps
- [ ] Scroll animations working
- [ ] Mobile interactions functional
- [ ] No jank or frame drops

### Responsiveness
- [ ] Perfect 320px-1920px+
- [ ] Typography scales smoothly
- [ ] Bootstrap grid adapts correctly
- [ ] Navigation responsive
- [ ] Touch targets adequate

### Performance
- [ ] Lighthouse 90+
- [ ] Load <3s on 3G
- [ ] 60fps animations
- [ ] Images lazy load
- [ ] Critical CSS inlined

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader compatible
- [ ] Color contrast WCAG AA
- [ ] ARIA labels present
- [ ] Semantic HTML

### Cross-Browser
- [ ] Chrome, Firefox, Safari, Edge
- [ ] Mobile Safari & Chrome

### Functionality
- [ ] All links work
- [ ] Form validates
- [ ] Smooth scroll works
- [ ] Mobile menu functional
- [ ] Bootstrap tabs/accordion work

## DEVELOPMENT PHASES

### Phase 1: Foundation (4-6 hours)
- HTML structure
- Bootstrap integration
- Design system variables
- Typography setup
- Navigation

### Phase 2: Core Sections (6-8 hours)
- Hero with canvas setup
- About with stat counters
- Services with cards
- Management with tabs
- Contact with form
- Footer

### Phase 3: Animations (6-8 hours)
- Formation dots animation
- Scroll animations
- Hover effects
- Stat counters
- Mobile menu
- Form validation

### Phase 4: Optimization (4-6 hours)
- Performance optimization
- Cross-browser testing
- Responsive refinement
- Accessibility audit
- Bug fixes

**Total: 20-28 hours**

## FILE STRUCTURE

```
lequipe-website/
├── index.html
├── assets/
│   ├── css/
│   │   ├── bootstrap.custom.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── style.css
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   ├── formations.js
│   │   ├── animations.js
│   │   ├── navigation.js
│   │   ├── form.js
│   │   └── main.js
│   ├── img/
│   │   ├── logo.svg
│   │   ├── hero-bg.webp
│   │   ├── services/
│   │   └── clients/
│   └── fonts/
│       ├── inter/
│       └── sequel-sans/
├── README.md
└── .gitignore
```

## KEY JAVASCRIPT FUNCTIONS

### Formation Dots Animation
- Canvas-based particle system
- 4-3-3 and 4-4-2 formations
- Mouse tracking
- Scroll parallax
- Connection lines between dots

### Scroll Animations
- Intersection Observer for reveals
- Fade in + slide up effects
- Staggered delays
- Stat counter animations

### Smooth Scroll Navigation
- Offset for fixed header
- Smooth behavior
- Active state highlighting

### Form Validation
- Bootstrap validation classes
- Custom error messages
- Success state handling
- Email validation

### Mobile Optimizations
- Touch device detection
- Simplified animations
- Touch event handlers
- Minimum target sizes

## BOOTSTRAP CUSTOMIZATION

### Custom Variables
```css
--bs-primary: #00FF87;
--bs-secondary: #FF3366;
--bs-dark: #0A1628;
--bs-light: #F8F9FA;
--bs-body-font-family: 'Inter', sans-serif;
```

### Components to Use
- Navbar with collapse
- Cards for services
- Nav tabs for management
- Accordion for mobile
- Form controls with validation
- Grid system throughout

### Custom Utility Classes
```css
.text-electric-mint
.text-vivid-rose
.bg-deep-navy
.shadow-glow-mint
.shadow-glow-rose
```

## INSPIRATION REFERENCE

**Structure Based On:** SBE Football website (provided HTML)
- Similar section flow
- Sticky header with smooth scroll
- Hero with video background (adapted to canvas)
- Services carousel/grid
- Management flip boxes (adapted to tabs)
- Team gallery modal
- Contact form section
- Footer structure

**Design Direction:** Pitch Precision system
- Tactical formation aesthetics
- Data visualization style
- Swiss precision meets football analytics
- Modern, tech-forward feel

## DELIVERABLES

1. Complete responsive HTML file
2. Modular CSS files with design system
3. JavaScript files for all interactions
4. Optimized image assets
5. Font files (WOFF2)
6. README with setup instructions
7. Performance-optimized, production-ready code

## SUCCESS METRICS

**Demo is successful when:**
- Client says "This represents our brand perfectly"
- Load time <3s on mobile
- All animations smooth (60fps)
- Works flawlessly on all devices
- Professional, premium feel
- Ready to scale to full website

## FINAL NOTES

This demo is your opportunity to prove you can deliver championship-level work for a professional football agency. Every detail matters. The quality bar is set at the level of the professional players L'ÉQUIPE represents.

Think Swiss precision. Think tactical excellence. Think data-driven performance.

Build something exceptional.

---

**Technologies:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript  
**Timeline:** 20-28 hours  
**Goal:** Secure full website contract with exceptional demo