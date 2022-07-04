import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import CartContext from '../../context/CartContext';
import { useContext, useState } from 'react';
import {addDoc, collection} from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'


const AddressForm = () =>{ 
  const { cartListItems, totalPrice, removeAllCart } = useContext(CartContext)  
  const [showOrder , setShowOrder] = useState(false)
  const [formValue, setFormValue] = useState({
    nombre: '',
    mail: '',
    telefono: ''

  })
  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map( item =>{
      return{
        id: item.id,
        title: item.titulo,
        price: item.precio
      }
    }),
    total: totalPrice
  })
  const [success, setSuccess] = useState()

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
     setOrder({...order, buyer: formValue})
     saveData({...order, buyer: formValue})
     setShowOrder(true)
  }

  const saveData = async (newOrder) => {
    const orderFirebase = collection(dataBase, 'ordenes')
    const orderDoc = await addDoc(orderFirebase, newOrder)
    setSuccess(orderDoc.id)
  }

  const exit = () =>{
    removeAllCart()
  }
    return(
        <div>
          {showOrder ? 
            <div>
              <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Codigo de compra:
            </Typography>
              {success}
          </Grid>
        <List disablePadding>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Pruductos:
            </Typography>

          {cartListItems.map((product) => (
            
            <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
              <Typography variant="body2">{product.cantidad}  x</Typography>
              <ListItemText primary={product.titulo} secondary={product.categoria}/>
              
              <Typography variant="body2"> ${product.precio} c/u</Typography>
            </ListItem>
          ))}
  
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              ${totalPrice}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Cliente
            </Typography>
            <Typography variant="subtitle1" gutterBottom>{formValue.nombre}</Typography>
            <Typography variant="subtitle1" gutterBottom>{formValue.mail}</Typography>
          </Grid> 
        </Grid>
        <Grid item xs={12} md={6}>
      <Button type='button' onClick={exit} color="success" variant="contained"><Link to='/' style={{textDecoration: 'none', color: 'aliceblue'}}>Volver</Link></Button>
      </Grid>
            </div>
           : <div>
      <Typography variant="h6" gutterBottom>
        Datos de Pago
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formValue.nombre}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mail"
            name="mail"
            label="Mail"
            fullWidth
            autoComplete="Mail"
            variant="standard"
            value={formValue.mail}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefono"
            name="telefono"
            label="Numero de contacto"
            fullWidth
            autoComplete="Numero-de-contacto"
            variant="standard"
            value={formValue.telefono}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardName"
          label="Nombre de titular"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
          
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardNumber"
          label="Numero de tarjeta"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
          
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
          label="Expiracion"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
          
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cvv"
          label="CVV"
          helperText="3 Digitos al reverso de la tarjeta"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"

        />
      </Grid>
      <Grid item xs={12} md={6}>
      <Button type='submit' color="success" variant="contained">Pagar</Button>
      </Grid>
      
      </Grid></form></div>}
    </div>
    )
}

export default AddressForm