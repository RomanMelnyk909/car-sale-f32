import { Box, Grid } from "@mui/material"
import ProductItem from "../../components/ProductItem"



type CarsList = {
   id: number
   name: string
}

const products: CarsList[] = [
   {
      id: 1,
      name: "A-class",
   },
   {
      id: 2,
      name: "AMG GT 4-Door",
   },
   {
      id: 3,
      name: "C-class",
   },
   {
      id: 4,
      name: "CLS",
   },
   {
      id: 5,
      name: "E-class",
   },
   {
      id: 6,
      name: "GLA",
   },
   {
      id: 7,
      name: "GLB",
   },
   {
      id: 8,
      name: "GLC",
   },
   {
      id: 9,
      name: "GLE",
   },
   {
      id: 10,
      name: "GLK",
   },
   {
      id: 11,
      name: "GLS",
   },
   {
      id: 12,
      name: "G-class",
   },
   {
      id: 13,
      name: "SL",
   },
   {
      id: 14,
      name: "SLK",
   },
   {
      id: 15,
      name: "S-class",
   },
   {
      id: 16,
      name: "CL",
   },
   {
      id: 17,
      name: "B-class",
   },
   {
      id: 18,
      name: "Sprinter",
   },
   {
      id: 19,
      name: "Metris",
   },
   {
      id: 20,
      name: "AMG GT",
   },
   {
      id: 21,
      name: "CLK",
   },
];



export const Product = () => {
   return (
      <Box padding='clamp(25px, 4vw, 120px)' display='flex' justifyContent="center">

         <Grid container spacing={6}>
            {products.map((product: CarsList) => (
               <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                  <ProductItem productName={product.name} />
               </Grid>
            ))}
         </Grid>

      </Box>
   )
}