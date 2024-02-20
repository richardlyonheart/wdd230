

const url="data/members.json"; //define the source of information
const cards = document.querySelector("#member")
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const items = document.querySelector("card")
const spotlight = document.querySelector("#spotlight")


//get data from json for program to read
async function getMemberData() {
    const response = await fetch(url); //fetch information
    const data = await response.json(); // store information
    // console.table(data.members); // check data response in console
    displayMembers(data.members);
}
//looks on json and pulls from data based on what we want displayed in a loop to go through all the members
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
        link.textContent = ('Website');

        card.setAttribute('class', "card")
        
        portrait.setAttribute('src', member.img);//pulls url from source
        portrait.setAttribute('alt', 'image of '+ `${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        link.setAttribute('href', `${member.link}`)


        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(membership);
        card.appendChild(link);
        card.appendChild(portrait);

        cards.appendChild(card);
        });
    }

    getMemberData(url); //activate funtion


    gridbutton.addEventListener("click", () => {//add button that changes a class in an element when clicked
        gridbutton.classList.toggle('active')
        listbutton.classList.toggle('active')
    });
    listbutton.addEventListener("click", () => {
        listbutton.classList.toggle('active')
        gridbutton.classList.toggle('active')
    });


     //need a hidden date marker for the join page that will record when form filled out but not show to the inputer