import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material/";


function Oops() {
  return (
    <Box textAlign="center">
      <ErrorOutline sx={{ fontSize: "50px", color: "text.secondary" }} />
      <Typography variant="h6" color="text.secondary">
        Oops..!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Something went wrong. Please try again later.
      </Typography>
    </Box>
  );
}

export default Oops;
