import logo from './logo.png'
import './NavBar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import Fade from '@mui/material/Fade';
import CartContext from '../../context/CartContext';

const pages = [ 'Membresias', 'Productos', 'Agendar', 'Servicios'];


const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { cartListItems } = useContext(CartContext)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar className='appBar' position="absolute">
      <Container className='container' maxWidth="xxl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }}}>
            <IconButton
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`}  style={{  textDecoration: 'none', color: 'black'}}>{page}</Link>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          <Link to={'/'}>
          <img src={logo} className="logo" alt='logo'/>
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textShadow: '1px 1px yellow' 
            }}
          > 
          WELLNESS GYM  
          </Typography>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
               (page === 'Productos') ?
            <div key={i}>
            <Typography
                style={{  marginRight: '10px', textDecoration: 'none', color: 'black', fontWeight: 700, textShadow: '1px 1px yellow', display: 'block' }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
              >
                {page}
              </Typography><Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              > <Link
                    style={{ marginRight: '10px', textDecoration: 'none', color: 'black', fontWeight: 700, textShadow: '1px 1px yellow', display: 'block' }}
                    className='linkPages'
                    to={`/categorias/Pre-Entreno`}
                    
                    onClick={handleCloseNavMenu}
                  >
                  <MenuItem  onClick={handleClose}>Pre-Entreno</MenuItem>
                </Link>

                <Link
                    style={{ marginRight: '10px', textDecoration: 'none', color: 'black', fontWeight: 700, textShadow: '1px 1px yellow', display: 'block' }}
                    className='linkPages'
                    to={`/categorias/Post-Entreno`}
                    
                    onClick={handleCloseNavMenu}
                  >
                  <MenuItem onClick={handleClose}>Post-Entreno</MenuItem>
                </Link>
                  
                  
                </Menu>
              </div>
               :
              <Link
                style={{ marginRight: '10px', textDecoration: 'none', color: 'black', fontWeight: 700, textShadow: '1px 1px yellow', display: 'block' }}
                className='linkPages'
                to={`/${page}`}
                key={i}
                onClick={handleCloseNavMenu}
              >
               {page}
              </Link>
            ))}
            
             
          </Box>
           
          {cartListItems.length >= 1 && (
                    
                    <CartWidget/>
                    
                )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
