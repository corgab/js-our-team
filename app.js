//creare array 
const membri = [
    membroSingolo
    (
        "Wayne Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
    membroSingolo
    (
        "Angela Caroll",
        "Chief Editor", 
        "angela-caroll-chief-editor.jpg"
    ), 
    membroSingolo
    (
        "Walter Gordon",
        "Office Manager	", 
        "walter-gordon-office-manager.jpg"
    ), 
    membroSingolo
    (
        "Angela Lopez",
        "Social Media Manager", 
        "angela-lopez-social-media-manager.jpg"
    ), 
    membroSingolo
    (
        "Scott Estrada",
        "Developer", 
        "scott-estrada-developer.jpg"
    ), 
    membroSingolo
    (
        "Barbara Ramos",
        "Graphic Designer", 
        "barbara-ramos-graphic-designer.jpg"
    ), 
]


//stampare sul dom come stringhe
const bodyEl = document.querySelector(".card-members")

for(let i = 0; i < membri.length; i++) {

    const membroCorrente = membri[i];
    bodyEl.innerHTML += `
    <div class="col-4">
        <div class="card-member">
            <img src="./img/${membroCorrente.foto}" alt="">
            <div class="intest">
                ${membroCorrente.nome} - ${membroCorrente.ruolo}
            </div>
        </div>
    </div>`
}



//creare oggetti membri team
function membroSingolo(newname, newrole, newfoto) {
    const membro = {} 
    membro.nome = newname
    membro.ruolo = newrole
    membro.foto = newfoto

    //stampare console ogni informazione
    console.log(membro.nome, membro.ruolo, membro.foto)
    
    return membro
}

