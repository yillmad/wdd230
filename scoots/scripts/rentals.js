// const baseURL = "https://yillmad.github.io/wdd230/";
// const rentalTypesURL = "https://yillmad.github.io/wdd230/scoots/data/rentals.json";

// // Function to create and populate the table
// async function createTableFromExternalData() {
//     try {
//         const response = await fetch(rentalTypesURL);
//         const rentalData = await response.json();

//         const table = document.createElement('table');
//         const headerRow = table.insertRow();
//         const headers = ['Image', 'Type', 'Max Persons', 'Reservation Half-Day Price', 'Reservation Full-Day Price', 'Walk-In Half-Day Price', 'Walk-In Full-Day Price'];

//         headers.forEach(headerText => {
//             const header = document.createElement('th');
//             const textNode = document.createTextNode(headerText);
//             header.appendChild(textNode);
//             headerRow.appendChild(header);
//         });

//         rentalData.rentalTypes.forEach(item => {
//             const row = table.insertRow();
//             const { image, type, maxPersons, Prices } = item;
//             const { Reservation, WalkIn } = Prices[0];

//             const rowData = [image, type, maxPersons];
//             Reservation.forEach(reserve => {
//                 rowData.push(reserve.halfDayPrice, reserve.fullDayPrice);
//             });
//             WalkIn.forEach(walk => {
//                 rowData.push(walk.halfDayPrice, walk.fullDayPrice);
//             });

//             rowData.forEach(cellData => {
//                 const cell = document.createElement('td');
//                 const cellText = document.createTextNode(cellData);
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//             });
//         });

//         const main = document.querySelector('.home-main');
//         main.appendChild(table);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the function to create the table from the external JSON data
// createTableFromExternalData();

const baseURL = "https://yillmad.github.io/wdd230/";
const rentalTypesURL = "https://yillmad.github.io/wdd230/scoots/data/rentals.json";

// Function to create the table
function createRentalTable(data) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  
  // Create table headers
  for (const key of ['Images', 'Type', 'Max Persons', 'Reservation Half Day Price', 'Reservation Full Day Price', 'Walk-In Half Day Price', 'Walk-In Full Day Price']) {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }

  // Populate table with rental data
  data.rentalTypes.forEach(rental => {
    const row = table.insertRow();
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = `images/rental-types/${rental.image}`;
    image.alt = 'scooter image';
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    const typeCell = row.insertCell();
    typeCell.textContent = rental.type;

    const maxPersonsCell = row.insertCell();
    maxPersonsCell.textContent = rental.maxPersons;

    const reshalfDayPriceCell = row.insertCell();
    reshalfDayPriceCell.textContent = `$ ${rental.Prices[0].Reservation[0].halfDayPrice}.00`;

    const resfullDayPriceCell = row.insertCell();
    resfullDayPriceCell.textContent = `$ ${rental.Prices[0].Reservation[0].fullDayPrice}.00`;

    const walkhalfDayPriceCell = row.insertCell();
    walkhalfDayPriceCell.textContent = `$ ${rental.Prices[0].WalkIn[0].halfDayPrice}.00`;

    const walkfullDayPriceCell = row.insertCell();
    walkfullDayPriceCell.textContent = `$ ${rental.Prices[0].WalkIn[0].fullDayPrice}.00`;

    
  });

  return table;
}

// Get the container where you want to append the table
const container = document.querySelector('.home-main'); // Change this selector to match your HTML structure

// Fetch the rental types data and create the table
fetch(rentalTypesURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(data => {
    const rentalTable = createRentalTable(data);
    container.appendChild(rentalTable);
  })
  .catch(error => {
    console.error('There was a problem fetching the rental types:', error.message);
  });

