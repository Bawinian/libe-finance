# Table of contents

- [Site overview](#site-overview)
- [Who the site serves](#who-the-site-serves)
- [What visitors can do](#what-visitors-can-do)
- [Page directory](#page-directory)
- [Home page walkthrough](#home-page-walkthrough)
- [Company page](#company-page)
- [Facilities overview](#facilities-overview)
- [The five facilities](#the-five-facilities)
  - [Bridge finance](#bridge-finance)
  - [Working capital loans](#working-capital-loans)
  - [Rental loans](#rental-loans)
  - [Payroll loans](#payroll-loans)
  - [Asset financing](#asset-financing)
- [Contact page and enquiry form](#contact-page-and-enquiry-form)
  - [Fields collected](#fields-collected)
  - [What submitting actually does](#what-submitting-actually-does)
  - [Contact details and map](#contact-details-and-map)
- [How an enquiry progresses](#how-an-enquiry-progresses)
- [Shared navigation and footer](#shared-navigation-and-footer)
- [Design and responsive layout](#design-and-responsive-layout)
- [Animations and interactions](#animations-and-interactions)
- [Accessibility and fallback behavior](#accessibility-and-fallback-behavior)
- [Metadata and external services](#metadata-and-external-services)
- [Original files and dependencies](#original-files-and-dependencies)
- [Unused template features](#unused-template-features)
- [Current limitations](#current-limitations)
- [Straightforward Next.js migration](#straightforward-nextjs-migration)
- [Content maintenance checklist](#content-maintenance-checklist)

# Libe Finance site guide

This guide was written from the original project before the Next.js refactor. It describes what the supplied files implement; it does not independently verify the company's business claims, address, or lending arrangements.

## Site overview

The site introduces **Libe Finance Limited**, which presents itself as a provider of structured credit in Nigeria. Its purpose is to explain five financing facilities and encourage prospective customers to contact the company about a particular need.

This is a brochure and enquiry website. Its central message is that financing terms follow a conversation and assessment. It does not publish a rate card or offer instant online approval.

The original project contains **63 files**: ten HTML documents and 53 assets. There is no package manifest, application server, database, or build configuration in the supplied template.

## Who the site serves

| Audience | How the site describes their needs |
| --- | --- |
| Individuals | Rent and asset purchases tied to a specific need. |
| Businesses | Cash flow, bridging commitments, payroll, rent, and productive assets. |
| Corporates | Larger commitments requiring structured credit. |

## What visitors can do

Visitors can read about the company, compare facility descriptions, open a dedicated page for each facility, read the home page FAQ, find contact details, call using a telephone link, open an email using a mail link, and view the office location on an embedded map. They can enter enquiry details, but the form has no delivery service connected.

## Page directory

| Original file | Next.js route planned | Purpose |
| --- | --- | --- |
| `index.html` | `/` | Main introduction, audiences, facilities, process, company summary, FAQ, and contact prompts. |
| `about.html` | `/about` | Company positioning, audiences, and the process from conversation to funding. |
| `facilities.html` | `/facilities` | A directory of all five facilities. |
| `bridge-finance.html` | `/bridge-finance` | Bridge finance explanation and enquiry prompt. |
| `working-capital.html` | `/working-capital` | Working capital explanation and enquiry prompt. |
| `rental-loans.html` | `/rental-loans` | Rental loans explanation and enquiry prompt. |
| `payroll-loans.html` | `/payroll-loans` | Payroll loans explanation and enquiry prompt. |
| `asset-financing.html` | `/asset-financing` | Asset financing explanation and enquiry prompt. |
| `contact.html` | `/contact` | Telephone, email, address, enquiry form, and map. |
| `404.html` | Unknown URL response | Branded page explaining that the requested page cannot be found. |

## Home page walkthrough

1. **Introduction:** “Credit, structured for the moment you need it,” with links to request a facility or browse facilities.
2. **Facility selector:** a panel headed “A facility, not a teaser rate.” Despite its `hero-calc` CSS class, this panel contains facility links rather than a calculator.
3. **Who it is for:** separate explanations for individuals, businesses, and corporates.
4. **Facilities:** five cards with descriptions and links to their detail pages.
5. **Process:** conversation, assessment, terms, and funding.
6. **Company introduction:** an explanation of specialized credit structured to the need.
7. **FAQ:** answers about facilities, terms, what an enquiry should include, and how funding is agreed.
8. **Contact prompt:** links to the contact page and telephone number.

## Company page

The company page expands the site's positioning: access to finance structured around an identified need. It describes the three customer groups and repeats the four-stage enquiry process. It is an informational page, without account registration or an application workflow.

## Facilities overview

The facilities page presents the same five categories in a card layout. Each card opens a dedicated explanation. It helps visitors select the relevant type of credit before contacting the desk.

## The five facilities

Every detail page follows the same structure: page title, supporting image, explanation, intended audience, typical uses, next steps, links to the other facilities, desk contact details, and a request button.

### Bridge finance

Short-term credit for a defined gap between a payment commitment and expected incoming money. The supplied copy addresses businesses and corporates, including gaps while receivables clear or larger arrangements are completed. An enquiry should explain the amount, timing, and what will settle the bridge.

### Working capital loans

Financing for businesses and corporates across the cycle of buying, delivering, and getting paid. Examples include stocking inventory before a season or confirmed order, covering costs during slow collections, and supporting growth beyond the current cash cycle. An enquiry should explain the trading cycle, the amount, and what the money will pay for.

### Rental loans

Financing for individuals and businesses with a rent obligation. Examples include residential or commercial rent due up front, protecting operating cash while meeting rent, and retaining premises during a defined cash shortage. Visitors are asked to share the premises, rent amount, and period needing coverage.

### Payroll loans

Financing for businesses and corporates whose expected revenue arrives after the salary date. Examples include salary runs before collections clear and wage bills awaiting contract receipts. An enquiry should include the payroll date, total amount, and when the offsetting cash is expected. This page describes employer payroll funding rather than an employee salary-advance product.

### Asset financing

Financing for equipment, vehicles, and other productive assets used by individuals, businesses, or corporates. The copy describes the asset as part of the facility's structure and gives examples of equipment needed to deliver work, operational vehicles, and spreading cost across an asset's earning period. Visitors should describe the asset, supplier where known, and intended user.

## Contact page and enquiry form

### Fields collected

| Field | Required in the original HTML? |
| --- | --- |
| Full name | Yes |
| Email address | Yes; browser email validation is enabled. |
| Phone | Yes |
| Organisation | No |
| Facility | Yes; choose one of the five facilities. |
| What the facility is for | Yes |

### What submitting actually does

The form uses `action="#"`. Its JavaScript stops the normal submission and displays a message explaining that the form is not connected to a mailbox, with the telephone number and email address. It does **not** send an email, store an enquiry, or start an application.

The original script also contains a generic POST handler for a configured endpoint, but no such endpoint is supplied. References to a PHP-enabled host in an error message are inherited template text, not an implemented backend.

### Contact details and map

The supplied pages display:

- **Telephone:** +234 817 490 3144
- **Email:** hello@libefinance.com
- **Hours:** Monday to Friday, 8:00–17:00; the pages do not explicitly specify a timezone.
- **Address:** Flat E-01 Droll Apartments, Plot 81 Cadastral zone C01, Karmo District Abuja.

The Google Maps iframe searches for that address. It needs an internet connection and relies on Google's interpretation of the address.

## How an enquiry progresses

The site describes four stages:

1. **Conversation:** establish who needs the facility and what it is for.
2. **Assessment:** consider the requirement and supporting circumstances.
3. **Terms:** propose and agree the financing terms.
4. **Funding:** proceed once terms are agreed.

These stages describe a business process. The website does not implement or track them digitally.

## Shared navigation and footer

The top bar shows the phone number, hours, and email address. The main header includes the logo, a facilities dropdown, company and contact links, and a “Request a facility” button. Smaller screens use a slide-out menu with an overlay and a close button.

The footer repeats contact details, facility links, company links, the address, and a notice that facilities are subject to assessment and approval. A back-to-top button appears after scrolling.

## Design and responsive layout

The design uses dark neutrals, a vivid red primary accent, silver-gray supporting accents, serif display headings, and sans-serif body text. Some decorative 3D scenes retain blue and mint colors from the original template. Layouts use Bootstrap's grid and the template's custom CSS. Local image assets include logos, photographs, backgrounds, and additional demo imagery.

`assets/css/style.css` holds the main design rules. `assets/css/responsive.css` adjusts layouts at smaller sizes. Font Awesome supplies icons from local font files. Inter and Source Serif 4 are requested from Google Fonts.

## Animations and interactions

The original template includes an animated loading screen, sticky header, mobile menu, scroll reveals, FAQ accordion, back-to-top control, smooth anchor scrolling, and decorative Three.js scenes. GSAP and ScrollTrigger drive motion. The page-specific decorative holders determine which 3D scenes run.

These animations support presentation; they do not perform any lending assessment. Browser support and device performance affect decorative rendering.

## Accessibility and fallback behavior

The source includes image descriptions, labels linked to form inputs, named menu controls, an iframe title, FAQ expansion attributes, and a live status area for form feedback. The animation script checks reduced-motion preferences.

There are limits: the original mobile menu does not implement a complete focus-management pattern, and the loading overlay can block the page if its scripts fail. A `no-js` CSS rule reveals some animated content, but this alone does not make every interaction work without JavaScript. These observations are a source review, not a full accessibility audit.

## Metadata and external services

Each HTML page has its own title and description, plus Open Graph fields and a Twitter card declaration. The original social image paths are relative and no production domain is configured.

External requests come from Google Fonts and the embedded Google Map. Other libraries and assets are supplied locally. No analytics, live social feed, authentication provider, payment service, or email delivery integration is configured in these files.

## Original files and dependencies

| Location | Contents |
| --- | --- |
| Root `*.html` | Ten standalone pages, including the missing-page template. |
| `assets/css/style.css` | Main site and inherited template styles. |
| `assets/css/responsive.css` | Responsive adjustments. |
| `assets/css/plugins/` | Bootstrap and Swiper styles. |
| `assets/css/fontawesome-all.css` | Icon definitions. |
| `assets/js/main.js` | A single script containing shared behavior and unused template demos. |
| `assets/js/plugins/` | jQuery, Bootstrap, GSAP, ScrollTrigger, Swiper, Three.js, and Chart.js. |
| `assets/webfonts/` | Font Awesome font files. |
| `assets/img/` | Branding, backgrounds, company photos, and demo images. |

Original pages load jQuery, Bootstrap, GSAP, ScrollTrigger, Swiper, Three.js, and the main script. Chart.js exists in the folder but is not loaded by those page script lists.

## Unused template features

The main script contains calculators, charts, a loan wizard, dashboard examples, simulated AI indicators, countdowns, sliders, a mock X feed, and blog gallery behavior. The corresponding interfaces are absent from the supplied live pages. Their presence in JavaScript is not evidence of a working dashboard, AI lending system, blog, or customer portal.

Some unused examples contain dollar amounts, demonstration rates, and fabricated activity. They should not be treated as company facts or reintroduced during migration.

## Current limitations

- The enquiry form cannot deliver messages.
- There is no account system, customer dashboard, document upload, database, payment collection, or approval engine.
- No published rates or automatic eligibility checks are implemented.
- There are no dedicated privacy or terms pages in the supplied project.
- There is no supplied test suite or deployment configuration.
- Business details and imagery still require the owner's review before a public launch.

## Straightforward Next.js migration

Use Next.js App Router with ordinary React page components, one shared header and footer, and the existing visual assets. Keep the nine content routes and provide a proper missing-page response. Redirect old `.html` links to their matching clean URLs.

Preserve the supplied copy and layout. Move small interactive features into React components, retain decorative effects only where used, and avoid introducing a database, CMS, authentication, UI framework, or email service. Keep the contact form's unconnected status clear.

The implementation should have standard `dev`, `build`, and `start` commands and a committed dependency lockfile. A successful production build, route checks, and browser checks are useful evidence; they do not establish that a mailbox integration or lending system exists.

Reference for the framework structure: [official Next.js installation guide](https://nextjs.org/docs/app/getting-started/installation).

## Content maintenance checklist

- Update shared contact details consistently in the header, footer, form feedback, and contact page.
- Update facility descriptions and links together when an offering changes.
- Keep claims about terms, eligibility, and approval aligned with the actual service.
- Replace or remove demonstration assets deliberately; retain attribution and licensing records where applicable.
- Configure an actual enquiry delivery service before describing the form as operational.
- Set production metadata and review policy pages before launch.
- Check mobile navigation, keyboard use, FAQ behavior, the contact message, and missing-page navigation after changes.
