# Contentful Setup Guide

This guide walks you through creating the required content models and entries in your Contentful space.

## Prerequisites

1. Sign up at [contentful.com](https://www.contentful.com) (free tier works)
2. Create a new space (or use an existing one)
3. Note your **Space ID** from Settings → General Settings
4. Create a **Content Delivery API** token from Settings → API Keys

---

## Step 1: Create Content Models

Go to your Contentful space → **Content model** → **Add content type**.

---

### Content Type 1: `product`

**Name:** Product
**API Identifier:** `product`

Add the following fields:

| Field Name | Field ID | Type | Required | Notes |
|---|---|---|---|---|
| Name | `name` | Short text | Yes | Product name |
| Slug | `slug` | Short text | Yes | URL-friendly ID (e.g. `chocolate-cake`). Enable **Unique** |
| Description | `description` | Long text | Yes | Full product description |
| Price | `price` | Integer number | Yes | Price in KSh (e.g. `450`) |
| Image | `image` | Media (single file) | Yes | Product photo |
| Category | `category` | Short text | Yes | One of: `cakes`, `cookies`, `pastries`, `bread` |
| Available | `available` | Boolean | Yes | Default: `true`. Uncheck to hide from menu |
| Featured | `featured` | Boolean | No | Default: `false`. Check to show on homepage |
| Allergens | `allergens` | Short text | No | e.g. "Contains gluten, eggs, dairy" |

---

### Content Type 2: `category`

**Name:** Category
**API Identifier:** `category`

Add the following fields:

| Field Name | Field ID | Type | Required | Notes |
|---|---|---|---|---|
| Name | `name` | Short text | Yes | Display name (e.g. `Cakes`) |
| Slug | `slug` | Short text | Yes | Must match product category values. Enable **Unique** |
| Description | `description` | Short text | No | Short tagline for the category |
| Icon | `icon` | Short text | No | An emoji (e.g. `🎂`) |
| Sort Order | `sortOrder` | Integer number | No | Controls display order (lower = first) |

---

### Content Type 3: `siteSettings`

**Name:** Site Settings
**API Identifier:** `siteSettings`

> This is a singleton — you should only ever create **one** entry of this type.

Add the following fields:

| Field Name | Field ID | Type | Required | Notes |
|---|---|---|---|---|
| Bakery Name | `bakeryName` | Short text | Yes | e.g. `Mama's Bakery` |
| Tagline | `tagline` | Short text | Yes | e.g. `Fresh from our oven to your door` |
| Hero Image | `heroImage` | Media (single file) | Yes | Full-width banner photo |
| Hero Headline | `heroHeadline` | Short text | Yes | Large text on the hero |
| Hero Subtitle | `heroSubtitle` | Short text | No | Smaller text below headline |
| WhatsApp Number | `whatsappNumber` | Short text | Yes | Full international format: `+254712345678` |
| Delivery Info | `deliveryInfo` | Long text | Yes | Delivery areas, times, minimum order info |
| About Text | `aboutText` | Long text | Yes | Your bakery's story |
| About Image | `aboutImage` | Media (single file) | No | Photo for the about section |
| Instagram Handle | `instagramHandle` | Short text | No | e.g. `@mamasbakery` (include the @) |

---

## Step 2: Create Category Entries

Go to **Content** → **Add entry** → **Category**. Create one entry per category you want to show:

| Name | Slug | Icon | Sort Order |
|---|---|---|---|
| Cakes | `cakes` | 🎂 | 1 |
| Cookies | `cookies` | 🍪 | 2 |
| Pastries | `pastries` | 🥐 | 3 |
| Bread | `bread` | 🍞 | 4 |

---

## Step 3: Create a Site Settings Entry

Go to **Content** → **Add entry** → **Site Settings**.

Fill in all the required fields. **Publish** the entry when done.

> Only create **one** Site Settings entry. The site will use the first one it finds.

---

## Step 4: Add Products

Go to **Content** → **Add entry** → **Product**.

For each product:
1. Fill in name, slug, description, price, category
2. Upload an image (JPG or PNG, at least 800×600px recommended)
3. Set **Available** to `true`
4. Check **Featured** for 3–6 products you want on the homepage
5. **Publish** the entry

---

## Step 5: Set Up API Access

1. Go to **Settings → API Keys**
2. Click **Add API Key** (or use the default one)
3. Copy the **Space ID** and **Content Delivery API - access token**
4. Add them to your `.env.local` file:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
```

---

## Tips

- **Images:** Contentful optimizes images automatically. Upload full-size originals.
- **Slugs:** Must be lowercase, hyphen-separated, no spaces (e.g. `chocolate-fudge-cake`)
- **Publishing:** Entries must be **Published** (not just saved as Draft) to appear on the site
- **Category slugs** must exactly match the `category` field values on products
- The site refreshes content from Contentful every **1 hour** automatically (ISR)

---

## Content Update Workflow (for the bakery owner)

1. Log in to [app.contentful.com](https://app.contentful.com)
2. Go to **Content**
3. Find the product to update (or click **Add entry → Product** to add a new one)
4. Make your changes and click **Publish**
5. The website will show the updated content within 1 hour
