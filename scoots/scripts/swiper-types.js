document.addEventListener('DOMContentLoaded', function () {
    // Sample rentalTypes data (replace this with your actual JSON data)
    const rentalTypesData = [
        {
            "type": "Honda Metropolitan",
            "maxPersons": 1
        },
        // Add other rental types here...
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Loop through the rentalTypesData and create slides dynamically
    rentalTypesData.forEach(rental => {
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
});
