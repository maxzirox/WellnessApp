import { Button } from '@mui/material'




const ItemCount = ({ stock, actualizar, contador, mostrarBoton }) => {

 
    

    const addCount = () =>{
            actualizar(contador + 1)
            
        }
        const removeCount = () =>{
            if(contador > 0 ){
              actualizar(contador - 1)
            }       
        }
        
    return(
        
        <div className='countItem'>
           { mostrarBoton &&
            <><Button onClick={removeCount} disabled={contador <= 1}>-</Button><p>{contador}</p><Button onClick={addCount} disabled={stock <= contador}>+</Button></>
            }
        </div>
        
        
        
    )
}

export default ItemCount