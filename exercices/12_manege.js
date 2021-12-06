var monTour = 1;
var tour = 0;
while (monTour <= 10) {
    monTour += 1;
    tour++;
    document.write("il a fait " + tour + " tours <br>");
}



//correction
//------------question 1
//---------while
var manege = 0;
while (manege < 10) {
    manege++;//j incremente
    document.write("c est le tour n° " + manege + "<br>");
}
document.write("<hr>");

//----------for
for (var i = 1; i <= 10; i++) {
    document.write("c est le tour n° " + i + "<br>");
    
}
document.write("<hr>");

////////////////////////////////

//------------question 2
//prompt while
var question = parseInt(prompt("combien de tours voulez-vs faire ?"));
var compteur = 1;//initialise à 1
while (compteur <= question) {
    document.write("c est le tour n° " + compteur + "<br>");
    compteur++;
}
document.write("<hr>");

//prompt for
var nbTours = parseInt(prompt("combien de tours voulez-vs faire ?"));
for (var tour = 1; tour <= nbTours; tour++) {
    document.write("c est le tour n° " + tour + "<br>");   
}