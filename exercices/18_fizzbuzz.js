var nb = 1;
var nbMax = 100;
while (nb <= nbMax) {
    if ((nb%3 === 0) && (nb%5 === 0)) {
        console.log("fizzbuzz");
    }else if (nb%3 === 0) {
        console.log("fizz");
    }else if (nb%5 === 0) {
        console.log("buzz");
    }    else{
        console.log(nb);
    }
    nb++;
}

//correction
for (var nombre = 1; nombre <= 100; nombre++) {
    if ((nombre%3 === 0) && (nombre%5 === 0)) console.log("fizzbuzz"); {
        else if (nombre%3 === 0) console.log("fizz");
        else if (nombre%5 === 0) console.log("buzz");
        else console.log(nombre);
    };
    
}