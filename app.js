
//creare array 
const membri = [
    membro1 = membroSingolo
    (
        "Wayne Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
    membro2 = membroSingolo
    (
        "Wayne Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
    membro3 = membroSingolo
    (
        "Wayne Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
    membro4 = membroSingolo
    (
        "prova Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
    membro5 = membroSingolo
    (
        "Wayne Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
    membro6 = membroSingolo
    (
        "Wayne Barnett",
        "Founder & CEO", 
        "wayne-barnett-founder-ceo.jpg"
    ), 
]


//stampare sul dom come stringhe
const bodyEl = document.querySelector("body")

for(let i = 0; i < 6; i++) {

    const membroCorrente = membri[i]

    bodyEl.innerHTML = membroCorrente.membroSingolo
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

//devono avere nome ruolo e foto
