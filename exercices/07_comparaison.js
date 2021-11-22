
/*
var nb1 = parseInt(prompt("Indiquer le 1er nombre"));
var nb2 = parseInt(prompt("Indiquer le second nombre"));
if (nb1 < nb2) {
    document.write(nb1 + " est moins grand que " + nb2);   
}else if (nb1 > nb2) {
    document.write(nb1 + " est pls grand que " + nb2);
}else if (nb1 == nb2) {
    document.write(nb1 + " est égaux à " + nb2);
}else{
    alert("veuillez indiquer uniquement des chiffres");
}
*/
//correction

var nb1 = parseInt(prompt("Indiquer le 1er nombre"));
var nb2 = parseInt(prompt("Indiquer le second nombre"));

if((!isNaN(nb1)) && (!isNaN(nb2)) ){ //isNaN = Is Not a Number(est pas un nombre)
    if (nb1<nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus petit que votre 2nb : " + nb2);
    }else if (nb1>nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus grand que votre 2nb : " + nb2);
    }else{
        document.write("Votre 1er nombre : " + nb1 + " est égal à votre 2nb : " + nb2);
    }
}else{
    alert("Vs n'avez pas saisie de chiffres");
}
