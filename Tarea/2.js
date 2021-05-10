const interface = require(`readline-sync`);
let response = "";
do{
    console.log("1.- Suma");
    console.log("2.- Resta");
    console.log("3.- Mult");
    console.log("4.- Div");
    console.log("5.-Salir")
    response = interface.question("Selecione la operacion")
    if(response != "5"){
        const num1 = interface.question("primer numero");
        const num2 = interface.question("segundo numero");
        switch(response){
            case "1":
                var result = parseInt(num1) + parseInt(num2);
                console.log("Respuesta: "+result);
                break;
            case "2":
                    var result = parseInt(num1) - parseInt(num2);
                    console.log("Respuesta: "+result);
                    break;
            case "3":
                    var result = parseInt(num1) * parseInt(num2);
                    console.log("Respuesta: "+result);
                    break;
            case "4":
                    var result = parseInt(num1) / parseInt(num2);
                    console.log("Respuesta: "+result);
                    break;
                default:
                    break;
        }
        interface.question("enter para poder continuar");
    }
}while(response != "5");
