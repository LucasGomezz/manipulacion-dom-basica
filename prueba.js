const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("El valor ingresado es incorrecto");
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
let j = 10;
while(j >= 2){
    console.log("El valor de i es: " + j);
    j--;
}

while(respuesta != '4') {
    let pregunta = prompt('¿Cuanto es 2 + 2?');
    respuesta = pregunta;
}

function primerResultado (arr){
    console.log(arr[0]);
}

function imprimirElementoPorElemento (arr){
    for(let i= 0 ; i < arr.length;i++){
        console.log(arr[i]);
    }
}

function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0;i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const tipoDeSuscripciones = {
    free:  "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

function conseguirTipoSuscripcion(suscripcion) {
    if(tipoDeSuscripciones[suscripcion]) {
        console.log(tipoDeSuscripciones[suscripcion])
        return;
    } else {
        console.warn('Ese tipo no existe');
    }
}


