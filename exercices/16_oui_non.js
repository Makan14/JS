
//correction
var disMoi = "";
var i = 1;

while ((disMoi !== "oui") && (disMoi !== "non")) {
    disMoi = prompt("jouer à ni oui ni non ?");
    document.write('"' + disMoi + '" n\'est pas une reponse pr la' + i + '° fois veux-tu jouer a ni oui ni non ? <br>')
    i++;
}
document.write("<p style = background-color: cyan; text-align:center;>PERDU ;-) tu as tenu " + i + " tours.</p>");

