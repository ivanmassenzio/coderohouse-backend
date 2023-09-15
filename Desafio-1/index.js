class ProductManager {
    
    // Genero un array vacio  de productos y el ID inicial
    constructor(){
        this.products = [];
        this.nextID = 1;
    }

    // Genero el metodo para agregar productos que recibe un objeto producto con todos los datos
    addProduct( product ) {
        
        // Validar que todos los campos sean obligatorios
        if( !product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Todos los campos son obligatorios");
        }

        // Validar que el codigo no exista
        if( this.products.some(existingProduct => existingProduct.code === product.code )) {
            console.log("El codigo ya existe");
        }
        // agrego el id en el producto obtenido
        product.id = this.nextID++;

        // almaceno el producto en el array de productos
        this.products.push(product)
    }

    // devuelvo la lista de productos
    getProducts() {
        return this.products;
    }

    // devuelvo el producto del id recibido
    getProductById(id) {
        let product = this.products.find(product => product.id === id);
        if (!product) {
            console.log("Producto no encontrado")
        }
        return product;
    }
}

// instancio un objeto de la clase ProductManager
let productManager =  new ProductManager();


// Agrego elementos al producto, repitiendo el codigo en el 2do caso
productManager.addProduct({
    title: 'titulo',
    description: 'descripcion de la cosa',
    price: 10,
    thumbnail: 'http://lafoto.com',
    code: 123,
    stock: 4
})

productManager.addProduct({
    title: 'titulo',
    description: 'descripcion de la cosa',
    price: 10,
    thumbnail: 'http://lafoto.com',
    code: 123,
    stock: 4
})

productManager.addProduct({
    title: 'otro titulo',
    description: 'descripcion de la cosa 2',
    price: 100,
    thumbnail: 'http://lafoto.com',
    code: 1234,
    stock: 4
})

// Muestro por consola la lista de productos y uno especifico indicandole el id
console.log(productManager.getProducts())
console.log(productManager.getProductById(1))
