import {useState, useEffect} from 'react';
import CardList from './CardList';
import productos from '../../utils/productsMock'
import './CardListContainer.css'

const CardListContainer = () => {
    const [products, setProducts] = useState([])
    const [stock, setStock] = useState(10)
    

    const getProducts = () => {
      //creamos una promesa con una funcion flecha que le pasamos 2 parametros resolve y reject
      //que se encargaran en el caso de resolve devolver que se ejecuto correctamente o de lo contrario un reject
      return new Promise((resolve, reject) => {
        setTimeout(() =>{
          resolve(productos)
        }, 2000)
      })
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
      <>
        <h2>Productos destacados</h2>
        <div className='contenedorCard'>
        <CardList products={productos}/>
        </div>
      </>
    )

}

export default CardListContainer