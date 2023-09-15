const lista = [
    'tomates',
    'atun',
    'banana',
    'Pollo',
    'Harina de Trigo',
]

function mostrarList(lista){
    if(!lista.length){
        console.log('La lista esta vacia')
    }else {
        let resultado = ``
        lista.map(function(producto) {
            resultado = `${resultado}
            * ${producto}`
        })
        console.log(resultado)
    }
}

mostrarList(lista)

