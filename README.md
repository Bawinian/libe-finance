# Libe Finance

Start with [SITE-GUIDE.md](SITE-GUIDE.md) for a detailed explanation of the site, its pages, and the original template's limitations. That guide was written before the migration.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run build
npm start
```

## Project layout

| Folder | Purpose |
| --- | --- |
| `app/` | Next.js pages, metadata, global layout, and missing-page response. |
| `components/` | Shared header/footer, mobile menu, FAQ, contact form, back-to-top button, and decorative effects. |
| `public/assets/` | Existing styles, images, Bootstrap grid styles, icons, and fonts. |
| `legacy-template/` | Original HTML and scripts retained for reference; not served by Next.js. |

Internal links use clean routes such as `/facilities` and `/contact`. The old `.html` content URLs redirect permanently to their matching routes. Regular links keep navigation straightforward. Each content page is prerendered during the production build. Run with a Next.js server or compatible host; the redirect configuration requires that runtime.

## What changed

- Converted the original pages into editable React components using Next.js App Router.
- Shared the header and footer across pages.
- Replaced jQuery interface behavior with small React components.
- Kept the existing copy, page layout, images, icons, and styles.
- Retained the decorative Three.js effects, loaded separately with cleanup on unmount.
- Removed the blocking preloader and JavaScript-dependent content hiding. Content appears immediately; the old GSAP entrance animations are no longer used.
- Removed unused demo scripts from the active site. Original files remain in `legacy-template/`.
- Added keyboard handling for the mobile menu and a skip-to-content link.

The existing styles contain unused template rules. They remain to keep the visual migration small; no CSS framework replacement or broad redesign was introduced.

## Editing

Edit page copy in `app/page.jsx` or the relevant `app/<route>/page.jsx`. The header and footer live in their named components. FAQ text is in `components/FAQ.jsx`; enquiry fields and feedback are in `components/ContactForm.jsx`. Styling remains in `public/assets/css/`, with a few migration-specific accessibility and visibility rules in `app/globals.css`.

Keep contact details consistent across the header, footer, contact page, and form response. Original template materials retain their existing attribution; confirm asset and template licences before publishing.

## Form and external services

The enquiry form is **not connected to a mailbox**. Submission validates the required browser fields and displays the existing phone/email guidance. No enquiry is transmitted or stored. A backend service would be separate work.

Google Fonts and the embedded Google Map still require external network access. No production domain is configured; set absolute social-image URLs and canonical metadata once a domain is chosen.

No hosting deployment is configured or performed by this migration.
