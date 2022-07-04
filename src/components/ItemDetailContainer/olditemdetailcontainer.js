import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import productos from '../../utils/productsMock'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState([])
    const { id } = useParams()
    //creamos una constante en la cual le asignamos una funcion que buscara 
    //en nuestro array productos con el .find a la variable product que retornara
    //una comparacion entre ambos parametros si coinciden lo guardara en productFilter
    const productFilter = productos.find( (product) => {
        return product.id == id
    })
    //con useEffect utilizamos la funcion para con setProduct asignar 
    //los parametros a nuestro estado product
    useEffect( () => {
        setProduct(productFilter)
    }, [])
   
    /* const getItem = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() =>{
              resolve(producto)
            }, 2000)
          })
    }

    useEffect( () => {
        getItem()
        .then((res) => {
            setProduct(res)
        })
    })
   */
    
    return(
        <>
        <div><ItemDetail data={product}></ItemDetail></div>
        </>
    )
}

export default ItemDetailContainer