function tarea(numero) {
    console.log('Hola mundo con incremento' + numero);
}

function main() {
    for (let index = 0; index < 4; index++) {
        //me mostra un resultado de 4 hola mundo
        tarea(index);
    }
}

main();