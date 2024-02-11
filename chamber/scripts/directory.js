const url="https://richardlyonheart.github.io/wdd230/chamber/data/members.json"; //define the source of information
const cards = document.querySelector("#member")
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// Set the default view to grid
showGrid();

//gridbutton.addEventListener("click", showGrid);
//listbutton.addEventListener("click", showList);

async function getMemberData() {
    const response = await fetch(url); //fetch information
    const data = await response.json(); // store information
    // console.table(data.members); // check data response in console
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let address = document.createElement("p");
        let membership = document.createElement("p");
        let link = document.createElement("a")
        let portrait = document.createElement("img");

        fullName.textContent = `${member.name}`; //pulls from the source and compiles
        address.textContent = `${member.address}`;
        membership.textContent = `${member.level}`;
        link.textContent = ('website');
        
        portrait.setAttribute('src', member.img);//pulls url from source
        portrait.setAttribute('alt', 'image of '+ `${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        link.setAttribute('href', `${link}`)


        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(membership);
        card.appendChild(link);
        card.appendChild(portrait);

        cards.appendChild(card);
        });
    }

    getMemberData(url); //activate funtion

async function showGrid() {
  const members = await getMemberData();
  display.innerHTML = generateGridHTML(members);

  // Add 'active' class to the grid button and remove it from the list button
  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
}

async function showList() {
  const members = await getMemberData();
  display.innerHTML = generateListHTML(members);

  // Add 'active' class to the list button and remove it from the grid button
  listbutton.classList.add("active");
  gridbutton.classList.remove("active");
}