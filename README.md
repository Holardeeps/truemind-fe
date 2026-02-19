# 🍲 Chuks Kitchen – Online Food Store

Chuks Kitchen is a modern online food ordering web application built with **Next.js (App Router)**.  
The goal of this project was to accurately mirror the provided Figma design while improving UX decisions where necessary and implementing scalable frontend architecture.

---

## 🚀 Project Overview

This project recreates the following core pages from the design:

- ✅ Home Page
- ✅ Explore Page
- ✅ Food Details Page
- ✅ Onboarding Page

The application focuses on clean UI structure, reusable components, and intuitive routing to simulate a real-world food ordering experience.

---

## 🧩 Key Features Implemented

### 1️⃣ Pixel-Accurate UI Implementation

- Carefully mirrored the Figma design for both desktop and mobile layouts.
- Maintained spacing, typography, layout structure, and component alignment.

---

### 2️⃣ Improved Mobile UX Decision

In the mobile Figma design, there was a **Sign In** button positioned at the top right alongside other CTAs.

To reduce CTA overload and improve clarity:

- ❌ Removed the redundant "Sign In" button on mobile.
- ✅ Linked the **"Start Your Order"** button to the sign-in page instead.

This simplified the mobile experience and reduced cognitive friction.

---

### 3️⃣ Dynamic Routing with Next.js App Router

- Implemented dynamic routing using:
- Each food card dynamically routes to its specific food details page.
- Used the Next.js **App Router** to simplify route structure and improve UX flow.
- Structured the project for scalable routing patterns.

---

### 4️⃣ Component Architecture

This project balances reusable UI libraries with custom product components:

#### 🔹 shadcn/ui

Used for:

- Reusable UI primitives
- Layout structures
- Clean, consistent styling foundation

#### 🔹 Custom Styled Components

Created custom components tailored to product needs:

- `FoodCard`
- `PopularCard`
- Reusable selectable option components
- Structured layout wrappers

This hybrid approach allowed:

- Faster development
- Design flexibility
- Clean separation of concerns

---

### 5️⃣ Interactive Food Customization

Implemented:

- Selectable protein options (single-select behavior)
- Toggleable extra options (multi-select behavior)
- Dynamic total price calculation based on selected options

State is managed cleanly using React state hooks with TypeScript safety.

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Dynamic Routing**

---

## 🧠 Architecture Highlights

- Structured folder system using the App Router
- Dynamic route handling with `[id]`
- Controlled component state for food selection
- Clean separation of data, UI, and logic
- Scalable component structure

---

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
