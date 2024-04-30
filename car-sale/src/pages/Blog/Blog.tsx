import {
  Box,
  IconButton,
  Container,
  Typography,
  Input,
  Link,
  Grid,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@mui/material";

import { Search } from "@mui/icons-material/";

import banner from "../../assets/imgs/Blog/banner.jpg";
import news1 from "../../assets/imgs/Blog/sidebar/news1.jpg";
import news2 from "../../assets/imgs/Blog/sidebar/news2.jpg";
import news3 from "../../assets/imgs/Blog/sidebar/news3.jpg";
import card1 from "../../assets/imgs/Blog/cards/1.jpg";
import card2 from "../../assets/imgs/Blog/cards/2.jpg";
import card3 from "../../assets/imgs/Blog/cards/3.jpg";
import "../../App.css"

const ariaLabel = { "aria-label": "Search" };

export default function Blog() {
  return (
      <Container maxWidth="lg" sx={{ mt: 2, color: "#282828" }}>
        <Grid
          container
          bgcolor="#e7eded"
          alignItems="center"
          sx={{ height: "30vh", borderRadius: "5px" }}
          mb={5}
        >
          <Grid item xs={12} md={7} textAlign="center">
            <Typography variant="h1" textTransform="uppercase" fontWeight="600">
              Blog
            </Typography>
          </Grid>
          <Grid
            item
            display={{ xs: "none", md: "block" }}
            md={5}
            sx={{
              backgroundImage: `url(${banner})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "30%",
              height: "30vh",
              position: "relative",
              borderRadius: "5px",
            }}
          ></Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card sx={{ maxWidth: "100%", mb: 4 }}>
              <Box style={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={card1}
                  alt="car"
                  sx={{
                    transition: "transform .5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Box>
              <CardContent>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    mr: "10px",
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  Rent A Car,
                </Link>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    cursor: "pointer",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "inherit",
                    },
                  }}
                >
                  27 Apr, 2024
                </Link>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  m="15px 0"
                >
                  Documents required for car rental
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum potenti fringilla pretium ipsum non blandit
                  vivamus eget nisi non mi iaculis iaculis imperie quiseros
                  sevin elentesque habitant morbi tristique senectus et netus et
                  malesuada the fames ac turpis enesta mauris suscipit mis nec
                  est farmen.
                </Typography>
              </CardContent>
              <CardActions sx={{ pb: 4 }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    ml: 1,
                    backgroundColor: "#E24648",
                    "&:hover": {
                      backgroundColor: "#cd4743",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: "100%", mb: 4 }}>
              <Box style={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={card2}
                  alt="car"
                  sx={{
                    transition: "transform .5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Box>
              <CardContent>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    mr: "10px",
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  Cars,
                </Link>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    cursor: "pointer",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "inherit",
                    },
                  }}
                >
                  25 Apr, 2024
                </Link>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  m="15px 0"
                >
                  Rental cost of sport and other cars
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum potenti fringilla pretium ipsum non blandit
                  vivamus eget nisi non mi iaculis iaculis imperie quiseros
                  sevin elentesque habitant morbi tristique senectus et netus et
                  malesuada the fames ac turpis enesta mauris suscipit mis nec
                  est farmen.
                </Typography>
              </CardContent>
              <CardActions sx={{ pb: 4 }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    ml: 1,
                    backgroundColor: "#E24648",
                    "&:hover": {
                      backgroundColor: "#cd4743",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: "100%", mb: 4 }}>
              <Box style={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={card3}
                  alt="car"
                  sx={{
                    transition: "transform .5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Box>
              <CardContent>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    mr: "10px",
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  Battery,
                </Link>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    cursor: "pointer",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "inherit",
                    },
                  }}
                >
                  23 Apr, 2024
                </Link>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  m="15px 0"
                >
                  Rental cars how to check driving fines?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum potenti fringilla pretium ipsum non blandit
                  vivamus eget nisi non mi iaculis iaculis imperie quiseros
                  sevin elentesque habitant morbi tristique senectus et netus et
                  malesuada the fames ac turpis enesta mauris suscipit mis nec
                  est farmen.
                </Typography>
              </CardContent>
              <CardActions sx={{ pb: 4 }}>
                <Button
                  variant="contained"
                  size="medium"
                  color="warning"
                  sx={{
                    ml: 1,
                    backgroundColor: "#E24648",
                    "&:hover": {
                      backgroundColor: "#cd4743",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{ borderRadius: "5px" }}
              bgcolor="#FCFCFC"
              p={2}
              border="1px solid #E0E0E0"
              mb={2}
              display="flex"
            >
              <Input
                placeholder="Type here"
                inputProps={ariaLabel}
                color="warning"
                fullWidth
              />
              <IconButton
                size="large"
                sx={{
                  backgroundColor: "#fff",
                  color: "#999",
                  maxWidth: "41px",
                  margin: "0px 1px",
                  minWidth: "41px",
                }}
              >
                <Search />
              </IconButton>
            </Box>
            <Box
              sx={{ borderRadius: "5px" }}
              bgcolor="#FCFCFC"
              p={2}
              border="1px solid #E0E0E0"
              mb={2}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Recent Posts
              </Typography>
              <Box display="flex" mb={2}>
                <Box>
                  <img
                    src={news1}
                    width="130px"
                    height="auto"
                    alt="news"
                    style={{
                      borderRadius: "5px",
                      marginRight: "5px",
                    }}
                  />
                </Box>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  How to Rent a Car at the Airport Terminal?
                </Link>
              </Box>
              <Box display="flex" mb={2}>
                <Box>
                  <img
                    src={news2}
                    width="130px"
                    height="auto"
                    alt="news"
                    style={{
                      borderRadius: "5px",
                      marginRight: "5px",
                    }}
                  />
                </Box>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  Penalties for violating the rules is rental cars
                </Link>
              </Box>
              <Box display="flex">
                <Box>
                  <img
                    src={news3}
                    width="130px"
                    height="auto"
                    alt="news"
                    style={{
                      borderRadius: "5px",
                      marginRight: "5px",
                    }}
                  />
                </Box>
                <Link
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  How to check a car before renting?
                </Link>
              </Box>
            </Box>
            <Box
              sx={{ borderRadius: "5px" }}
              bgcolor="#FCFCFC"
              p={2}
              border="1px solid #E0E0E0"
              mb={2}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Archives
              </Typography>
              <Box display="flex" flexDirection="column">
                <Link
                  mb={2}
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  April 2024
                </Link>
                <Link
                  mb={2}
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  March 2024
                </Link>
                <Link
                  mb={2}
                  variant="body2"
                  overflow="hidden"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    transition: "all .2s ease-in",
                    "&:hover": {
                      color: "#E24648",
                    },
                  }}
                >
                  February 2024
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
  );
}
