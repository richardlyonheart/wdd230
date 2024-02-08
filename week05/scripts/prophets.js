const url="https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"; //define the source of information
const cards = document.querySelector("#cards"); // where information to be displayed

async function getProphetData() {
    const response = await fetch(url); //fetch information
    const data = response.json; // store information
    console.table(data.prophets); // check data response in console
    displayProphets(data.prophets);
}

function displayProphets(){
    const displayProphets() = (prophets) => {
       
        prophets.forEach((prophet) => {
            let card = document.createElement("section");
            let fullName = document.createElement("h2");
            let portrait = document.createElement("img");
            fullName.textContent = '${prophet.name} ${prophet.lastName}'; //pulls from the source and compiles
            portrait.setAttribute('src', prophet.imageurl);//pulls url from source
            portrait.setAttribute('alt', 'Potrait of ${prophet.name} ${prophet.lastname}');

            card.appendChild(fullName);
            card.appendChild(portrait);

            cards.appendChild(card);


        });
    }

}


getProphetData();//activate the function