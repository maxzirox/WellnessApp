import { Container, Divider, Grid, Paper, Typography, Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({ data }) => {
    
    const [showButton , setShowButton] = useState(false)
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(0)
    const { addProductToCart } = useContext(CartContext)

    useEffect( () => {
        setStock(data.stock)
     }, [data.stock])
    

    const onAdd = (cantidad) =>{
        if(stock > 0 && stock >= count){
            setStock( stock - count)
            setShowButton(true)
            addProductToCart({...data, cantidad: count})
            setCount(1)
            Swal.fire(
                'Producto agregado',
                `x${count} ${data.titulo}`,
                'success'
              )
            
        }else{
            alert("sin stock")
            setCount(1)
        }
    }
  
  return(
      
      <Container maxWidth='lg'>
          
          
      <Paper  variant="outlined">
      <h2>{data.titulo}</h2>
      <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" flexWrap='wrap'>
              <div className="detail-product-image">
              <img src={`/${data.imagen}`} alt="imgProduct"/>
          </div>
          <Grid >
              <Paper elevation={5} style={{backgroundColor: 'orange', width: 200, borderRadius: 30 }}>
                <Container className='controlContainer' >
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid textAlign='center'><h6> Precio</h6></Grid>
                        <Grid textAlign='center'><h3> $ {data.precio}</h3></Grid>
                    </Grid>
                    
                    { !showButton ?
                        <><ItemCount stock={stock} actualizar={setCount} contador={count} mostrarBoton={setShowButton}/>
                        <Button variant='contained' style={{ backgroundColor: '#FF5900' }} onClick={() => onAdd(count)} disabled={data.stock < count || data.stock === 0}>Agregar</Button></>  
                        :
                        <Button variant='contained' style={{backgroundColor: '#FF5900'}}> <Link to='/carrito' style={{textDecoration: 'none', color: 'aliceblue'}}>Ir al carrito</Link></Button>}
                </Container >
              </Paper>
         </Grid>
     </Grid>
      <h3>Descripción:</h3>
      <Typography variant="body1" margin="20px">{data.descripcion}</Typography>
      </Paper>
      <Divider variant="middle" />
  
  </Container>
  )
  }
export default ItemDetail
