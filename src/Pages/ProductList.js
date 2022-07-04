import CardList from '../components/CardList/CardList'
import {useState, useEffect} from 'react';
import {  doc, getDocs } from 'firebase/firestore'
import { collection, query, where } from "firebase/firestore";
import dataBase from '../utils/firebaseConfig'
import { useParams } from 'react-router-dom'


const ProductList = () => {
    const [products, setProducts] = useState([])
    const { categoria } = useParams()

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(dataBase, 'productos'))
        const productList = productSnapshot.docs.map((item) => {
            let product = item.data()
            product.id = item.id
            return product
        })
        return productList
    }

    const filtrarCategoria = (arrayProductos) => {
        return arrayProductos.map( (item) =>{
            if(item.categoria == categoria) {
                return setProducts(products => [...products, item])
            }
        })
    }

    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts([])
            filtrarCategoria(response)
            })

         }, [categoria])

    return(
        
        
        <div>
        <h2>Suplementos de {categoria}</h2>
        <CardList products={products}/>
        </div>
        
    )
}

export default ProductList