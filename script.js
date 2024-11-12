let rotationX = 0;
let rotationY = 0;
let isDragging = false;
let previousX = 0;
let previousY = 0;

const cube = document.getElementById("cube");
const body = document.body;

function setBackground(color) {
  body.style.backgroundColor = color;
}

function rotateCube(direction) {
  switch (direction) {
    case "up":
      rotationY = 0;
      rotationX = -90;
      setBackground("rgba(255, 152, 0, 0.3)");
      break;
    case "down":
      rotationY = 0;
      rotationX = 90;
      setBackground("rgba(100, 100, 100, 0.3)");
      break;
    case "left":
      rotationY = 90;
      rotationX = 0;
      setBackground("rgba(255, 235, 59, 0.3)");
      break;
    case "right":
      rotationY = -90;
      rotationX = 0;
      setBackground("rgba(0, 230, 118, 0.3)");
      break;
    case "front":
      rotationY = 0;
      rotationX = 0;
      setBackground("rgba(255, 26, 26, 0.3)");
      break;
    case "back":
      rotationY = 180;
      rotationX = 0;
      setBackground("rgba(26, 26, 255, 0.3)");
      break;
  }
  updateCubeRotation();
}

cube.addEventListener("mousedown", (event) => {
  isDragging = true;
  previousX = event.clientX;
  previousY = event.clientY;
  cube.style.cursor = "grabbing";
  cube.style.transition = "none";
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  const deltaX = event.clientX - previousX;
  const deltaY = event.clientY - previousY;
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;

  updateCubeRotation();
  previousX = event.clientX;
  previousY = event.clientY;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  cube.style.cursor = "grab";
  cube.style.transition = "transform 0.5s ease";
});

function updateCubeRotation() {
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

// Touchscreen-Steuerung
cube.addEventListener(
  "touchstart",
  (event) => {
    isDragging = true;
    previousX = event.touches[0].clientX;
    previousY = event.touches[0].clientY;
    cube.style.transition = "none";
  },
  { passive: true }
);

document.addEventListener(
  "touchmove",
  (event) => {
    if (!isDragging) return;

    const deltaX = event.touches[0].clientX - previousX;
    const deltaY = event.touches[0].clientY - previousY;
    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;

    updateCubeRotation();
    previousX = event.touches[0].clientX;
    previousY = event.touches[0].clientY;
  },
  { passive: true }
);

document.addEventListener("touchend", () => {
  isDragging = false;
  cube.style.transition = "transform 0.5s ease";
});

function updateCubeRotation() {
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}
