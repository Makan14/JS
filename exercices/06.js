var lundi, mardi, mercredi, jeudi, vendredi;

lundi = 1;
mardi = "2";
mercredi = 3;
jeudi = 4;
vendredi = 5;
samedi = 6;
dimanche = 7;

lundi = prompt("Quel jour somme-nous ?");
if (lundi == 1) {
    console.log("Nous sommes " + lundi );
} 
else if (lundi == 2) {
    console.log("Nous sommes" + mardi);  
}
else if (lundi != 3) {
    alert("jour incorrect");  
}
else if (lundi != 4) {
    alert("jour incorrect");  
}
else if (lundi != 5) {
    alert("jour incorrect");  
}
else if (lundi != 6) {
    alert("jour incorrect");  
}
else if (lundi != 7) {
    alert("jour incorrect");  
}

var jour = "vendredi";

switch (new Date().getDay) {
    case 1:
        console.log("Nous sommes jeudi");       
        break;
    case 2:
        console.log("Nous sommes vendredi");       
        break;

    default:
        console.log("jour inconnu");
}

//correction

var jour = prompt("quel jours sommes-ns ?");
if (jour === "lundi") {
    document.write("demain ns seront mardi...");
} else if(jour === "mardi"){
    document.write("demain ns seront mercredi...");
} else if(jour === "mercredi"){
    document.write("demain ns seront jeudi...");
}else if(jour === "jeudi"){
    document.write("demain ns seront vendredi...");
}else if(jour === "vendredi"){
    document.write("demain ns seront samedi...");
}else if(jour === "samedi"){
    document.write("demain ns seront dimanche...");
}else if(jour === "dimanche"){
    document.write("demain ns seront lundi...");
}else{
    document.write("jour inconnu...");
}

//SWITCH CASE
switch (jour) {
    case "lundi":
        console.log("demain ns serons mardi...");
        break;
    case "mardi":
        console.log("demain ns serons mercredi...");
        break;
    case "mercredi":
        console.log("demain ns serons jeudi...");
        break;
    case "jeudi":
        console.log("demain ns serons vendredi...");
        break;
    case "vendredi":
        console.log("demain ns serons samedi...");
        break;
    case "samedi":
        console.log("demain ns serons dimanche...");
        break;
    case "dimanche":
        console.log("demain ns serons lundi...");
        break;

    default:
        console.log("jour inconnu..."); 
}