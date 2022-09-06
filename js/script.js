const team = [

    {
        nome: "Wayne Barnett",
        role: "Founder & CEO",
        profilepic: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        role: "Chief Editor",
        profilepic: "img/angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        role: "Office Manager",
        profilepic: "img/walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        role: "Social Media Manager",
        profilepic: "img/angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        role: "Developer",
        profilepic: "img/scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        role: "Graphic Designer",
        profilepic: "img/barbara-ramos-graphic-designer.jpg",
    },

];

console.log(team);

for (let i = 0; i < team.length; i++) {

    const teamMember = team[i];
    console.log(teamMember.nome);
    console.log(teamMember.role);
    console.log(teamMember.profilepic);

    const displayedMembers = document.createElement("div");
    const row = document.querySelector(".row").append(displayedMembers);

    displayedMembers.innerHTML += ` <img src="${teamMember.profilepic}" class="img-fluid pt-3"> `
    displayedMembers.innerHTML += ` <div> ${teamMember.nome} </div> `
    displayedMembers.innerHTML += ` <div> ${teamMember.role} </div> `
    displayedMembers.className = "col-4 mb-3";

}

