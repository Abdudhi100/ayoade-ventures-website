# Ayoade Ventures Website

A modern, content-driven product and brand website for **Ayoade Ventures**, built with **Next.js (App Router) + Tailwind CSS + shadcn/ui** and powered by **Sanity CMS**.

Orders flow through **WhatsApp Business** (no backend initially). Hosting runs on **Vercel** + **Sanity free tier**, ensuring zero upfront hosting cost. Future roadmap includes a Django backend for full e-commerce and logistics.

---

## 🚀 Tech Snapshot

* **Frontend**: [Next.js](https://nextjs.org) (App Router, React 18)
* **Styling & UI**: Tailwind CSS + [shadcn/ui](https://ui.shadcn.com) + custom tokens
* **CMS & Assets**: [Sanity.io](https://www.sanity.io) (products, blog, pages, images, CDN)
* **Orders**: Prefilled WhatsApp Business deep links
* **Hosting**: [Vercel](https://vercel.com) (Next.js) + Sanity managed tier
* **SEO & Analytics**: Google Business Profile, Search Console, GA4, sitemap, JSON-LD structured data
* **Future path**: Django backend (Postgres/PostGIS) for inventory, delivery, payments

---

## 🛠️ Development Setup

### Prerequisites

* [pnpm](https://pnpm.io) (preferred package manager)
* Node.js 18+

### Clone & Install

```bash
git clone https://github.com/ayoade-ventures/website.git
cd website
pnpm install
```

### Run Locally

```bash
pnpm dev     # start dev server
pnpm lint    # run eslint checks
pnpm build   # production build
pnpm start   # run built app
```

Then open [http://localhost:3000](http://localhost:3000).

---

## 🌱 Project Phases

### Phase 0 — Foundation & Governance

* GitHub repo + branch policy (`main` = production, feature branches)
* Dev workflow with pnpm + linting + Prettier + EditorConfig
* GitHub → Vercel integration (CI/CD)
* `.env.local.example` for env variables

✅ Acceptance: `pnpm dev` runs locally, CI lints PRs

---

### Phase 1 — Content Modeling (Sanity)

* Product schema (title, slug, descriptions, price, images, category, featured)
* Blog schema, global site settings schema
* Seed content: 10–20 products + hero images + testimonials

✅ Acceptance: Sanity Studio live, owner can add/edit content

---

### Phase 2 — Design & Brand System

* Brand palette:

  * Forest Green `#2A9D8F` (primary)
  * Pumpkin Orange `#E76F51` (accent)
  * Beige `#F4E1D2` (secondary)
  * Off-White `#FAFAFA` (neutral)
  * Dark Brown `#3D2C2E` (dark)
* Fonts: Serif titles (luxury), Sans body (clean)
* Components: Hero, ProductCard, CTA Button, Footer, Floating WhatsApp Button

✅ Acceptance: Components implemented with Tailwind tokens + shadcn

---

### Phase 3 — MVP Build (Frontend + Sanity)

* Pages: Home, Products, About, Blog, How to Order, Contact, Privacy & Terms
* WhatsApp deep link ordering (`https://wa.me/<number>?text=<message>`)
* Data fetching via Sanity client (ISR + revalidation)
* Image optimization with Sanity CDN + `<Image />`

✅ Acceptance: Products page fetches from Sanity, CTA opens WhatsApp with prefilled message

---

### Phase 4 — SEO, Accessibility, Analytics

* Google Business Profile + Search Console
* GA4 funnels (product → WhatsApp click)
* JSON-LD structured data (Organization, Product)
* Sitemap + robots.txt + meta tags + Open Graph

✅ Acceptance: Sitemap accepted in Search Console, GA4 events tracked

---

### Phase 5 — Launch & Local Growth

* Live on Vercel + custom domain
* IG/Facebook integration
* QR codes on packaging → website
* Testimonials published

✅ Acceptance: At least one real WhatsApp order flows through

---

### Phase 6 — Handover & Training

* Owner-friendly guide: add product, upload image, update prices in Sanity
* Screencast or PDF docs
* Admin checklist for weekly tasks

✅ Acceptance: Owner can add product in Sanity & see it live

---

### Phase 7 — Roadmap & Scaling

* Django backend for orders, receipts, inventory
* Paystack/Flutterwave integration
* Retailer portal (login, invoices, delivery)
* Multi-language SEO + analytics dashboards

---

## 📂 Repo Structure

```
/app              # Next.js App Router
  /products
  /about
  /blog
/components       # shared UI components
/lib              # utils, Sanity client
/styles
/schemas          # Sanity schemas
/public
```

---

## 🔑 Environment Variables

| Key                             | Purpose                       |
| ------------------------------- | ----------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID             |
| `NEXT_PUBLIC_SANITY_DATASET`    | Sanity dataset (`production`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`   | WhatsApp E.164 phone number   |
| `VERCEL_URL`                    | Auto set by Vercel            |
| `NEXT_PUBLIC_GA_ID` (optional)  | Google Analytics tracking ID  |

Create `.env.local` using `.env.local.example`.

---

## 📈 Launch Checklist

* [ ] Sanity Studio ready + team invited
* [ ] All product images uploaded + alt text
* [ ] Meta titles/descriptions set
* [ ] Sitemap & robots live, submitted to Search Console
* [ ] Floating WhatsApp CTA visible (desktop + mobile)
* [ ] Contact page: phone, email, address + Google Map
* [ ] Privacy Policy & Terms live
* [ ] Google Business Profile claimed
* [ ] First blog post published
* [ ] Lighthouse perf & accessibility ≥ 80

---

## 🔒 Security & Ops

* Never expose Sanity write/admin tokens in frontend
* Use `.env` + Vercel for secrets
* Backup Sanity dataset regularly
* Monitor logs (Vercel) + GA4 events

---

## 📜 License

MIT — see [LICENSE](./LICENSE).


