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

---

## 🛒 Checkout Flow & Order Summary System

To simulate a real-world food ordering experience, a structured and state-driven checkout system was implemented. This enhances user flow clarity and e-commerce behavior.

### 🔹 Proceed to Checkout Integration

- Added a **“Proceed to Checkout”** button from the cart.
- Added a **Add to Cart”** button at the food-details page.
- Linked checkout navigation to the **Account Page** for order review.
- Structured a clear transition from cart interaction to order confirmation.

This ensures a logical and intuitive purchase journey.

---

### 🔹 Multi-Step Order Progression

Designed a step-based order tracking system to visually guide users through the ordering lifecycle:

1. Order Review
2. Order Confirmation
3. Payment Processing
4. Payment Confirmation

Each stage is visually represented to simulate a real client-side transaction flow and improve user trust through transparent progress feedback.

---

### 🔹 Asynchronous Loading Simulation

To improve UX realism and demonstrate frontend state orchestration:

- Implemented loading UI states between order steps.
- Simulated **1-second asynchronous delays per step**.
- Added a **3-second delay before triggering the final Order Confirmation modal**.

This models real backend communication behavior while remaining fully client-side.

---

### 🔹 State-Driven Step Management

The entire order flow is controlled via React state management:

- Active step tracking
- Loading state toggling
- Conditional modal rendering
- Controlled step progression logic

This ensures predictable UI transitions and clean, maintainable state updates — reflecting real-world frontend architecture patterns.

---

## 📱 Enhanced Mobile Experience

### 🔹 Responsive Navbar Dropdown

To improve usability on smaller screens:

- Implemented a mobile-friendly dropdown navigation menu.
- Improved accessibility and interaction clarity.
- Ensured seamless responsiveness across breakpoints.

---

### 🔹 Conditional Footer Rendering

Following the Figma mobile layout:

- The footer is intentionally hidden on smaller screens.
- Reduced visual clutter.
- Maintained content focus and layout integrity.

---

## 📍 Delivery Address Modal Improvement

Refined the address update experience by:

- Adding a **confirmation button** inside the delivery address change modal.
- Requiring explicit confirmation before progressing to the next step.
- Improving navigation clarity and preventing unintended transitions.

This strengthens the overall checkout UX flow.

---

## ✨ Engineering Highlights

These enhancements elevate the project beyond static UI replication by introducing:

- Structured client-side checkout simulation
- Multi-step UI state orchestration
- Asynchronous loading behavior modeling
- Responsive mobile-first navigation improvements
- Controlled modal-driven progression systems

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
