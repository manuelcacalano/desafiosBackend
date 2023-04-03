class ProductManager {
    constructor(){
        this.products = []
        this.index=0
    }
    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Faltan datos")
        }
        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code===code){
                return console.log(`${code} ya existe`)
            }
        }
        ProductManager.id++
        this.products.push({title, description, price, thumbnail, code, stock,id:ProductManager.id });    
    }
    getProduct(){
        return this.products;
    }
    getProductById(id){
        if(!this.products.find((product) => product.id === id)){
            console.log('Not found')
        } else{
            console.log('Found',this.products.find((product) => product.id === id))
        }
    }
}

const products = new ProductManager 
products.addProduct('producto prueba','Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25)
products.addProduct('producto prueba2','Este es un producto prueba', 200, 'Sin imagen', 'abc1234', 25)

//Mostrar todos los productos
console.log(products.getProduct());
products.addProduct('producto prueba2','Este es un producto prueba', 200, 'Sin imagen', 'abc1234', 25)


//Productos por ID
products.getProductById(3); //Debería tirar ´Not found´
products.getProductById(2); //Debería tirar ´Found´ seguido del producto