# Obolus: The First Confidential Equity Vault 🌌

![Obolus Preview](https://github.com/user-attachments/assets/obolus-placeholder-preview.png)

> **"Your Portfolio. Your Business."**  
> Obolus brings institutional-grade privacy to tokenized real-world assets (RWAs) on **BNB Chain**, powered by **fhEVM**.

## 🛡️ Overview

Obolus is a privacy-preserving vault for tokenized stocks and equities. By leveraging **Fully Homomorphic Encryption (fhEVM)**, Obolus allows users to deposit, hold, and manage a portfolio of **Ondo Global Markets (GM)** tokens—such as TSLAon, NVDAon, and SPYon—without revealing their specific holdings, entry prices, or total portfolio value to the public.

Traditional RWA solutions on public blockchains force transparency on investors. Obolus treats transparency as a bug, offering a "Dark Pool" environment for secure, private asset management.

---

## ✨ Key Features

- **🔐 fhEVM Encryption**: Balances are stored as encrypted integers. Not even the smart contract "sees" the raw quantities during computation.
- **📈 Ondo GM Integration**: Native support for tokenized equities (TSLAon, NVDAon, SPYon) with institutional liquidity.
- **📡 Chainlink CCIP**: Secure cross-chain collateral tracking and message passing.
- **🆔 ZK-Identity**: Integrated with **Reclaim Protocol** for Zero-Knowledge KYC and Sybil resistance.
- **⚡ "Neon Confidential" UI**: A high-impact, premium design system built for the next generation of institutional finance.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State/Privacy**: Fully Homomorphic Encryption (fhEVM)
- **Identity**: Reclaim Protocol (ZK-Proofs)

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: ^20
- **pnpm**: recommended for dependency management

### Installation & Development

1. **Clone & Install**:
   ```bash
   pnpm install
   ```

2. **Run Dev Server**:
   ```bash
   pnpm dev
   ```

3. **Production Build**:
   ```bash
   pnpm build
   pnpm start
   ```

---

## 📁 Project Structure

- `app/`: Next.js App Router core (Main Landing Page: `page.tsx`)
- `design-system/`: Semantic tokens and MASTER.md for the "Neon Confidential" identity.
- `.gsd/`: Roadmap, Architecture, and Stack documentation for AI-augmented development.
- `public/`: Static brand assets and icons.

---

## 🌍 About Obolus

Obolus is built for the **2026 BNB RWA Incentive Program**, aiming to bridge the gap between institutional privacy requirements and the transparency of decentralized finance. By encrypting the state of equities on-chain, we enable family offices and funds to enter the RWA ecosystem without leaking their proprietary strategies to prying eyes and front-running bots.

---

<div align="center">
  <p>© 2026 OBOLUS CONFIDENTIAL VAULT | Built on BNB Chain</p>
</div>
