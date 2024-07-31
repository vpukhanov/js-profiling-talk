const chart = document.getElementById("chart");
const toggleBtn = document.getElementById("toggle-btn");
let isUpdating = false;
let updateInterval;

function createBars() {
  for (let i = 0; i < 500; i++) {
    const bar = document.createElement("div");
    bar.className = "w-8 bg-blue-500 rounded-t";
    chart.appendChild(bar);
  }
}

function updateBars() {
  const bars = chart.children;

  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];
    const height = bar.offsetHeight * 0.0001 + Math.random() * 100;
    bar.style.height = `${height}%`;
  }
}

function startUpdates() {
  isUpdating = true;
  updateInterval = setInterval(updateBars, 50);
}

function stopUpdates() {
  isUpdating = false;
  clearInterval(updateInterval);
}

toggleBtn.addEventListener("click", () => {
  if (isUpdating) {
    stopUpdates();
    toggleBtn.textContent = "Start Updates";
  } else {
    startUpdates();
    toggleBtn.textContent = "Stop Updates";
  }
});

createBars();
