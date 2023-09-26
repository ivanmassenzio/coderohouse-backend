const div = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) return reject('No se puede dividir por cero');
        console.log('====================================');
        console.log(`${a} / ${b} => ${a / b}`);
        console.log('====================================');
        resolve(a/b);
    })
}


div(2, 1)
.then( (result) => {
   console.log('====================================');
   console.log('div success', result);
   console.log('===================================='); 
})
.catch((error) => {
    console.log('====================================');
    console.log('div error', error);
    console.log('===================================='); 
})
.finally( () => console.log('div end'))
div(2, 0)
.then( (result) => {
   console.log('====================================');
   console.log('div success', result);
   console.log('===================================='); 
})
.catch((error) => {
    console.log('====================================');
    console.log('div error', error);
    console.log('===================================='); 
})
.finally( () => console.log('div end'))