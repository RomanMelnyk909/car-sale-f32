import { Box, Grid} from "@mui/material"
import { Link } from "react-router-dom"

import Logo from "../../image/Footer/logo-footer.svg"

import Telegram from "../../image/Footer/Telegram-icon.svg"
import Facebook from "../../image/Footer/Facebook-icon.svg"
import Inst from "../../image/Footer/Inst-icon.svg"

import Phone from "../../image/Footer/phone-icon.svg"

import Mark from "../../image/Footer/map-marker-icon.svg"

const Footer = () => {

   return (
      <Box
         sx={{
            fontFamily:'"Titillium Web", sans-serif',
            padding:"0px 123px",
            'p':{
               fontSize:'clamp(11px,1.8vw,16px)'
            }
         }}
      >
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderTop="3px solid #E24648"
            padding='55px 0px 40px 0px'
         >

            <Grid container >
              <Grid 
                  item xs={12} 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding='15px'
                  >
                  <img src={Logo} alt="Main logo" />
                  <Box sx={{'a': {color: '#000', fontSize: '18px', padding: '0px 25px'}}}>
                     <Link to='/'>Services</Link>
                     <Link to='/'>Online Store</Link>
                     <Link to='/'>Partnership</Link>
                     <Link to='/'>Contact Us</Link>
                     <Link to='/'>Privacy Policy</Link>
                  </Box>
              </Grid>
              <Grid 
                  item xs={12}
                  display='flex' 
                  justifyContent='space-between' 
                  alignItems='center'
                  padding='15px'
               >
                  <Box sx={{'img': {padding: '0px 10px'}}} padding='0px 10px'>
                     <Link to='/'>
                        <img src={Facebook} alt="Facebook icon" />
                     </Link>
                     <Link to='/'>
                        <img src={Inst} alt="Instagram icon" />
                     </Link>
                     <Link to='/'>
                        <img src={Telegram} alt="Telegram icon" />
                     </Link>
                  </Box>

                  <Box display="flex">
                     <Box display='flex' alignItems="center" padding='0px 10px'>
                        <img src={Phone} alt="Phone icon" style={{paddingRight:'5px'}}/>
                        <p>+1 (647) 875 - 8785</p>
                     </Box>
                     <Box display='flex' alignItems="center" padding='0px 10px'>
                        <img src={Mark} alt="Mark icon" style={{paddingRight:'5px'}}/>
                        <Box>
                           <p>Unit 40, 101 Toro Rd</p>
                           <p>North York, ON,Canada, M3J2Z1</p>
                        </Box>
                     </Box>
                  </Box>
              </Grid>
            </Grid>
         </Box>
         <Box
            borderTop='1px solid #E0E0E0'
            color='#BDBDBD'
            padding="20px 0px"
         >
            <Box 
               display="flex"
               justifyContent="space-between"
               paddingBottom='7px'
               >
               <p>Copyright © 2021 MB House, Inc.</p>
               <p>WEB Design Toronto by Vestra Inet.</p>
            </Box>
            <p>Mercedes-Benz logo is a trademarks™ or registered® trademark of Daimler AG. Its use does not imply any affiliation with or endorsement by Daimler AG and Mercedes-Benz</p>
         </Box>
      </Box>
   )
}

export default Footer