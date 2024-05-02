import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'silver' }}>
               <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                  >
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     News
                  </Typography>
                  <Button component={Link} to={'/home'} sx={{
                     mr: 1,
                     color: 'silver',
                     backgroundColor: '#ffffff',
                     '&:hover': {
                        color: '#ffffff',
                        backgroundColor: 'silver'
                     }
                  }} variant="contained">Home</Button>
                  <Button component={Link} to={'/product'} sx={{
                     mr: 1,
                     color: 'silver',
                     backgroundColor: '#ffffff',
                     '&:hover': {
                        color: '#ffffff',
                        backgroundColor: 'silver'
                     }
                  }} variant="contained">Product</Button>
                  <Button component={Link} to={'/contact-page'} sx={{
                     mr: 1,
                     color: 'silver',
                     backgroundColor: '#ffffff',
                     '&:hover': {
                        color: '#ffffff',
                        backgroundColor: 'silver'
                     }
                  }} variant="contained">Contact page</Button>
               </Toolbar>
            </AppBar>
         </Box>
      </>
   )
}

export default Header;
