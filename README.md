# 🚀 VantaCore.ID – Web3 Portfolio  
A single-file, ultra-smooth portfolio built with **HTML + CSS + JavaScript** and deployed via **GitHub Pages**.

---

## 📊 Stats
![GitHub code size](https://img.shields.io/github/languages/code-size/vantacore-stack/vantacore-portfolio?style=flat-square&color=00ffe7)  
![GitHub last commit](https://img.shields.io/github/last-commit/vantacore-stack/vantacore-portfolio?style=flat-square&color=00ffe7)

---

## 📱 Sosial
<a href="https://www.instagram.com/ventacore.ld" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" alt="Instagram" width="28" height="28">
</a>
<a href="https://x.com/vantacore_" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="X" width="28" height="28">
</a>

---

## 🛠️ Teknologi
- **HTML5**  – struktur & semantik  
- **CSS3**   – neon glow, smooth-scroll, @keyframes  
- **Vanilla JS** – MetaMask connect & scroll-reveal observer  
- **GitHub Pages** – hosting statis otomatis

---

## ⚡ Cara Menggunakan (3 langkah)
1. **Clone**  
   ```bash
   git clone https://github.com/vantacore-stack/vantacore-portfolio.git
   cd vantacore-portfolio
    .fade{opacity:0;transform:translateY(30px);transition:1s}
    .fade.show{opacity:1;transform:translateY(0)}
    /* SKILLS */
    .skills{
      display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem
    }
    .skill{
      background:var(--card);border-left:4px solid var(--accent);padding:1rem;border-radius:6px;font-weight:500;transition:.3s
    }
    .skill:hover{transform:translateY(-5px)}
    /* PROJECTS */
    .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
    .card{
      background:var(--card);border:1px solid #222;border-radius:12px;padding:2rem;transition:.3s
    }
    .card:hover{transform:translateY(-8px);box-shadow:0 0 25px var(--accent)}
    /* SOCIAL */
    .social{
      display:flex;gap:1.5rem;justify-content:center;margin-top:3rem
    }
    .social a svg{
      width:36px;height:36px;fill:var(--accent);transition:.3s
    }
    .social a:hover svg{transform:scale(1.2)}
    /* ANIMATIONS */
    @keyframes slideDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes glow{from{text-shadow:0 0 5px var(--accent),0 0 10px var(--accent)}to{text-shadow:0 0 10px var(--accent),0 0 20px var(--accent)}}
    /* RESPONSIVE */
    @media(max-width:600px){
      nav{flex-direction:column}
      header h1{font-size:2.5rem}
    }
  </style>
</head>
<body>

<nav>
  <span class="logo">VantaCore.ID</span>
  <div>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<header>
  <h1>VantaCore.ID</h1>
  <p>Web3 Developer & Blockchain Craftsman</p>
  <button class="btn" onclick="connectWallet()">Connect MetaMask</button>
  <p id="wallet"></p>
</header>

<section id="about" class="fade">
  <h2>About Me</h2>
  <p>Self-taught builder focused on DeFi, NFTs & smart-contract security. Solidity, Next.js, IPFS — all in.</p>
</section>

<section id="skills" class="fade">
  <h2>Skills</h2>
  <div class="skills">
    <div class="skill">JavaScript</div>
    <div class="skill">TypeScript</div>
    <div class="skill">React / Next.js</div>
    <div class="skill">Solidity</div>
    <div class="skill">Hardhat</div>
    <div class="skill">Ethers.js</div>
    <div class="skill">IPFS / Pinata</div>
  </div>
</section>

<section id="projects" class="fade">
  <h2>Projects</h2>
  <div class="cards">
    <div class="card"><h3>DeFi Dashboard</h3><p>Real-time portfolio analytics on Ethereum.</p></div>
    <div class="card"><h3>NFT Minter</h3><p>Gas-optimized ERC-721 minting dApp.</p></div>
    <div class="card"><h3>Token Swap UI</h3><p>Powered by Uniswap SDK & flash-loans.</p></div>
  </div>
</section>

<section id="contact" class="fade">
  <h2>Contact</h2>
  <p>Email: hello@vantacore.id</p>
</section>

<div class="social">
  <!-- Instagram SVG -->
  <a href="https://www.instagram.com/ventacore.ld" target="_blank">
    <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75 1.25 1.25 0 0 1 14.75 8 1.25 1.25 0 0 1 16 9.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
  </a>
  <!-- X / Twitter SVG -->
  <a href="https://x.com/vantacore_" target="_blank">
    <svg viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.54-2.11-9.91-5.01-.41.71-.65 1.54-.65 2.42 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.61-.03-.91-.08.61 1.9 2.38 3.28 4.48 3.32-1.64 1.29-3.71 2.06-5.96 2.06-.39 0-.77-.02-1.15-.07 2.13 1.37 4.66 2.17 7.38 2.17 8.85 0 13.7-7.33 13.7-13.7 0-.21 0-.42-.01-.63.94-.68 1.75-1.53 2.4-2.5z"/></svg>
  </a>
</div>

<script>
  // MetaMask connect
  async function connectWallet() {
    if (!window.ethereum) return alert("Install MetaMask!");
    const acc = await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById('wallet').textContent = 'Connected: ' + acc[0];
  }

  // scroll reveal
  const faders = document.querySelectorAll('.fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('show', entry.isIntersecting));
  }, { threshold: 0.2 });
  faders.forEach(el => observer.observe(el));
</script>
</body>
</html>
