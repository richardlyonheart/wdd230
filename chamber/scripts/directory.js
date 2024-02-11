const url="https://richardlyonheart.github.io/wdd230/chamber/data/members.json"; //define the source of information
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// Set the default view to grid
showGrid();

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

async function getProphetData() {
    const response = await fetch(url); //fetch information
    const data = await response.json(); // store information
    // console.table(data.prophets); // check data response in console
    displayProphets(data.prophets);
}



const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        fullName.textContent = `${member.name}`; //pulls from the source and compiles
        
        portrait.setAttribute('src', member.img);//pulls url from source
        portrait.setAttribute('alt', 'Image of '`${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
        });
    }

    getProphetData(url); //activate funtion

async function showGrid() {
  const members = await fetchMembersData();
  display.innerHTML = generateGridHTML(members);

  // Add 'active' class to the grid button and remove it from the list button
  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
}

async function showList() {
  const members = await fetchMembersData();
  display.innerHTML = generateListHTML(members);

  // Add 'active' class to the list button and remove it from the grid button
  listbutton.classList.add("active");
  gridbutton.classList.remove("active");
}