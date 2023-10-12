const fixHeightOfHero = () => {
  const bottomOfHero = document
    .getElementById("hero")
    .getBoundingClientRect().bottom;
  document.getElementById("hero-bg").style.height = `${
    bottomOfHero > 42 * 16 ? bottomOfHero : 42 * 16
  }px`;
};
const navToggler = document.getElementById("navbar-toggler-btn");
navToggler.addEventListener("click", () => {
  setTimeout(() => {
    fixHeightOfHero();
  }, 450);
});
fixHeightOfHero();

// Get Current Year at footer when document body loads
function getCurrentYear() {
  document.querySelectorAll(".current-year").forEach((element) => {
    element.innerHTML = new Date().getFullYear();
  });
}
