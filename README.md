# 📖 DnD Spellbook

**Interactive React application for managing a custom DnD world: lore, rules, and character sheets.**

🌐 **Live Demo:** https://yad-spellbook.netlify.app

---

## ✨ Overview

DnD Spellbook is a frontend-only web application built for a custom tabletop RPG campaign.
It acts as a digital companion for both players and the Dungeon Master.

The app provides structured access to:

* world lore
* gameplay rules
* character sheets

---

## 🧩 Features

### 📜 Lore System

* Main world overview
* Economy (including caravans)
* Religion (with visual content)
* Politics & Culture

### ⚔️ Rules

* Core rules
* Combat system
* Additional mechanics

### 🧙 Character Sheets

* Stats & saving throws
* Skills system
* Inventory (including weapons)
* Visual UI-based character sheet

---

## 🛠️ Tech Stack

* ⚛️ React
* 📦 JSON (local data storage)
* 🎨 CSS (BEM methodology in progress)
* ⚙️ react-scripts + webpack 5

---

## ⚠️ Important Notice

This project **does not include a backend**.

* All data is stored in JSON files
* Demo credentials are stored locally
* No real authentication or security layer

👉 This project is intended for:

* demos
* local use
* small private DnD campaigns

Not suitable for production use.

---

## 🚀 Getting Started

```bash
npm install
npm start
```

---

## 📂 Project Structure

```bash
public/
 ├── data/
 │    ├── cards.json
 │    ├── info.json
 │    ├── sheet/
 │    └── story/
 ├── _redirects
 └── index.html

src/
 ├── app/                # App entry & routing
 ├── pages/              # Route-based pages
 │    ├── Home/
 │    ├── Login/
 │    ├── Profile/
 │    ├── Lore/
 │    ├── Rules/
 │    └── Maps/
 │
 ├── components/         # Reusable UI components
 │    ├── layout/
 │    │    ├── Header/
 │    │    ├── Footer/
 │    │    └── MainFrame/
 │    └── ui/
 │         ├── Marquee/
 │         └── ScrollToTop/
 │
 ├── features/           # Business logic
 │    ├── auth/
 │    ├── spells/
 │    └── profile/
 │
 ├── shared/
 │    ├── assets/
 │    │    └── img/
 │    ├── utils/
 │    │    ├── getNum.js
 │    │    └── getValues.js
 │    └── styles/
 │
 └── styles/
```

---

## 🧪 Demo Access

A test account is included inside JSON files for demonstration purposes.

---

## 📜 Changelog (Highlights)

### Beta 1.1.5 — 29 Dec 2024

* Fixed Lore pages
* Caravans moved to Economy
* Added gods images in Religion
* Added Politics & Culture
* Started Map menu development

### Beta 1.1.4 — 26 Dec 2024

* Added Lore pages (Main, Economy, Caravans)
* Added Rules (Core, Combat, Additional)

### Beta 1.1.3 — 22 Dec 2024

* Added Religion page

### Beta 1.1.2 — 11 Dec 2024

* Added character backstory system
* UI improvements (lists, quotes)

### Beta 1.1.1 — 18 Nov 2024

* Minor fixes
* Text highlighting
* Image loading

### Beta 1.1.0 — 12 Nov 2024

* Core character sheet completed

### Beta 1.0.x

* Skills, saving throws, inventory
* Coins system
* CSS restructuring (BEM)
* Performance improvements

---

## 🎯 Purpose

This project was built as:

* a learning project (React + architecture)
* a real tool for a DnD campaign
* a portfolio piece

---

## 🔧 Future Improvements

* Add backend (Firebase / Supabase)
* Replace JSON-based auth with real authentication
* Improve data structure and scalability
* Add map system
* Improve mobile UX

---

## 💬 Notes

This project is actively evolving and reflects a balance between:

* experimentation
* real gameplay needs
* frontend architecture practice
