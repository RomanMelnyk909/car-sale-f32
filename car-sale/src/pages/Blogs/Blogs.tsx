import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  IconButton,
  Container,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ErrorOutline, AddCircleOutline } from "@mui/icons-material/";

import styles from "./styles.module.css";
import defaultImage from "../../assets/imgs/Blogs/cards/1.jpg";
import QueryLoader from "../../components/QueryLoader/QueryLoader";
import { blogsList, addNewPost } from "../../constants/crudPath";
import BlogsCard from "../../components/blogs/Card";
import BlogsModal from "../../components/blogs/Modal";
import BlogsSidebar from "../../components/blogs/Sidebar";

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

  const handleAddPost = async (name: string, text: string) => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
  
    const newCardData = {
      id: uuidv4(),
      slug: name + "_" + text,
      image: defaultImage,
      dateTimePublish: `${day}.${month}.${year}`,
      name,
      text,
      isShow: true,
    };
  
    try {
      const response = await fetch(addNewPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCardData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add new post.");
      }
  
      setData((prevState) => [newCardData, ...prevState]);
      handleCloseModal();
    } catch (error) {
      console.error("Error:", error);
    }
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
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid key={card.id} item xs={12} md={6}>
                      <BlogsCard item={card} />
                    </Grid>
                  ))}
                </Grid>
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
              <BlogsSidebar />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Blogs;
