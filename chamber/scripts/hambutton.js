const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const mapContainer = document.querySelector('.map-container')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});