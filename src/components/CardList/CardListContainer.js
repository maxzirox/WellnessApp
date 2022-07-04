import {useState, useEffect} from 'react';
import CardList from './CardList';
import './CardListContainer.css'
import { collection, doc, getDocs } from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig'

const CardListContainer = () => {
    const [products, setProducts] = useState([])
    const [stock, setStock] = useState(10)
            
    const getProducts = async () => {
        //creamos un snapshot  y le asignamos el metodo getDocs que nos traera un meotodo collection 
        //que nos devuelve la base de datos con nuestra coleccion productos desde nuestra base de datos por medio de un await
        const productSnapshot = await getDocs(collection(dataBase, 'productos'))
        const productList = productSnapshot.docs.map((item) => {
            let product = item.data()
            product.id = item.id
            return product
        })
        return productList
    }
  
    
    /*/otra forma de llamar y utilizar una promesa con una funcion asyncronica
    async function getProductsAsincrono(){
      try{
        const productos = await getProducts()
        console.log("productos asincrono: ", productos)
        setProducts(productos)
      }catch(error){
        console.log("fallo la llamada")
      }
      
    }
    getProductsAsincrono()*/
    //utilizamos useEffect para ejecutarlo solo en la fase de montaje
    useEffect( () => {
       //primer llamamos a la funcion que devuelve la promesa
       getProducts()
       //con el .then le decimos que cada vez que la promesa responda mueste un console.log
       .then( (response) => {
       //console.log("respuesta promesa: ", response)
       setProducts(response)
       })
       //con el .catch le decimos que cada vez que la promesa falle indique un mensaje de error 
       .catch((err) =>{
        //alert("catch: fallo la llamada", err)
       })
        //con .finally le indicamos un mensaje final si responde o falla
      .finally(() =>{
        //console.log("finally: termino la promesa")
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