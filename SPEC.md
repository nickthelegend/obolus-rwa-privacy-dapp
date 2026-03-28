# SPEC.md: Obolus Confidential Equity Vault

## 1. Project Overview
Obolus is a privacy-preserving vault for tokenized real-world assets (RWAs) on BNB Chain. By leveraging Fully Homomorphic Encryption (fhEVM), Obolus allows users to deposit, hold, and manage a portfolio of Ondo Global Markets (GM) tokens—such as TSLAon, NVDAon, and SPYon—without revealing their specific holdings, entry prices, or total portfolio value to the public.

### The Problem
On public blockchains, transparency is a bug, not a feature, for large-scale investors.
- **Portfolio Leakage**: Every wallet on BNB Chain can be scanned. Competitors and bots know your exact RWA positions.
- **Front-Running**: Large movements into tokenized stocks like NVDAon are visible before execution.
- **Institutional Hesitation**: Family offices and funds avoid on-chain equities because they cannot maintain "Dark Pool" privacy.

### The Solution: Obolus
Obolus creates an **Encrypted State** for your portfolio. While the interaction with the Obolus contract is public, the internal distribution of assets (e.g., "User A holds 40% TSLAon and 60% SPYon") remains encrypted on-chain.

---

## 2. Technical Architecture

### Core Components
- **Vault Contract (fhEVM)**: The main smart contract that handles deposits and mints encrypted "Obolus Shares."
- **fhEVM Encryption**: Uses `euint32` or `euint64` (encrypted integers) to store asset balances per user.
- **Ondo GM Integration**: Interfaces with the `GMTokenManager` and `SyntheticSharesOracle` on BNB Chain to track real-time stock-to-token ratios.

### Encrypted State Storage
```solidity
mapping(address => euint32) private encryptedTSLAon;
mapping(address => euint32) private encryptedSPYon;
```

### User Flow
1. **Deposit**: User deposits 100 TSLAon into the Obolus Vault.
2. **Encryption**: The vault contract converts the raw balance into an encrypted value (`euint`).
3. **Privacy Layer**: The user’s specific asset type and amount are hidden within the vault's total TVL.
4. **Proof of Solvency**: Users can generate a private view of their own portfolio, but external observers only see "Encrypted Vault Interaction."
5. **Withdraw**: User requests a withdrawal; the fhEVM contract decrypts the specific share for that user only and sends the GM tokens back to their wallet.

---

## 3. Product Roadmap

### V1: Confidential Vault (Hackathon Scope)
- Support for top 3 Ondo GM tokens (TSLAon, NVDAon, SPYon).
- fhEVM integration for encrypted balances.
- Dashboard UI with "Reveal" functionality for owners.

### V2: Private Yield & Lending (Post-Hackathon)
- **Confidential Collateral**: Borrow USDon or USDC against encrypted stock positions.
- **Auto-Rebalancing**: Private index management (e.g., "Keep 50/50 split") without revealing trade timing.
- **Cross-Chain Privacy**: Expanding fhEVM vaults to other EVM-compatible RWA chains.

---

## 4. Why BNB Chain?
- **Liquidity**: BNB Chain hosts the official Ondo GMTokenManager and USDon contracts.
- **Efficiency**: Low transaction costs make rebalancing encrypted portfolios economically viable for retail users.
- **Ecosystem**: Fits perfectly into the 2026 BNB RWA Incentive Program.

---

## 5. Design & UI
Obolus uses a high-contrast, "Dark Mode First" aesthetic to represent the security and confidentiality of a "Dark Pool."
- **Theme Name**: Neon Confidential
- **Primary Accent**: `#ccff00` (Neon Lime)
- **Primary Background**: `#000000` (Black)
- **Secondary Colors**: `#85A1FF` (Blue), `#5EF1A0` (Green), `#BB8EF6` (Purple) for different functional zones.
- **Typography**: Inter (Display) for a modern, functional feel.
- **Visual Style**: Liquid Glass and Grid Wireframe motifs for a technical, secure vibe.
