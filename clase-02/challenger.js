const productos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
];

let allProducts = productos.reduce(( result, item ) => {
    Object.keys(item).forEach((key) => {
        if(!result.includes(key)) {
            result.push(key);
        }
    })
    return result;
}, [])

let total = productos.reduce(( result, item ) => {
    Object.values(item).forEach((value) => result += value)
    return result;
}, 0)

console.log('====================================');
console.log('allProducts', allProducts);
console.log('====================================');



function unificarListasConSuma(lista) {
    const resultado = {};

    lista.forEach(item => {
        for (const producto in item) {
            if (resultado.hasOwnProperty(producto)) {
                resultado[producto] += item[producto];
            } else {
                resultado[producto] = item[producto];
            }
        }
    });

    return resultado;
}

const listaUnificadaConSuma = unificarListasConSuma(productos);
console.log('====================================');
console.log(listaUnificadaConSuma);
console.log('====================================');