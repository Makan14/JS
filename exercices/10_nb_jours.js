var  mois = parseInt(prompt("quel mois choisisssez-vs", "saisir un chiffre entre 1 et 12")); 

if (mois === 2) {
    document.write("le mois de février contient 28 jours");
}else if((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
    document.write("le mois numéro " + mois + " fait 30 jours");
}else if((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){//mois à 31 jours
    document.write("le mois numéro " + mois + " fait 31 jours");
}else{
    document.write("le mois numéro " + mois + " n'est pas dns le calendrier");
}