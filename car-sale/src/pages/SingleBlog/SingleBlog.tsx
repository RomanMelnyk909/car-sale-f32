import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "lodash";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import QueryLoader from "../../components/QueryLoader";
import Oops from "../../components/blogs/Oops";
import SingleBlogModal from "../../components/SingleBlog/Modal";
import { getBlogBySlug, editBlog } from "../../constants/crudPath";
import defaultImage from "../../assets/imgs/Blogs/cards/1.jpg";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Titillium Web", sans-serif',
          fontWeight: 600,
          fontSize: 18,
          fontStyle: "normal",
          color: "#282828",
        },
        h4: {
          fontSize: 36,
        },
        h5: {
          fontSize: 30,
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
  id: number | string;
  name: string;
  text: string;
  image: string;
  slug: string;
  isShow: boolean;
  dateTimePublish: string;
}

function SingleBlog() {
  const { slug } = useParams();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(`${getBlogBySlug}/${slug}`);

        if (!response.ok) {
          throw new Error("Network response was not success.");
        }

        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }, 1000);
  }, [slug]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditBlog = async (name: string, text: string) => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    const editBlogData = {
      id: get(data, "id", "N/A"),
      slug: `${name}_${day}.${month}.${year}`,
      image: defaultImage,
      dateTimePublish: `${day}.${month}.${year}`,
      name,
      text,
      isShow: true,
    };

    try {
      const response = await fetch(editBlog, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editBlogData),
      });

      if (!response.ok) {
        throw new Error("Failed to edit blog.");
      }

      setData(editBlogData);
      handleCloseModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={defaultImage}
              alt="car"
              width="100%"
              height="auto"
              style={{ borderRadius: "5px" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <QueryLoader fetching={loading}>
              {data ? (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    m={1}
                  >
                    <Typography variant="h4" component="h4">
                      {get(data, "name", "N/A")}
                    </Typography>
                    <Typography variant="caption" component="span" color="grey">
                      {get(data, "dateTimePublish", "N/A")}
                    </Typography>
                  </Box>
                  <Divider />
                  <Typography variant="body1" m={1}>
                    {get(data, "text", "N/A")}
                  </Typography>
                  <Box textAlign="right">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ mr: 2 }}
                      onClick={handleOpenModal}
                    >
                      Edit
                    </Button>
                    <SingleBlogModal
                      open={openModal}
                      onClose={handleCloseModal}
                      onAddPost={handleEditBlog}
                    />
                    <Button variant="contained" size="large">
                      Delete
                    </Button>
                  </Box>
                </>
              ) : (
                <Oops />
              )}
            </QueryLoader>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default SingleBlog;
