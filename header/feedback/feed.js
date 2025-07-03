const slider = document.getElementById("slider");
const boxWidth = 320; // width + margin
let currentIndex = 0;

function slide(direction) {
  const maxIndex = Math.floor(slider.children.length / 3) - 1;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const distance = currentIndex * boxWidth * 3;
  slider.style.transform = `translateX(-${distance}px)`;
}
