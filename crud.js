const boutton_enregistrer = document.querySelector(".button");
boutton_enregistrer.addEventListener("click", () => {
    const nom = document.querySelector("#nom");
    const prenom = document.querySelector("#prenom");
    const email = document.querySelector("#email");
    const age = document.querySelector("#age");
    const poste = document.querySelector("#poste");
    const telephone = document.querySelector("#telephone");
    const statut = document.querySelector("#statut");
    const pays = document.querySelector("#pays");
    const id = Math.floor(Math.random() * Math.floor(1000))
    effacer_message();
    if (!nom.value) {
        const nom_vide = document.querySelector(`.nom_vide`);
        nom_vide.innerHTML = "Veuillez remplir votre nom";
    } else if (!prenom.value) {
        const prenom_vide = document.querySelector(`.prenom_vide`);
        prenom_vide.innerHTML = "Veuillez remplir votre prénom";
    } else if (!email.value) {
        const email_vide = document.querySelector(`.email_vide`);
        email_vide.innerHTML = "Veuillez remplir votre Email";
    } else if (!poste.value) {
        const poste_vide = document.querySelector(`.poste_vide`);
        poste_vide.innerHTML = "Veuillez remplir votre poste";
    } else if (!telephone.value) {
        const telephone_vide = document.querySelector(`.telephone_vide`);
        telephone_vide.innerHTML = "Veuillez remplir votre telephone";
    } else if (statut.value == "Statut marital") {
        const statut_vide = document.querySelector(`.statut_vide`);
        statut_vide.innerHTML = "Veuillez selectionner votre statut";
    } else if (pays.value == "Sélectionner le pays dans lequel vous vous situez") {
        const pays_vide = document.querySelector(`.pays_vide`);
        pays_vide.innerHTML = "Veuillez selectionner votre pays";
    } else {
        const object = {
            id: id,
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            age: age.value,
            poste: poste.value,
            telephone: telephone.value,
            statut: statut.value,
            pays: pays.value
        }


        const tableau = [];
        tableau.push(object);
        const tbody = document.querySelector(`tbody`)
        for (let user of tableau) {
            const tr = `<td> ${user.id} </td>
                        <td> ${user.nom} </td>  
                        <td> ${user.prenom} </td>
                        <td> ${user.email} </td>
                        <td> ${user.age} </td>
                        <td> ${user.poste} </td>
                        <td> ${user.telephone} </td>
                        <td> ${user.statut} </td>
                        <td> ${user.pays} </td>`;
            tbody.insertAdjacentHTML("beforeend", tr);

        }
        vider_formulaire();
    }

})

function vider_formulaire() {
    const tout_inputs = document.querySelectorAll(`input`);
    for (let vider of tout_inputs) {
        vider.value = "";
    }
}

function effacer_message() {
    const effacer_inner = document.querySelectorAll(`span`);
    for (let initialiser_span of effacer_inner) {
        initialiser_span.innerHTML = "";
    }
}