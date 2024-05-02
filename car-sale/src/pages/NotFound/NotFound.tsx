import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import background from "../../assets/imgs/NotFound/background.jpg";

export default function NotFound() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <Typography variant="h1">404</Typography>
        <Typography variant="body1">
          The page you were looking for doesn't exist.
        </Typography>
        <Typography variant="body2">
          You may have mistyped the address or the page may have moved.
        </Typography>
        <Box m={3}>
          <Button variant="contained" sx={{ mr: 2 }}>
            Go to home
          </Button>
          <Button variant="outlined">Previous page</Button>
        </Box>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}
