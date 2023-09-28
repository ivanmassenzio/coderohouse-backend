const { promises: fs } = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }
    
    nextID = () => parseInt(Math.random() * 1000)
    getProducts = () =>  getJSONFromFile(this.path)
    
    
    async addProduct(product) {
        const { title, description, price, thumbnail, code, stock } = product;
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error('todos los campos son obligatorios.');
        }
        const products = await getJSONFromFile(this.path);
        if (products.find((p) => p.code === code)) {
            console.log(`ya se encuetra registrado el code: ${code}`)
        } else {
            const id = this.nextID();
            const newProduct = { id, title, description, price, thumbnail, code, stock };
            products.push(newProduct);
            await saveJSONToFile(this.path, products);
        }
    }
    
    async deleteProduct(id){
        const products = await getJSONFromFile(this.path);
        const index = products.findIndex((p) => p.id === id);

        if (index !== -1 ){
            products.splice(index, 1)
            await saveJSONToFile(this.path, products);
            console.log("el producto se ha borrado correctamente")
        } else{
            console.log('no se ha podido borrar el producto');
        }
        
    }

    async getProdcutById(id) { 
        const products = await getJSONFromFile(this.path);
        console.log(products[0].id)
        let productById = products.find(p => p.id === id)
        console.log(id)
        console.log(productById)
        if (!productById) {
            console.log("producto no encontrado")
        } else {
            return productById
        }
    }
    
    async updateProduct(id, newTitle, newDescription, newPrice, newThumbnail, newCode, newStock) {
        const getProducts = await getJSONFromFile(this.path);
        let ProdId = getProducts.find(p => p.id === id)
        if (!ProdId) {
            console.log(`updateProduct: producto no encontrado, ID: ${id}`)
        } else if (products.find((p) => p.code === newCode))
         {
            console.log(`ya se encuetra registrado el code: ${newCode}`)
        } else { 
            const products = { id:id, title: newTitle, description: newDescription, price: newPrice, thumbnail: newThumbnail, code: newCode, stock: newStock }
            await saveJSONToFile(this.path, products);
            console.log("producto actualizado correctamente", products)                      
        }
    }
}

const getJSONFromFile = async (path) => {
    try {
        await fs.access(path);
        const content = await fs.readFile(path, 'utf-8');
        try {
            const parsedData = JSON.parse(content);
            if (!Array.isArray(parsedData)) {
                return [];
            }
            return parsedData;
        } catch (error) {
            throw new Error(`El archivo ${path} no tiene un formato JSON válido.`);
        }
    } catch (error) {
        return [];
    }
}

const saveJSONToFile = async (path, data) => {
    const content = JSON.stringify(data, null, '\t'); 
    try {
        await fs.writeFile(path, content, 'utf-8');
    } catch (error) {
        throw new Error(`no se pudo escribir el archivo ${path}.`);
    }
}  

const test = async () => {
    try {
        const productManager = new ProductManager("./products.json");
        // await productManager.addProduct({
        //     title: "Coca Cola",
        //     description: "Gaseosa de 3 litros",
        //     price: 500,
        //     thumbnail: "http://imagen-cocacola.com",
        //     code: "001234",
        //     stock: 50
        // });
        // const products = await productManager.getProducts();
        // console.log("getProdcuts", 'Listado de productos:', products);
        // const productById = await productManager.getProdcutById(433);
        
        // console.log('====================================');
        // console.log("getProdcutById");
        // console.log('====================================');
        // console.log(productById );
        productManager.deleteProduct(145) 
        // await productManager.updateProduct(668, "Fanta", "Gaseosa 2 litros", 500, "http://imagen-fanta.com", "001234", 80)
    } catch (error) {
        console.error(' Ha ocurrido un error: ', error.message);
    }
};
test()
  