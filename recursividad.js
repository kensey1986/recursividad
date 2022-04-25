
// let cuentaAtras = (numero) => {

//     //base case
//     if (numero === 0) {
//         return;
//     }
//     console.log(numero);
    
//     return cuentaAtras(numero - 1);
// };
// console.log(cuentaAtras(15)) // 5, 4, 3, 2, 1





// ¿Sabes cómo podemos saber que un número es par usando el operador de residuo(%)? Entonces, si cualquier número % 2 == 0 entonces ese número es par o si cualquier número % 3 == 0 entonces ese número es impar.

// Bueno, resulta que existe otro método.

// Si continuamente restamos dos a un número hasta que el número más pequeño sea 0(cero) o 1(uno) entonces podemos saber si el número es par o impar.

// Intentemos eso con recursión. Entonces, dado el número 6, nuestro programa debería devolver 'Par' porque 6-2-2-2 = 0. Dado 7, nuestro programa debería devolver 'impar' porque 7-2-2-2 = 1.


let parImpar = (numero) => {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
    
};

console.log(parImpar(11))