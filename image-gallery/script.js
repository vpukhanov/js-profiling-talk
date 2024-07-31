const gallery = document.getElementById("gallery");
const sortBtn = document.getElementById("sort-btn");
const randomizeBtn = document.getElementById("random-btn");
const images = [];

for (let i = 0; i < 10000; i++) {
  images.push({
    src: `https://cataas.com/cat?width=200&height=200&random=${i}`,
    title: `Image ${i}`,
    rating: Math.floor(Math.random() * 5) + 1,
  });
}

function rerender() {
  gallery.innerHTML = "";
  renderImages();
}

function renderImages(start = 0, count = 500) {
  let current = start;
  const end = Math.min(start + count, images.length);
  const fragment = document.createDocumentFragment();

  function renderChunk(deadline) {
    for (; current < end; current++) {
      if (deadline.timeRemaining() <= 0) {
        requestIdleCallback(renderChunk);
        return;
      }

      const img = images[current];
      const imgEl = document.createElement("div");
      imgEl.className = "bg-white p-4 rounded shadow";
      imgEl.innerHTML = `
                <img src="${img.src}" alt="${img.title}" class="w-full h-40 object-cover mb-2" loading="lazy">
                <p class="font-bold">${img.title}</p>
                <p>Rating: ${"⭐".repeat(img.rating)}</p>
            `;
      fragment.appendChild(imgEl);
    }
    gallery.appendChild(fragment);
    if (end < images.length) {
      requestIdleCallback(() => renderImages(end));
    }
  }

  requestIdleCallback(renderChunk);
}

function orderByRating() {
  images.sort((a, b) => a.rating - b.rating);
}

function randomizeOrder() {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }
}

sortBtn.addEventListener("click", () => {
  orderByRating();
  rerender();
});

randomizeBtn.addEventListener("click", () => {
  randomizeOrder();
  rerender();
});

renderImages();
