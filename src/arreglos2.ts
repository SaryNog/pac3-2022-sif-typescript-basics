export const listarArreglo = () => {
    let arreglo = [10,20,30,40]; 

    for(let number of arreglo){
        console.log(number);
    }

}

export const listraString = () => {
    let saludo = 'Buenas noches';

    for(let caracter of saludo){
        console.log(caracter);
    }
}

export const listarInLoop = () => {
    let arreglo = [10,20,30,40];

    for (const key in arreglo) {
        console.log(arreglo[key]);
    }
}