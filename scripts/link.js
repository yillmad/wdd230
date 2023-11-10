const baseURL = "https://yillmad.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;
const ActivitiesElement = document.querySelector("#activities");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    keys= Object.keys(data);
    displayLinks(data,keys);
}

function displayLinks(data,keys) {
    keys.forEach(key => {
        const li = document.createElement("li");
        li.textContent = key + ": ";
        data[key].forEach(link => {
            const a = document.createElement("a");
            a.setAttribute("href", link.link);
            a.setAttribute("target", "_blank");
            a.textContent = link.name + " | ";
            li.appendChild(a);
        });
        ActivitiesElement.appendChild(li);
    });
}

getLinks();