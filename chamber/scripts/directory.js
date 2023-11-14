fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;

    const companiesDiv = document.getElementById('companies');

    companies.forEach(company => {
      const companyDiv = document.createElement('div');
      companyDiv.classList.add('company-item'); 

      companyDiv.innerHTML = `
        <h2>${company.name}</h2>
        <p>${company.address}</p>
        <p>${company.phoneNumbers}</p>
        <a href="${company.webURL}" target="_blank">${company.webURL}</a>
        <img src="images/${company.img}" alt="${company.name} Image">
        <!-- Add more elements to display other information -->
      `;

      companiesDiv.appendChild(companyDiv);
    });
  })
  .catch(error => console.log(error));
