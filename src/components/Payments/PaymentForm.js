
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const PaymentForm = () => {
    return(
    <div>
    <Typography variant="h6" gutterBottom>
      Payment method
    </Typography>
    <Grid container spacing={3}>
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
    </Grid>
  </div>)

}

export default PaymentForm