function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = "Current time: " + now.toLocaleTimeString();
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  