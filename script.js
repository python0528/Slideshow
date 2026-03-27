const images = [
  "喫茶店1.jpeg",
  "喫茶店2.jpeg",
  "喫茶店3.jpeg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  current = (current + 1) % images.length;
  slide.src = images[current];
}, 3000);