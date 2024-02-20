const url="data/members.json"; //define the source of information
const cards = document.querySelector("#member")
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const items = document.querySelector("card")


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
//getting the gold and silver members a special part on main page for their adverts. 
    const displayhighlights = (members) => {
        members.forEach((member)=> {  
                                                              //continue to work on this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! if / then statement for gold and silver also need random for display
            let card= document.createElement("section");
            let fullName = document.createElement("h2");
            let link =document.createElement("a");
            let portrait = document.createElement("img");

        })
    }
//add button that changes a class in an element when clicked
    gridbutton.addEventListener("click", () => {
        gridbutton.classList.toggle('active')
        listbutton.classList.toggle('active')
    });
    listbutton.addEventListener("click", () => {
        listbutton.classList.toggle('active')
        gridbutton.classList.toggle('active')
    });

//extra work trying to make the join us page functional
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);
        
        const formJSON = Object.fromEntries(data.entries());
      
        // for multi-selects, we need special handling
        formJSON.members = data.get('level');
        
        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON, null, 2);
      }
      
      const form = document.querySelector('.contact-form');
      form.addEventListener('submit', handleFormSubmit);
      