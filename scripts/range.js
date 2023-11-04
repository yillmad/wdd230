const pageRating = document.querySelector("#rate-output");
const range = document.querySelector("#page-rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    pageRating.innerHTML = range.value
}