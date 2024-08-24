// stap-1
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("c-btn");

  btn.addEventListener("click", function () {
    const bgcolor = GenerrateRGBcolor();
    root.style.backgroundColor = bgcolor;
  });
}

// stap-3
function GenerrateRGBcolor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}
