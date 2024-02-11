const url="https://richardlyonheart.github.io/wdd230/chamber/data/members.json"; //define the source of information
const cards = document.querySelector("#members"); // where information to be displayed

async function getMembersData() {
    const response = await fetch(url); //fetch information
    const data = await response.json(); // store information
    // console.table(data.prophets); // check data response in console
    displayMembers(data.displayMembers);
}


const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let address = document.createElement("p");
        let membershipLevel = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = 'NAME: '`${info.name}`; //pulls from the source and compiles
        address.textContent = 'ADDRESS: '`${info.address}`;
        membershipLevel.textContent = 'MEMBERSHIP: '`${info.level}`;

        portrait.setAttribute('src', info.img);//pulls url from source
        portrait.setAttribute('alt', 'image of: ' `${member}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(membershipLevel);
        card.appendChild(portrait);

        member.appendChild(card);
        });
    }

    getMembersData(url);