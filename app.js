let nbConvert1;
let nbConvert2;
let nb1;
let nb2; 
let operation;

calculatrice();

function checkNombre(nb1, nb2){
    if(isNaN(nb1) || isNaN(nb2)){
        alert("Veuillez saisir des nombres");
        calculatrice();
    }
}

function demandeNombre(){
    nb1 = prompt("Veuillez saisir le premier nombre de l'opération");
    nb2 = prompt("Veuillez saisir le deuxième nombre de l'opération");
}

function conversionNombre(nb1,nb2){
    nbConvert1 = parseInt(nb1);
    nbConvert2 = parseInt(nb2);
}

function addition(nb1, nb2){
    let calcul = nb1+nb2;
    alert(calcul);
}

function soustraction(nb1, nb2){
    let calcul = nb1-nb2;
    alert(calcul);
}

function division(nb1, nb2){
    let calcul = nb1/nb2;
    alert(calcul);
}

function multiplication(nb1, nb2){
    let calcul = nb1*nb2;
    alert(calcul);
}

function demanderOperation(){
    operation = prompt("Bienvenue dans la super calculatrice \n\n Veuillez choisir une option :\n 1) Tapez 1 pour réaliser une addition\n 2) Tapez 2 pour réaliser une soustraction\n 3) Tapez 3 pour réaliser une division\n 4) Tapez 4 pour réaliser une multiplication");
}
function calculatrice(){

    demanderOperation();

    if(operation === "1"){
        demandeNombre();
        checkNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        addition(nbConvert1, nbConvert2);
    }
    else if(operation === "2"){
        demandeNombre();
        checkNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        soustraction(nbConvert1, nbConvert2);
    }
    else if(operation === "3"){
        demandeNombre();
        checkNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        division(nbConvert1, nbConvert2);
    }
    else if(operation === "4"){
        demandeNombre();
        checkNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        multiplication(nbConvert1, nbConvert2);
    }
    else{
        if(confirm('Veuillez saisir une opération valide. Appuyez sur "OK" pour recommencer ou "Annuler" pour quitter')){
            calculatrice();
        }
    }
}