const suma = (a,b) => {
    return new Promise( (resolve, reject) => {
        if(a === 0 || b === 0) return reject('Operacion innecesaria.');
        const result = a + b;
        if(result < 0) return reject('La calculadora solo debe devolver valores positivos.')
        resolve(result);
    })
};
const resta = (a, b) => {
    return new Promise( (resolve, reject) => {
        if( a === 0 || b === 0) return reject('Operacion invalida.');
        const result = a - b;
        if(result < 0) return reject('La calculadora solo debe devolver valores positivos.')
        resolve(result);
    })
};
const div = (a, b) => {
    return new Promise( (resolve, reject) => {
        if( b === 0) return reject('Operacion invalida, No se puede dividir por cero.');
        const result = a / b;
        if(result < 0) return reject('La calculadora solo debe devolver valores positivos.')
        resolve(result);
    })
};
const mul = (a, b) => {
    return new Promise( (resolve, reject) => {
        if( a === 0 || b === 0) return reject('Operacion invalida.');
        const result = a * b;
        if(result < 0) return reject('La calculadora solo debe devolver valores positivos.')
        resolve(result);
    })
};

const calc = async () => {
    try {
        let result = await suma(4,2)
        console.log('====================================');
        console.log('Suma', result);
        console.log('====================================');
        result = await resta(4,2)
        console.log('====================================');
        console.log('Resta', result);
        console.log('====================================');
        result = await div(4,2)
        console.log('====================================');
        console.log('Division', result);
        console.log('====================================');
        result = await mul(4,2)
        console.log('====================================');
        console.log('Multiplicacion', result);
        console.log('====================================');
    } catch (error) {
        console.log('====================================');
        console.log('Error', error);
        console.log('====================================');
    }
}
calc();