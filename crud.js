const boutton_enregistrer = document.querySelector(".button");
boutton_enregistrer.addEventListener("click", () => {
    alert("Enregistrement reussie");
    const nom = document.querySelector("#nom");
    const prenom = document.querySelector("#prenom");
    const email = document.querySelector("#email");
    const age = document.querySelector("#age");
    const poste = document.querySelector("#poste");
    const telephone = document.querySelector("#telephone");
    const statut = document.querySelector("#statut");
    const pays = document.querySelector("#pays");
    const id = Math.floor(Math.random() * Math.floor(1000))
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
})

function vider_formulaire() {
    const tout_inputs = document.querySelectorAll(`input`);
    for (let vider of tout_inputs) {
        vider.value = "";
    }
}