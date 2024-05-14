import { Box } from "@mui/material"

const carsImage: { [key: string]: string } = {
   "A-class": "https://i.postimg.cc/PCsYzjCP/a-class-1.png",
   "AMG GT 4-Door": "https://i.postimg.cc/14dpX6P0/amg-gt-4-door.png",
   "C-class": "https://i.postimg.cc/5jyBfpcN/c-class.png",
   "CLS": "https://i.postimg.cc/mPYMm59V/cls841006.png",
   "E-class": "https://i.postimg.cc/47LpzHcg/e-class.png",
   "GLA": "https://i.postimg.cc/Th5crQtN/gla.png",
   "GLB": "https://i.postimg.cc/kDSxVG5k/glb848719.png",
   "GLC": "https://i.postimg.cc/pmRYMvR3/glc098144.png",
   "GLE": "https://i.postimg.cc/7CQgzT0y/gle-ml999598.png",
   "GLK": "https://i.postimg.cc/RNrLGf8S/glk395166.png",
   "GLS": "https://i.postimg.cc/477pQNQH/gls-gl.png",
   "G-class": "https://i.postimg.cc/8J2MKQZK/g-class112823.png",
   "SL": "https://i.postimg.cc/1VD6bCT9/sl078181.png",
   "SLK": "https://i.postimg.cc/68cV9PQq/slk-slc.png",
   "S-class": "https://i.postimg.cc/MczBNmbw/s-class.png",
   "CL": "https://i.postimg.cc/N2KmbG8r/cl833934.png",
   "B-class": "https://i.postimg.cc/GBpF9jBQ/b-class.png",
   "Sprinter": "https://i.postimg.cc/xcSLLQJq/sprinter.png",
   "Metris": "https://i.postimg.cc/KRnrWjSn/metris.png",
   "AMG GT": "https://i.postimg.cc/2VBnZ68s/amg-gt346578.png",
   "CLK": "https://i.postimg.cc/0M2pM0bn/clk893325.png",
};


const sx = {
   borderRadius: "12px",
   transition: '0.15s all linear',
   cursor: "pointer",
   marginBottom: "30px",

   "h2": {
      fontSize: "clamp(23px,4vw,27px)",
      fontFamily: "sans-serif",
      fontWeight: "400",
   },

   "img" :  {
      height: "200px",
      width: "100%", 
      objectFit: "contain"
   },

   "&:hover":{
      backgroundColor: "#e24648",
      color: "#fff",

      "div": {
         borderBottom: "1px solid #fff"
      }
   }
}


const ProductItem = ({ productName }: any) => {
   return (
      <Box textAlign="center" padding='10px 20px' sx={sx}>
         <Box borderBottom="1px solid #E0E0E0" paddingBottom="30px" marginBottom="7px" height="100%" width="100%">
            <img src={ carsImage[productName] } alt="Car image"/>
         </Box>  
         <h2 >{ productName }</h2>
      </Box>
   )
}

export default ProductItem