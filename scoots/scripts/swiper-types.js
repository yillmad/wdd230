const baseURL = "https://yillmad.github.io/wdd230/";
const rentalTypesURL = "https://yillmad.github.io/wdd230/scoots/data/rentals.json";

async function getRentalTypes() {
  try {
    const response = await fetch(rentalTypesURL);
    const data = await response.json();
    displayRentalTypes(data.rentalTypes);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

function displayRentalTypes(rentalTypes) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  rentalTypes.forEach(rental => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const content = `
      <div class="scooter-img">
        <img src="images/rental-types/${rental.image}" alt="scooter image">
      </div>
      <div>
        <p>${rental.type}</p>
      </div>
      <div>
        <p>Max Persons: ${rental.maxPersons}</p>
      </div>
    `;

    slide.innerHTML = content;
    swiperWrapper.appendChild(slide);
  });
}

getRentalTypes();
