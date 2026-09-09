# 🦷 Shri Dental Care — Official Website

> Modern, responsive dental clinic website for **Shri Dental Care**, Sector 35, Kamothe, Navi Mumbai.

---

## 📋 Project Overview

This is the official website for **Shri Dental Care** — a trusted dental clinic with 15+ years of experience serving patients in Kamothe, Navi Mumbai. The site is built with React + Vite and features a clean, editorial design with smooth animations.

**Live Clinic Details**
- 📍 Shop No 27, 28, Satyaketu Complex, Plot No 09, Opp Union Bank of India, Near Police Station, Sector 35, Kamothe, Navi Mumbai — 410209
- 📞 +91 98926 94771 / +91 95037 03143
- 🕙 Monday – Sunday: 10:00 AM to 10:00 PM (Open All 7 Days)
- ⭐ Rated 4.9★ by 500+ patients

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 8 |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Styling | Vanilla CSS (custom design system in `src/styles.css`) |
| Deployment | Vercel |
| Contact Form | Google Apps Script → Google Sheets |

---

## 📁 Project Structure

```
Shridentalcare_Project/
├── public/                    # Static assets served as-is
│   └── images/
│       ├── DRs/               # Doctor profile photos
│       ├── About/             # Clinic interior gallery (1–10.jpg)
│       └── ...                # Service & other images
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── AutoCarousel.jsx   # Auto-sliding image carousel with doctor captions
│   │   ├── CTA.jsx            # Call-to-action banner
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── HeroCarousel.jsx   # Home page hero carousel
│   │   ├── Layout.jsx         # Page layout wrapper
│   │   ├── ScrollReveal.jsx   # Intersection-observer scroll animations
│   │   ├── ScrollToTop.jsx    # Auto scroll to top on route change
│   │   └── ui/
│   │       └── Badge.jsx      # Reusable badge/pill component
│   ├── data/
│   │   └── clinic.js          # ⭐ Single source of truth — clinic info, doctors, services
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── About.jsx          # About the clinic
│   │   ├── Services.jsx       # All dental services
│   │   ├── Team.jsx           # Doctor profiles + hero carousel
│   │   └── Contact.jsx        # Contact form + map + details
│   ├── styles.css             # Global CSS design system
│   └── main.jsx               # App entry point + router setup
├── google_apps_script.js      # Google Apps Script code for form → Sheets
├── GOOGLE_SHEET_SETUP.md      # Guide to set up the contact form backend
├── .env.example               # Environment variable template
├── vercel.json                # Vercel deployment config (SPA rewrites + caching)
└── vite.config.js             # Vite build config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### 1. Clone the repository
```bash
git clone <repository-url>
cd Shridentalcare_Project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` and add your Google Apps Script URL (see Contact Form Setup below):
```env
VITE_GOOGLE_SHEET_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

### 4. Start the development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, services overview, testimonials, CTA |
| `/about` | About | Clinic story, gallery carousel, mission & values |
| `/services` | Services | Full list of dental treatments & specialities |
| `/team` | Team | Doctor profiles with auto-cycling hero carousel |
| `/contact` | Contact | Enquiry form, clinic details, directions |

---

## ✏️ Updating Clinic Data

All editable clinic content lives in one place: `src/data/clinic.js`

- **Clinic details** (phone, address, timings) → `export const clinic`
- **Navigation links** → `export const navItems`
- **Services list** → `export const services`
- **Doctor profiles** → `export const specialists`
  - Format: `[name, role, imagePath, bio, qualification, experience]`
- **Testimonials, highlights, etc.** → other named exports in the same file

---

## 📸 Adding / Replacing Doctor Photos

1. Place the image in `public/images/DRs/` (supports `.PNG`, `.jpg`, `.webp`)
2. Update the path in the relevant specialist entry inside `src/data/clinic.js`:
   ```js
   ['Dr. Name Here', 'Role Title', '/images/DRs/your-photo.PNG', 'Bio text...', 'BDS', '10 Years']
   ```

---

## 📬 Contact Form Setup

The contact form submits to a **Google Apps Script Web App** that writes data into a Google Sheet.

1. Follow the step-by-step guide in `GOOGLE_SHEET_SETUP.md`
2. Deploy the script from `google_apps_script.js` as a Web App
3. Copy the generated Web App URL into your `.env` file as `VITE_GOOGLE_SHEET_URL`

---

## ☁️ Deployment (Vercel)

This project is pre-configured for Vercel via `vercel.json`:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **SPA routing:** All routes rewrite to `/index.html`
- **Caching:** Images cached for 1 year; CSS/JS cached for 1 day

### Deploy steps
1. Push your code to GitHub
2. Import the repository on vercel.com
3. Add the `VITE_GOOGLE_SHEET_URL` environment variable in Vercel project settings
4. Deploy — Vercel auto-deploys on every push to `main`

---

## 🎨 Design System

The entire visual language is defined in `src/styles.css`:

- **Primary colour:** `#0077b6` (dental blue)
- **Accent teal:** `#0e7072`
- **Background:** `#f8fafc` (light grey)
- **Typography:** Plus Jakarta Sans (headings) + Playfair Display (editorial italics)
- **Cards:** Rounded corners (`border-radius: 22–28px`), subtle shadows
- **Animations:** CSS transitions + `ScrollReveal` component (Intersection Observer)

---

## 📞 Clinic Contact

| | |
|---|---|
| **Phone** | +91 98926 94771 |
| **WhatsApp** | wa.me/919892694771 |
| **Email** | shridentalcare@gmail.com |
| **Address** | Sector 35, Kamothe, Navi Mumbai — 410209 |

---

*Built with ❤️ for Shri Dental Care, Kamothe.*
