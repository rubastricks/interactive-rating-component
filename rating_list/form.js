const main = document.querySelector(".main-container");
const back = document.querySelector(".back-container");
const form = document.querySelector(".main-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selection = "input[name=ratings]:checked";
  const checkedIn = document.querySelector(selection);
  if (checkedIn !== null) {
    const selectRating = document.querySelector(".selection");
    selectRating.textContent =
      "You selected " + checkedIn.getAttribute("value") + " out of 5";
    main.classList.add("hidden");
    back.classList.remove("hidden");
  }
});
