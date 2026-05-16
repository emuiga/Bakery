# Nakuru Home Bakery

A beautiful, simple bakery website for a small home-based bakery in Nakuru, Kenya. Customers browse the menu and order via WhatsApp. Content is managed through Contentful CMS — no code changes needed to update products.

## Tech Stack

- **Next.js 16** (App Router, ISR)
- **TypeScript**
- **Tailwind CSS v4**
- **Contentful CMS** (Delivery API)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/emuiga/Bakery.git
cd Bakery
git checkout develop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your Contentful credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here
```

You can find these in your Contentful dashboard under **Settings → API Keys**.

> See **CONTENTFUL_SETUP.md** for full instructions on setting up the content models in Contentful.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  page.tsx              # Homepage (hero, featured products, about, delivery)
  menu/
    page.tsx            # Full menu with category sections
    [slug]/
      page.tsx          # Individual product detail page
components/
  Navbar.tsx            # Top navigation bar
  Footer.tsx            # Footer with WhatsApp and Instagram links
  ProductCard.tsx       # Product card used in grids
  WhatsAppButton.tsx    # WhatsApp order button with pre-filled message
  ContentfulSetupNotice.tsx  # Shown when env vars are not configured
lib/
  contentful.ts         # Contentful client and typed query helpers
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, featured products, about section, delivery info |
| `/menu` | Full menu grouped by category with WhatsApp ordering |
| `/menu/[slug]` | Individual product detail page |

## ISR (Incremental Static Regeneration)

All pages revalidate every **1 hour** (`revalidate = 3600`). When you update content in Contentful, changes will appear on the live site within an hour — no redeployment required.

## Deployment

Deploy to Vercel or any Node.js host that supports Next.js:

1. Push the `develop` branch (or merge to `main` for production)
2. Set the environment variables in your hosting dashboard:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
3. Deploy

## Branch Strategy

- `main` — production-ready branch
- `develop` — active development branch (all changes go here first)
