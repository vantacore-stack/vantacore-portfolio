git add README.md
git commit -m "docs: README keren & rapi"
git push origin main
<!-- VantaCore.ID – README.md -->
<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=3000&color=00F5FF&center=true&lines=VantaCore.ID" alt="VantaCore.ID">
</h1>

<p align="center">
  <strong>Smart-Contract Playground • Built 100 % on Android via Termux</strong><br>
  <a href="https://vantacore-stack.github.io/vantacore-portfolio" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-00F5FF?style=flat-square&logo=firefox&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/vantacore-stack/vantacore-portfolio/actions" target="_blank">
    <img src="https://github.com/vantacore-stack/vantacore-portfolio/workflows/Foundry/badge.svg?style=flat-square" alt="Foundry CI">
  </a>
  <a href="https://github.com/vantacore-stack/vantacore-portfolio/actions" target="_blank">
    <img src="https://github.com/vantacore-stack/vantacore-portfolio/workflows/Hardhat/badge.svg?style=flat-square" alt="Hardhat CI">
  </a>
</p>

---

## 🧩 Projects

| Folder | Tech Stack | What it does | Try it |
|--------|------------|--------------|--------|
| **hello-token** | Solidity + Foundry | ERC-20 greeting token | `cd hello-token && forge test` |
| **counter** | Solidity + Hardhat | Simple counter contract | `cd counter && npx hardhat test` |
| **defi-dashboard** | Next.js + Wagmi | Real-time portfolio | [Live](https://vantacore-stack.github.io/vantacore-portfolio) |
| **nft-minter** | Next.js + Ethers.js | 1-click NFT mint | [Live](https://vantacore-stack.github.io/vantacore-portfolio) |
| **swap-ui** | React + Uniswap SDK | Token swap interface | [Live](https://vantacore-stack.github.io/vantacore-portfolio) |

---

## 🚀 Quick-Start (Termux)

```bash
# Install & clone
pkg install -y nodejs-lts git
git clone git@github.com:vantacore-stack/vantacore-portfolio.git
cd vantacore-portfolio

# Run tests
cd hello-token && forge test
cd ../counter && npx hardhat test

