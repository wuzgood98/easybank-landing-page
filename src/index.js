const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const menuBtn = document.querySelector("#menu_button");
const body = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  const btn = e.currentTarget;
  nav.classList.toggle("opacity-0");
  nav.classList.toggle("opacity-100");
  nav.classList.toggle("-z-20");
  nav.classList.toggle("z-20");
  ul.classList.toggle("scale-90");
  ul.classList.toggle("scale-100");

  body.classList.toggle("overflow-hidden");

  btn.classList.toggle("active");
});

nav.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("nav"));
  if (e.target.classList.contains("nav")) {
    nav.classList.remove("opacity-100");
    nav.classList.add("opacity-0");
    nav.classList.remove("z-20");
    nav.classList.add("-z-20");
    ul.classList.remove("scale-100");
    ul.classList.add("scale-90");
    body.classList.remove("overflow-hidden");
    menuBtn.classList.remove("active");
  }
});
