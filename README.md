# Obolus: The First Confidential Equity Vault 🌌

![Obolus Preview](https://github.com/user-attachments/assets/obolus-placeholder-preview.png)

> **"Your Portfolio. Your Business."**  
> Obolus brings institutional-grade privacy to tokenized real-world assets (RWAs) on **BNB Chain**, powered by **fhEVM** and **Chainlink CRE**.

## 🛡️ Overview

**Obolus Landing Page** is the gateway to the Obolus ecosystem. It's designed to showcase a "Neon Confidential" visual identity—premium, institutional-grade, and privacy-first. Obolus allows users to deposit and manage a portfolio of tokenized equities (such as TSLAx, NVDAon, and AAPLx) without revealing holdings or entry prices to the public.

Traditional RWA solutions force transparency on investors. Obolus treats transparency as a bug, offering a "Dark Pool" environment for secure, private asset management.

---

## ✨ Key Features

- **🔐 Layered Privacy**: Balances are stored as encrypted blobs. Not even the smart contract or server "sees" raw quantities during normal operation.
- **📈 Real-Time Dashboards**: Premium interactive charts and portfolio summaries with integrated privacy-reveal mechanisms.
- **⚡ "Neon Confidential" UI**: A high-impact design system built with:
  - **Framer Motion** for smooth, meaningful micro-interactions.
  - **Tailwind CSS 4** for lightning-fast, modular styling.
  - **Lucide Icons** for a clean, consistent interface.
- **🆔 ZK-Identity**: Supports **Reclaim Protocol** for Zero-Knowledge KYC and Sybil resistance.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context + Hooks
- **Branding**: Neon Confidential (Premium Dark Mode)

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: ^20
- **pnpm** or **npm** for dependency management

### 2. Installation & Development
1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
obolus-landing-page/
  app/                    Next.js App Router (Landing Page: `page.tsx`)
  components/             Premium UI components (Vault cards, Hero, Stats)
    ui/                   Reusable Radix-based primitives
  styles/                 Theme tokens and globals (Neon architecture)
  public/                 Brand assets, logos, and textures
```

---

## 🌍 About Obolus

Obolus is built for the **2026 BNB RWA Incentive Program**, aiming to bridge the gap between institutional privacy requirements and the transparency of decentralized finance. By encrypting the state of equities on-chain, we enable family offices and funds to enter the RWA ecosystem without leaking proprietary strategies to prying eyes.

---
<div align="center">
  <p>© 2026 OBOLUS CONFIDENTIAL VAULT | Built on BNB Chain</p>
</div>
