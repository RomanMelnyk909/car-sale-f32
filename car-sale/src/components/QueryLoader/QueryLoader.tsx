import {Box, CircularProgress} from '@mui/material'

export default function QueryLoader({children, fetching}) {
   if (fetching)
      return (
         <Box sx={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress color='warning'/>
         </Box>
      )

   return <Box>{children}</Box>
}
