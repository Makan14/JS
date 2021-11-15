//alert("c'est bon");  on a testé notre chemin avc 1 fonction alert()

/**--------------------
 * LA CONCATENATION
 --------------------*/

 var annee = 2017; //variable de type nombre
 var futur = 5;
 var calcul = annee + futur;
 console.log(calcul);
 document.write(calcul + "<br>"); //affiche le résultat sur le navigateur avec un br

var mois = "7" //variable de type string
var calcul2 = annee + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var debutPhrase = "Aujourd'hui ";
var nbStagiaire = 11;
var suitePhrase = " stagiaires";
var finPhrase = " sont présents.";
document.write(debutPhrase + nbStagiaire + suitePhrase + " " + finPhrase);
// Le " " est souvent utiliser lors de la récupération d edonnées saisie par l utilisateur