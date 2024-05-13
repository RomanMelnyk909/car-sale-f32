import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  IconButton,
  Container,
  Typography,
  Input,
  Link,
  Grid,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Search, ErrorOutline, AddCircleOutline } from "@mui/icons-material/";

import styles from "./styles.module.css";
import news1 from "../../assets/imgs/Blogs/sidebar/news1.jpg";
import news2 from "../../assets/imgs/Blogs/sidebar/news2.jpg";
import news3 from "../../assets/imgs/Blogs/sidebar/news3.jpg";
import defaultImage from "../../assets/imgs/Blogs/cards/1.jpg";
import QueryLoader from "../../components/QueryLoader/QueryLoader";
import { blogsList } from "../../constants/crudPath";
import BlogsCard from "../../components/blogs/Card";
import BlogsModal from "../../components/blogs/Modal";

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
          backgroundColor: "#E24648",
          "&:hover": {
            backgroundColor: "#cd4743",
          },
        },
      },
    },
  },
});

const ariaLabel = { "aria-label": "Search" };

interface Data {
  id: string;
  slug: string;
  image: string;
  dateTimePublish: string;
  name: string;
  text: string;
  isShow: boolean;
}

function createData(
  id: string,
  slug: string,
  image: string,
  dateTimePublish: string,
  name: string,
  text: string,
  isShow: boolean
): Data {
  return {
    id,
    slug,
    image,
    dateTimePublish,
    name,
    text,
    isShow,
  };
}

function Blogs() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const [openModal, setOpenModal] = useState(false);

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
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cards: Data[] = data.map((item) =>
    createData(
      item.id,
      item.slug,
      item.image,
      item.dateTimePublish,
      item.name,
      item.text,
      item.isShow
    )
  );

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddPost = (name: string, text: string) => {
    const newCardData = {
      id: uuidv4(),
      slug: name + '_' + text,
      image: defaultImage,
      dateTimePublish: new Date().toDateString(),
      name,
      text,
      isShow: true,
    };
    setData((prevState) => [...prevState, newCardData]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Grid className={styles.banner} container>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" align="center">
              Blogs
            </Typography>
          </Grid>
          <Grid item display={{ xs: "none", md: "block" }} md={5}></Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4">Latest News</Typography>
              <IconButton size="large" onClick={handleOpenModal}>
                <AddCircleOutline fontSize="large" sx={{ color: "#282828" }} />
              </IconButton>
              <BlogsModal
                open={openModal}
                onClose={handleCloseModal}
                onAddPost={handleAddPost}
              />
            </Box>
            <Divider
              sx={{ mt: 2, mb: 5, borderBottomWidth: 2, background: "black" }}
              variant="fullWidth"
            />
            <QueryLoader fetching={loading}>
              {data.length > 0 ? (
                cards.map((card) => {
                  return <BlogsCard key={card.id} item={card} />;
                })
              ) : (
                <Box textAlign="center">
                  <ErrorOutline
                    sx={{ fontSize: "50px", color: "text.secondary" }}
                  />
                  <Typography variant="h6" color="text.secondary">
                    Oops..!
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Something went wrong. Please try again later.
                  </Typography>
                </Box>
              )}
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
  );
}

export default Blogs;
