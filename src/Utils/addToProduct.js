import toast from "react-hot-toast"

const getAllAddedPro =()=>{
    const all = localStorage.getItem('Productsadd')
    if(all){
        const ProductsAdd = JSON.parse(all)
        // console.log(favorite)
        return ProductsAdd
    }
    else{
        console.log([])
        return []
    }
}
const AddProduct = (product) =>{
    const ProductsAdd = getAllAddedPro()
    const isExist = ProductsAdd.find(products => products.id==product.id)
    ProductsAdd.push(product)
    localStorage.setItem('Productsadd', JSON.stringify(ProductsAdd))
    toast.success('Successfully Added!');
    // console.log(favorite)
}



export{AddProduct , getAllAddedPro,}