

//-- structure de base IF

if(true){

}

var nb1 = 10;
if(nb1 < 50){
    console.log("nb1 est bien inférieur à 50");
}

if(true){
    //code si vrai
} else{
    //code sinon
}

nb1 = 60;
if(nb1 < 50){
    console.log("nb1 est bien inférieur à 50");
}else{
    console.log("nb1 est supérieur à 50");
}

//on utilise le IF pr verififer l age de l internaute, si il est majeur on lui souhaite la bienvenu sinon 1 je lui signale et 2 je le revoit vers un autre site.

var age = 18;
var maj = prompt("Veuillez entrer votre age");
if(age >= 18){
    console.log("Bienvenu sur notre site.");
}

else{
        console.log("Merci de vous redirigez vers ce site : ");
        window.location.href ="https://play.google.com/store?hl=fr&gl=US";

}


//correction

var MajoriteFr = 18;
var age = parseInt(prompt("Indiquer votre âge"));//prend le prompt pr recupérer ds nombre et en faire ds comparaisons

if(age >= MajoriteFr);{
    alert("Bienvenu, vs êtes majeur");
}

else{
    alert("Allez voir un autre super site");
    document.location.href ="https://www.darty.com/";
}



