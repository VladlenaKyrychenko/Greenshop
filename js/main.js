window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  // Hide after 2 seconds
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1000);
});

// show spinner again briefly on Login click
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login");
  const preloader = document.getElementById("preloader");
  if (!loginBtn || !preloader) return;

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    preloader.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = loginBtn.getAttribute("href");
    }, 1000);
  });
});

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");
const filterButton = document.getElementById("filterButton");

const minGap = 50;
const sliderTrackColor = "#bfd8bfff";
const fillColor = "#46A358";

function updateSliderTrack() {
  const min = parseInt(minPrice.value);
  const max = parseInt(maxPrice.value);
  const percent1 = (min / parseInt(minPrice.max)) * 100;
  const percent2 = (max / parseInt(maxPrice.max)) * 100;

  minPrice.style.background = `linear-gradient(to right,
    ${sliderTrackColor} ${percent1}%,
    ${fillColor} ${percent1}%,
    ${fillColor} ${percent2}%,
    ${sliderTrackColor} ${percent2}%)`;
  maxPrice.style.background = minPrice.style.background;
}

function updateValues(event) {
  let min = parseInt(minPrice.value);
  let max = parseInt(maxPrice.value);

  if (max - min <= minGap) {
    if (event.target.id === "minPrice") {
      minPrice.value = max - minGap;
    } else {
      maxPrice.value = min + minGap;
    }
  }

  minValue.textContent = minPrice.value;
  maxValue.textContent = maxPrice.value;
  updateSliderTrack();
}

minPrice.addEventListener("input", updateValues);
maxPrice.addEventListener("input", updateValues);

updateSliderTrack();

filterButton.addEventListener("click", () => {
  const min = parseInt(minPrice.value);
  const max = parseInt(maxPrice.value);
  // 👇 Do whatever you want with these values
  console.log(`Selected range: $${min} - $${max}`);

  // Example: send to API
  // fetch(`/api/products?min=${min}&max=${max}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
});