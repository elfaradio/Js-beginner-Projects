const body = document.getElementsByTagName("body")[0];

document.querySelector(".bg").addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

document.querySelector(".br").addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

document.querySelector(".by").addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

document.querySelector(".bl").addEventListener("click", () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const cl = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = cl;
});
