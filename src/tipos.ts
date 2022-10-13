export default class Tipos {
    resultado: number;
    numero1: number;
    numero2: number;

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.resultado = this.numero1 + this.numero1;
        console.log(
        `El numero 1: ${numero1} y el numero 2: ${numero2}
El resultado de la suma es: ${this.resultado} `);
    }

    sumar(numero1: number, numero2: number){
        return numero1 + numero2;
    }

    restar(numero1: number, numero2: number){
        return numero1 - numero2;
    }

    multiplicar(numero1: number, numero2: number){
        return numero1 * numero2;
    }

    dividir(numero1: number, numero2: number){
        return numero1 + numero2;
    }
}