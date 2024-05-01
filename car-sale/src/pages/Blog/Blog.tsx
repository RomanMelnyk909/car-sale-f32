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
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Search } from "@mui/icons-material/";
import { useState, useEffect } from "react";

import news1 from "../../assets/imgs/Blog/sidebar/news1.jpg";
import news2 from "../../assets/imgs/Blog/sidebar/news2.jpg";
import news3 from "../../assets/imgs/Blog/sidebar/news3.jpg";
import card1 from "../../assets/imgs/Blog/cards/1.jpg";
import card2 from "../../assets/imgs/Blog/cards/2.jpg";
import card3 from "../../assets/imgs/Blog/cards/3.jpg";
import Footer from "../../components/Footer/Footer";
import styles from "./styles.module.css";
import QueryLoader from "../../components/QueryLoader/QueryLoader";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"Titillium Web", sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Titillium Web", sans-serif',
          fontWeight: 600,
          fontSize: 18,
          fontStyle: "normal",
          color: "#282828",
        },
        h1: {
          fontWeight: 700,
          fontSize: 100,
          textTransform: "uppercase",
        },
        h4: {
          fontSize: 36,
        },
        h6: {
          fontSize: 26,
        },
        caption: {
          fontWeight: 400,
          fontSize: "16px",
          color: "#777",
          marginLeft: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Titillium Web", sans-serif',
          fontSize: 18,
          fontWeight: 500,
          marginLeft: 5,
          backgroundColor: "#E24648",
          "&:hover": {
            backgroundColor: "#cd4743",
          },
        },
      },
    },
  },
});

const mockData = [
  {
    id: 1,
    image: card1,
    dateTimePublish: "27 Apr, 2024",
    name: "Documents required for car rental",
    text: "Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit misnec est farmen.",
    isShow: true,
  },
  {
    id: 2,
    image: card2,
    dateTimePublish: "25 Apr, 2024",
    name: "Rental cost of sport and other cars",
    text: "Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit misnec est farmen.",
    isShow: true,
  },
  {
    id: 3,
    image: card3,
    dateTimePublish: "23 Apr, 2024",
    name: "Rental cars how to check driving fines?",
    text: "Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit misnec est farmen.",
    isShow: true,
  },
];

const ariaLabel = { "aria-label": "Search" };

interface Data {
  id: number;
  image: string;
  dateTimePublish: string;
  name: string;
  text: string;
  isShow: boolean;
}

function createData(
  id: number,
  image: string,
  dateTimePublish: string,
  name: string,
  text: string,
  isShow: boolean
): Data {
  return {
    id,
    image,
    dateTimePublish,
    name,
    text,
    isShow,
  };
}

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);

  const blogsList: string = "https://roman.itstep.click/api/Blogs/list";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(blogsList);

        if (!response.ok) {
          throw new Error("Network response was not success.");
        }

        setTimeout(async () => {
          const result = await response.json();

          setData(result);
          setLoading(false);

          console.log(result);
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const cards: Data[] = data.map((item) =>
    createData(
      item.id,
      item.image,
      item.dateTimePublish,
      item.name,
      item.text,
      item.isShow
    )
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Grid className={styles.banner} container>
            <Grid item xs={12} md={7}>
              <Typography variant="h1" align="center">
                Blog
              </Typography>
            </Grid>
            <Grid item display={{ xs: "none", md: "block" }} md={5}></Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box display='flex' justifyContent='space-between'>
              <Typography variant="h4">Latest News</Typography>
              <IconButton size="large"><AddCircleOutlineIcon fontSize='large'></AddCircleOutlineIcon></IconButton>
              </Box>
              <Divider sx={{mt: 2, mb: 5, borderBottomWidth: 2, background: 'black' }} variant="fullWidth"/>
              <QueryLoader fetching={loading}>
                {/* {cards.map((card) => {
                  return (
                    <Card sx={{ maxWidth: "100%", mb: 4 }} key={card.id}>
                      <Box style={{ position: "relative", overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          image={card.image}
                          alt="car"
                          className={styles.zoomImg}
                        />
                      </Box>
                      <CardContent>
                        <Typography variant="caption">
                          {card.dateTimePublish}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          m="10px 0 15px"
                        >
                          {card.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {card.text}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ pb: 4 }}>
                        <Button variant="contained" size="large">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })} */}
                {mockData.map((card) => {
                  return (
                    <Card sx={{ maxWidth: "100%", mb: 4 }} key={card.id}>
                      <Box style={{ position: "relative", overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          image={card.image}
                          alt="car"
                          className={styles.zoomImg}
                        />
                      </Box>
                      <CardContent>
                        <Typography variant="caption">
                          {card.dateTimePublish}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          m="10px 0 15px"
                        >
                          {card.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {card.text}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ pb: 4 }}>
                        <Button variant="contained" size="large">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </QueryLoader>
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
                <Typography variant="h6" mb={2}>
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
                <Typography variant="h6" mb={2}>
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
      </ThemeProvider>
      <Footer />
    </>
  );
}
