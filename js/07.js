// L operateur ET : && ou AND 

if ((prenomLogin === prenom) && (agelogin === monAge)){
    
}

if ((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => FAUX

//l'operateur OU : || ou OR (| = barre oblique = pipe = alt gr + 6)

if ((C) OR (D)){...}
=> si c est FAUX et D est VRAI => FAUX
=> si c est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si c est VRAI et D est VRAI => VRAI

//l opérateur "!" signifie le contraire de ...
var utilisateur = true;
if(!utilisateurLog){
    //si l utilisateur n est pas loggé
}

//ce qui revient à:
if (utilisateurLog == false) {
    //si l utilisateur n est pas loggé
}
