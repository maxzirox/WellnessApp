import ShopIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CartContext from '../../context/CartContext';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material'
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CartWidget = () =>{
    const { cartListItems } = useContext(CartContext)
    
    const { removeAllCart } = useContext(CartContext)
    const { removeProductToCart } = useContext(CartContext)
    const { addProductToCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    let total=0
    let subTotal=0


    
    return(
            
            <div>
                <ShopIcon
                color={'primary'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-Menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
            <div >
                {cartListItems.length === 0 && (
                    
                    <Button variant='outlined' style={{background: '#FF3A00', color: 'aliceblue'}}> <Link to='/productos' style={{textDecoration: 'none', color: 'aliceblue'}}>Vamos a comprar</Link></Button>
                    
                )}
                {cartListItems.map((item) => {
                    subTotal= item.precio * item.cantidad
                    total = subTotal + total
                    
                console.log("item de widget", item)
                return( 
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}
                        key={item.id} 
                    >
                        <Grid container spacing={4}  >
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt={item.titulo} src={`/${item.imagen}`} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle2" component="div">
                                            {item.titulo}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {item.categoria}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Id: {item.id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Cantidad: {item.cantidad}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        
                                            <DeleteIcon
                                            onClick={() => {removeProductToCart(item)}}
                                            />
                                            <AddShoppingCartIcon
                                            onClick={() => {addProductToCart(item)}}
                                            />
                                        
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                            <Grid item xs container direction="row">
                                <AttachMoneyIcon/>
                                <Typography variant="subtitle" component="div" style={{ alignSelf: 'center' }}>
                                     {item.precio * item.cantidad}
                                </Typography>
                                <Typography variant="subtitle4" component="div" style={{ alignSelf: 'center' }}>
                                     clp
                                </Typography>
                            </Grid>
                    </Paper>)
                    
                })
                }
            </div>
            {cartListItems.length !==0 &&(
            <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}

                    >
             <Grid item>
                <Typography variant="subtitle2" component="div">
                    Precio total: {total}clp
                </Typography>
            </Grid >
            <Grid >
            <Button variant='outlined' color='error' startIcon={<DeleteIcon />} onClick={removeAllCart}>Borrar Todo</Button>
            <Button variant='outlined' style={{background: 'orange', color: 'aliceblue'}}> <Link to='/carrito' style={{textDecoration: 'none', color: 'aliceblue'}}>Ir al carrito</Link></Button>
            </Grid>
            </Paper>
            
            )}
            
            </Menu>  
            
            
        </div>
            
        
    )
}

export default CartWidget