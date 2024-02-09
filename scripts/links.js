const baseURL = "https://richardlyonheart.github.io/wdd230/"
const linksURL = "https://richardlyonheart.github.io/wdd230/data/links.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const cardsSection = document.querySelector('#learning');
  
    
    const weeks = Array.isArray(data) ? data : (data.weeks || []);
  
    weeks.forEach(week => {
      const listItem = document.createElement('li');
      const linksArray = week.links.map(link => `[<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>]`);
  
      listItem.innerHTML = `${week.week}: ${linksArray.join(' - ')}`;
  
      cardsSection.appendChild(listItem);
    });
  }
getLinks();