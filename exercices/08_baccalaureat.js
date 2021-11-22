/*
var myn1 = 10;
var myn2 = 12;

var myn = parseInt(prompt("Indiquer la moyenne")) ;
if (myn < 10) {
    document.write("le candidat est recalé");
}else if (myn > 10) {
    document.write("le candidat est reçu");
}else if (myn > 12) {
    document.write("le candidat est reçu avc mention");
}
*/
//correction
var moyenne = parseFloat(prompt("quelle est la moyenne au bac ?"));//parsefloat prend en compte ds nombre qui ont une virgule après

if (moyenne < 10) {
    document.write("Tu est recalé !");
}else if ((moyenne >= 10) && (moyenne < 12)){
    document.write("Tu passes");
}else if ((moyenne >= 12) && (moyenne <= 20)){
    document.write("Bravo pr la mention !");
}else{
    document.write("Et de 0 à 20 ça donne ?");
}

