const nombres: string[] = [];


const imprimirNombres = () => {
    nombres.push('Juan Perez');
    nombres.push('Maria Perez');

    for (let index = 0; index < nombres.length; index++) {
        console.log(`Nombre: ${nombres[index]}`);
    }
}

const contarPosiciones = () => {
    console.log(`La cantida de nombres es: ${nombres.length}`);
}

export {imprimirNombres, contarPosiciones}