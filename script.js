const images = [
  "coffee shop1.jpeg",
  "coffee shop2.jpeg",
  "coffee shop3.jpeg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  current = (current + 1) % images.length;
  slide.src = images[current];
}, 3000);