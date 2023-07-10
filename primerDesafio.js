
class productManager{

    static id=0
    static products=[]
    
    constructor(title, description, price, thumbnail, code, stock){
        this.title=title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock=stock
    }

    addProduct(){
        //incremento en 1 el valor de ID
        productManager.id+=1
        //creo un objeto nuevo con atributos nuevos
        let producto1={id:productManager.id, title:this.title,description:this.description,price:this.price,thumbnail:this.thumbnail,code:this.code,stock:this.stock}
        //creo un array con los valores de ese nuevo objeto
        let valores=Object.values(producto1)
        //corroboro que no haya ningun valor vacio dentro de ese array
        let elementoVacio=valores.includes("")
        //corroboro que no haya ningun valor undefined dentro de ese array
        let elementoUnd=valores.includes(undefined)
        // con map genero un array de los code y veo si existe el mismo valor
        let ListaCode=productManager.products.map(elemento=>elemento.code)
        let mismoCode=ListaCode.includes(producto1.code)



        if (elementoVacio || elementoUnd){
            console.log("existen atributos sin un valor definido")
        }
        else if (mismoCode){
            console.log("El valor elegido para code ya existe, elija otro")
        }
        else{
            productManager.products=[...productManager.products, producto1]
        }

    }

    getProducts(){
        console.log(productManager.products)
        return productManager.products
    }

    getProductById(id){
        const productoBuscado=productManager.products.find(element=>element.id==id)
        if(productoBuscado!=undefined){
            return (productoBuscado)
        }
        else{
           console.log("Not found")
        }
    }
}


let producto1 = new productManager("Coca Cola","Gaseosa",700,"url",'123',20)
let producto2 = new productManager("Pepsi Cola","Gaseosa",600,"url",'1234',25)
let producto3 = new productManager("Fideos Terrabusi","pastas",200,"url",'1423',22)
let producto4 = new productManager("crema","lacteos",350,"url",'121233',300)
//este no se agrega por que le falta un valor a los atributos
let producto5 = new productManager("Coca Cola","Gaseosa",100,"url",'12367',"")
//este no se agrega por que repite code
let producto6 = new productManager("Coca Cola","Gaseosa",100,"url",'123',120)


producto1.addProduct()
producto2.addProduct()
producto3.addProduct()
producto4.addProduct()
producto5.addProduct()
producto6.addProduct()
producto1.getProducts()

//este arroja el error not found
let productID=producto1.getProductById(6)
//este devuelve un producto
console.log(producto1.getProductById(2))


