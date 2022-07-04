import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig'


const ItemDetailContainer = () => {
    const [ products, setProducts ] = useState([])
    const { id } = useParams()

    const getProducts = async () => {
        const docRef = doc(dataBase, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
            })

         }, [])
   

    
    return(
        
        <div><ItemDetail data={products}></ItemDetail></div>
        
    )
}

export default ItemDetailContainer