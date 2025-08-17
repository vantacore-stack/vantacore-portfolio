async function connectWallet() {
  if (!window.ethereum) return alert("Install MetaMask dulu!");
  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("wallet").textContent = "Connected: " + accounts[0];
  } catch (err) {
    alert("User rejected connection");
  }
}

