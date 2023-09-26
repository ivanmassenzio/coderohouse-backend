const div = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) return reject('No se puede dividir por cero');
        console.log('====================================');
        console.log(`${a} / ${b} => ${a / b}`);
        console.log('====================================');
        resolve(a/b);
    })
}

const asyncFunction = async () => {
    try {
        const result = await div(2,2);
        console.log('====================================');
        console.log('div result', result);
        console.log('====================================');
    } catch (error) {
    console.log('====================================');
    console.log('Error', error);
    console.log('====================================');      
    }
};

asyncFunction();