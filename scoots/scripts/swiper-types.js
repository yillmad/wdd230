const baseURL = "https://yillmad.github.io/wdd230/";
const rentalTypesURL = "https://yillmad.github.io/wdd230/data/links.json"; // Replace with your rental types JSON URL

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

  // Initialize your Swiper here (assuming you have the necessary swiper initialization code)
}

getRentalTypes();
