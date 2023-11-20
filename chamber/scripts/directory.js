const companiesDiv = document.querySelector('#companies');
const gridbutton = document.querySelector('#gridBtn');
const listbutton = document.querySelector('#listBtn');
const display = document.querySelector('#companies');

fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;

    companies.forEach(company => {
      const companyDiv = document.createElement('div');
      companyDiv.classList.add('company-card'); 

      companyDiv.innerHTML = `
        <div class="company-logo">
            <img src="images/${company.img}" alt="${company.name} Image">
        </div>
        <div class="company-info">
            <h2>${company.name}</h2>
            <p>${company.address}</p>
            <p>${company.phoneNumbers}</p>
            <a href="${company.webURL}" target="_blank">${company.webURL}</a>
            <p class="other">${company.other}</p>
        </div>
      `;

      companiesDiv.appendChild(companyDiv);
    });
  })
  .catch(error => console.log(error));


  gridbutton.addEventListener("click",() => {
    display.classList.add("directory-grid");
    display.classList.remove("directory-list");
    gridbutton.classList.add("active");
  listbutton.classList.remove("active"); 
  });

  listbutton.addEventListener("click",() => {
    display.classList.add("directory-list");
    display.classList.remove("directory-grid");
    listbutton.classList.add("active");
  gridbutton.classList.remove("active");
  });