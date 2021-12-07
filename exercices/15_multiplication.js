
var nombre = prompt("Entrer un nombre entre 2 et 9 :");
while (nombre >=1 && nombre <= 10) {
    for (var max = 10; <= 10; max++) {
        document.write("");
        
    }
    
}

//correction
var choix = prompt("choisis un nombre entre 2 et 9 :");
while ((choix > 1) || (choix < 10)) {
    if ((choix >= 2) && (choix <= 9)) {
        for (var i = 1; i <= 10; i++) {
            var resultat = choix * 1;
            document.write(choix + " x " + i + " = " + resultat + "<br>");
            
        }
        break; //break permet de sortir d1 boucle
    }   else{
        choix = Number(prompt("entrez 1 nombre entre 2 et 9 compris :"))
    }
}