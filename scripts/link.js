const baseURL = "https://yillmad.github.io/wdd230/";
const linksURL = "https://yillmad.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  function displayLinks(lessons) {
    const linksList = document.getElementById("links");
  
    lessons.lessons.forEach(lesson => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        Lesson ${lesson.lesson}:
        ${lesson.links.map(link => `
          <a href="${link.url}" target="_blank">${link.title}</a>
        `).join(" | ")}
      `;
      linksList.appendChild(listItem);
    });
  }
  
  getLinks();
