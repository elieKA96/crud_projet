const form = document.querySelector("#form");
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const sexe = document.forms["form"]["sexe"];
const dateDeNaissance = document.querySelector("#dateNaissance");
const paysOrigine = document.querySelector("#pays");
const hobbies = document.querySelectorAll("[type = 'checkbox']");
//const hobby = document.querySelector("#hobby")
const tbody = document.querySelector("tbody");

const utilisateur = [];
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomValue = nom.value;
    const prenomValue = prenom.value;
    const emailValue = email.value;
    const sexeValue = sexe.value;
    const dateDeNaissanceValue = dateDeNaissance.value;
    const paysOrigineValue = paysOrigine.value;
    var hobbiesValue = hobbiesSelection();
    console.log(hobbiesValue);
    validation();
    ajoutUtilisateur(nomValue, prenomValue, emailValue, sexeValue, dateDeNaissanceValue, paysOrigineValue, hobbiesValue);
    afficherUtilisateur();
    ///hobbiesSelection()
    nom.value = "";
    prenom.value = "";
    email.value = "";
    dateDeNaissance.value = "";
    paysOrigine.validation = "";

})

function hobbiesSelection() {
    let hobby = " ";
    hobbies.forEach(item => {
        if (item.checked === true) {
            hobby += " " + item.value;
        }
    })
    return hobby;
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


function afficherUtilisateur() {
    const userNode = utilisateur.map((user, index) => {
        return creationUtilisateur(user, index);
    });

    tbody.innerHTML = " ";
    tbody.append(...userNode);
}

function creationUtilisateur(user, index) {
    const tr = document.createElement("tr");
    const case1 = document.createElement("td");
    case1.textContent = `${user.nom}`;
    const case2 = document.createElement("td");
    case2.textContent = `${user.prenom}`;
    const case3 = document.createElement("td");
    case3.textContent = `${user.email}`;
    const case4 = document.createElement("td");
    case4.textContent = `${user.sexe}`;
    const case5 = document.createElement("td");
    case5.textContent = `${user.dateDeNaissance}`;
    const case6 = document.createElement("td");
    case6.textContent = `${user.paysOrigine}`;
    const case7 = document.createElement("td");
    case7.textContent = hobbiesSelection();

    tr.append(case1, case2, case3, case4, case5, case6, case7);
    return tr;
}
function ajoutUtilisateur(nom, prenom, email, sexe, dateDeNaissance, paysOrigine, hobbies) {
    utilisateur.push({
        nom, prenom, email, sexe, dateDeNaissance, paysOrigine, hobbies
    })
}
function validation() {
    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim();
    const emailValue = email.value.trim();
    const dateDeNaissanceValue = dateDeNaissance.value.trim();
    const paysOrigineValue = paysOrigine.value.trim();
    const sexeValue = sexe.value;
    //const hobbiesValue = hobbies.value;

    if (nomValue === '') {
        setError(nom, 'Remplissez le champs nom');
    } else {
        setSuccess(nom);
    }

    if (prenomValue === '') {
        setError(prenom, 'Remplissez le champs prenom');
    } else {
        setSuccess(prenom);
    }

    if (emailValue === '') {
        setError(email, 'Remplissez le champs email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Entrez un email valide');
    }
    else {
        setSuccess(email);
    }
    if (sexeValue === '') {
        console.log("eeee");
    }
    if (dateDeNaissanceValue === '') {
        setError(dateDeNaissance, 'Remplissez le champs date de naissance');
    } else {
        setSuccess(dateDeNaissance);
    }

    if (paysOrigineValue === '') {
        setError(paysOrigine, "Remplissez le champs pays d'origine");
    } else {
        setSuccess(paysOrigine);
    }
}
afficherUtilisateur();


/*function displaySexe() {
for (let i = 0; i < sexe.length; i++) {
    if (sexe[i].checked) { return console.log(sexe[i].value) }
}
}*/