import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CartContext from '../context/CartContext';
import { Button } from '@mui/material'
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemCount from '../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Carrito = () =>{
    const { cartListItems } = useContext(CartContext)
    
    const { removeAllCart } = useContext(CartContext)
    const { removeProductToCart } = useContext(CartContext)
    const { addProductToCart } = useContext(CartContext)
    let total = 0
    let subTotal=0

    
    return(
            
            
            <div>
            <h1>Carrito de compra</h1>
            
            <div>
            {cartListItems.length === 0 && (
                 <div> 
                    <h3>No tienes nada en el carrito</h3>  
                    <Button variant='outlined' style={{background: '#FF3A00', color: 'aliceblue'}}> <Link to='/productos' style={{textDecoration: 'none', color: 'aliceblue'}}>Vamos a comprar</Link></Button>
                 </div>   
            )}
            {cartListItems.map((item) => {
                subTotal= item.precio * item.cantidad
                total = subTotal + total
                
                return (
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            marginBottom: 2,
                            maxWidth: 800,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}
                        key={item.id}
                    >
                        <Grid container spacing={7}>
                            <Grid item >
                                    <Img sx={{ width: 100, height: 100 }} alt={item.titulo} src={`/${item.imagen}`} />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="row" justifyContent='space-between' alignSelf='center'>
                                    
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {item.titulo}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {item.categoria}
                                        </Typography>
                                        
                                        <Typography variant="body2" color="text.secondary">
                                            Cantidad: {item.cantidad}
                                        </Typography>
                                        <Typography variant="subtitle2" component="div">
                                            ${item.precio} c/u
                                        </Typography>
                                    <Grid item>
                                        <Typography variant="subtitle2" component="div">
                                           ${item.precio * item.cantidad}clp
                                        </Typography>
                                    </Grid>
                                    
                                    <Grid item>
                                        <DeleteIcon
                                            onClick={() => removeProductToCart(item)} />
                                            <AddShoppingCartIcon
                                            onClick={() => {addProductToCart(item)}}
                                            />
                                    </Grid>
                                    </Grid>


                            </Grid>

                        </Grid>
                    </Paper>);
            })}

            </div>
            {cartListItems.length !==0 &&(
            <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 800,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}

                    >
            <Grid item xs container direction="row" justifyContent='space-between' alignSelf='center' >
            <Button variant='outlined' color='error' startIcon={<DeleteIcon />} onClick={removeAllCart}>Borrar Todo</Button>
            <Typography variant="subtitle2" component="div" >
                    Precio total: {total} clp
                </Typography>
            <Button variant='outlined' startIcon={<PaymentIcon />} style={{background: 'orange', color: 'black'}}> <Link to='/Pagar' style={{textDecoration: 'none', color: 'black'}}>Pagar</Link></Button>
            </Grid>
            </Paper>
            
            )}
            </div>
            
        
    )
}

export default Carrito