const baseURL = "https://yillmad.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.querySelector('#links');
  if (!linksContainer) return;

  weeks.forEach((week) => {
    const weekTitle = week.week;
    const weekLinks = week.links;

    const weekSection = document.createElement('section');
    weekSection.classList.add('week');

    const weekHeading = document.createElement('h2');
    weekHeading.textContent = weekTitle;
    weekSection.appendChild(weekHeading);

    const linksList = document.createElement('ul');
    linksList.classList.add('links-list');

    weekLinks.forEach((link) => {
      const listItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.href = `${baseURL}${link.url}`;
      linkElement.textContent = link.title;

      listItem.appendChild(linkElement);
      linksList.appendChild(listItem);
    });

    weekSection.appendChild(linksList);
    linksContainer.appendChild(weekSection);
  });
}

getLinks();
