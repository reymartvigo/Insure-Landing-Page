let nav = document.getElementById("mobile");
let open = document.getElementById("open-nav");
let close = document.getElementById("close-nav");

open.addEventListener("click", (e) => {
  e.preventDefault();

  close.style.display = "flex";
  open.style.display = "none";
  nav.style.display = "flex";
});

close.addEventListener("click", (e) => {
  e.preventDefault();

  close.style.display = "none";
  open.style.display = "flex";
  nav.style.display = "none";
});
