![image](https://github.com/user-attachments/assets/d37eb896-12ae-42fa-a342-bef157934b5d)













# Makoto-R1-Final-DSR1: Solana Token Auto-Sniper  
**Automatically snipe tokens from trusted Twitter/X accounts**  

---

## 🚀 **Key Features**  
- **Targeted Account Scanning**: Plug in specific Twitter/X handles (e.g., influencers, project teams) to monitor.  
- **Solana-Focused Detection**: Scans posts for:  
  - `$TICKER` cashtags (e.g., `$MOON`)  
  - Solana contract addresses (e.g., `7VQ...3a9`)  
  - `pump.fun` links.  
- **Instant Auto-Claim**: Triggers actions the moment valid tokens are detected.  

---

## 🤖 **How It Works**  
1. **Add Accounts**: Input Twitter/X handles via our platform’s dashboard.  
2. **Real-Time Scanning**: The bot monitors **all posts** from those accounts.  
3. **AI Validation**: Filters scams using DeepSeek-R1’s context analysis.  
4. **Auto-Claim**: Executes Solana blockchain actions (e.g., buying, claiming airdrops).  

---

## 🛠️ **Tools & Backend**  
| Component | Purpose |  
|-----------|---------|  
| **Twitter/X API** | Fetches posts from user-specified accounts. |  
| **Solana RPC Nodes** | Executes on-chain transactions (e.g., token claims). |  
| **DeepSeek-R1 AI** | Analyzes posts to flag scams. |  
| **Custom Backend** | Connects the UI to automation workflows. |  

---

## 🏁 **Getting Started**  
1. **Visit Our Platform**: Log in and navigate to the **Token Sniper** dashboard.  
2. **Add Accounts**: Input Twitter/X handles (e.g., `@CryptoNewsSOL`).  
3. **Activate**: Enable the bot—it runs 24/7 in the background.  

---

## ❓ **Why This Matters**  
- **Precision**: Focuses only on accounts *you trust*.  
- **Speed**: Built for Solana’s high-speed blockchain.  
- **Zero Effort**: Fully automated—no manual monitoring.

- ## 🔧 **Technical Setup (For Developers)**  
- The bot uses Twitter/X API v2 to monitor specified accounts (requires API keys).  
- Solana transactions are executed via `@solana/web3.js` (configure RPC endpoint in `config.json`).  
- DeepSeek-R1 validation runs via [API/offline model].  

## ⚠️ **Disclaimer**  
- This tool may violate Twitter/X automation policies. Use at your own risk.  
- Cryptocurrency investments are volatile; we are not liable for losses.

- GitHub repo contains backend automation logic, while the UI is hosted privately on our website

For support, contact us via twitter or email support@trymakoto.com  

**[Explore GitHub Repository](https://github.com/goddev420/Makoto-r1-final-dsr1/tree/main)**  
*Designed for simplicity*
