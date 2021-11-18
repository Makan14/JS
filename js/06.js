//ls comparaisons

var nb1 = 123;
var nb2 = "123"; //String(type) = chaine de caractère
console.log(nb1 == nb2);// true 
// == (compare ls valeurs)

console.log(nb1 === nb2)//false
// === (compare la valeur et le type)

console.log(nb1 != nb2)//false
// != (différent en valeur)

console.log(nb1 !== nb2)//true
//!== (différent en valeur et en type)

//--------------- Exercice--------------
var prenom, monAge, prenomLogin, ageLogin;
prenom = "Makan";
monAge = 999;

prenomLogin = prompt("Quel est votre prénom ?");
if (prenomLogin === prenom) {

    ageLogin = parseInt(prompt("Votre age ?"));
    if(ageLogin === monAge){
        alert("Bienvenu" + prenomLogin);
    }
    else{
        alert("Votre age n est pas celui stocké en base de données");
    }
    
}
else{
    alert("Attention, prénom non reconnu");
}

