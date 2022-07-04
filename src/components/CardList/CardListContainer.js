import {useState, useEffect} from 'react';
import CardList from './CardList';
import './CardListContainer.css'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig'

const CardListContainer = () => {
    const [products, setProducts] = useState([])
    const [stock, setStock] = useState(10)
            
    const getProducts = async () => {

        const productSnapshot = await getDocs(collection(dataBase, 'productos'))
        const productList = productSnapshot.docs.map((item) => {
            let product = item.data()
            product.id = item.id
            return product
        })
        return productList
    }

    useEffect( () => {
       getProducts()
       .then( (response) => {
       setProducts(response)
       })
    }, [])

    return(
      
        
        <div className='contenedorCard'>
        <h2>Productos destacados</h2>
        <CardList products={products}/>
        </div>
      
    )

}

export default CardListContainer