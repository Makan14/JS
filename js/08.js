/**
 * Les boucles
 */

//la boucle FOR
/**
 * for(3 arguments){
 * code
 * }
    1 initialise un compteur (i)
    2 condition à verifier (vrai)
    3 un "pas" d incrémentation -> combien j ajoute par tour (i++)

 */

for(var /*initialise*/i = 1;/**condition à verifier */ i<= 10;/**pas d incrémentation */ i+= 2){
    document.write("<p>instruction exécutée : " + i + " fois.</p>");
}
//la boucle WHILE (tant que)
var j = 1;
while(j <= 10){ 
    document.write("<p>instruction exécutée : " + j + " fois.</p>");
    j++;
}

//EXERCICE
//j'ai 1000e sur mn compte, chaque mois j'ajoute 50e, combien de temps me faut-il pr avoir 2000e sur mn compte.


//while
var monCompte = 1000;
var temps = 0;
while (monCompte < 2000) {
    monCompte += 50;
    temps++;
}
document.write("<p>son sur mon compte : " + monCompte + ".</p>");
document.write("<p>jusqu'a 2000e, il me faut : " + temps + " mois.</p>");
//document.write("<p>jusqu'a 2000e, il me faut : " + (temps/12) + " annee.</p>");

//for
var tps = 0;
for (let mesSous = 1000; mesSous < 2000; mesSous+= 50) {
    document.write("<p>Le mois suivant j ai : " + mesSous + "€.</p>");
    tps++;  
}
document.write("<p>il m aura fallu : " + tps + "mois.</p>");