const interface = require(`readline-sync`);

//Suma, Resta, Multiplicación y division
let response = "";

do{
    
    console.log("1.- Suma");
    console.log("2.- Resta");
    console.log("3.- Multiplicacion");
    console.log("4.- Division");
    console.log("5.- Salir");
    response = interface.question("Que operacion deseas hacer?:")

    if(response != "5"){
        const Numero1 = interface.question("Indique el primer valor: ");
        const Numero2 = interface.question("Indique el segundo valor: ");

        switch(response){
            case "1":
                var result = parseInt(Numero1) + parseInt(Numero2);
                console.log("Respuesta: "+result);
                break;
            case "2":
                    var result = parseInt(Numero1) - parseInt(Numero2);
                    console.log("Respuesta: "+result);
                    break;
            case "3":
                    var result = parseInt(Numero1) * parseInt(Numero2);
                    console.log("Respuesta: "+result);
                    break;
            case "4":
                    var result = parseInt(Numero1) / parseInt(Numero2);
                    console.log("Respuesta: "+result);
                    break;
                default:
                    break;
        }

        interface.question("Presiona Enter para continuar");
    }
}while(response != "5");