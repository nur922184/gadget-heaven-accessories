import toast from "react-hot-toast"

const getAllFaverites =()=>{
    const all = localStorage.getItem('favorite')
    if(all){
        const favorite = JSON.parse(all)
        // console.log(favorite)
        return favorite
    }
    else{
        console.log([])
        return []
    }
}
const AddFavorite = (product) =>{
    const favorite = getAllFaverites()
    const isExist = favorite.find(products => products.id==product.id)
    favorite.push(product)
    localStorage.setItem('favorite', JSON.stringify(favorite))
    toast.success('Successfully Added!');
    // console.log(favorite)
}



export{AddFavorite, getAllFaverites,}