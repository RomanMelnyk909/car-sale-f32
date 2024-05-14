import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getBlogBySlug } from "../../constants/crudPath";
import defaultImage from "../../assets/imgs/Blogs/cards/1.jpg";
import QueryLoader from "../../components/QueryLoader/QueryLoader";
import Oops from "../../components/blogs/Oops/Oops";

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
  id: number;
  name: string;
  text: string;
  image: string;
  slug: string;
  isShow: boolean;
  dateTimePublish: string;
}

function createData(
  id: number,
  name: string,
  text: string,
  image: string,
  slug: string,
  isShow: boolean,
  dateTimePublish: string
): Data {
  return {
    id,
    name,
    text,
    image,
    slug,
    isShow,
    dateTimePublish,
  };
}

function SingleBlog() {
  const { slug } = useParams();
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${getBlogBySlug}/${slug}`);

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
  }, [slug]);

  const blogData: Data | null = data
    ? createData(
        data.id,
        data.name,
        data.text,
        data.image,
        data.slug,
        data.isShow,
        data.dateTimePublish
      )
    : null;

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
                      {blogData?.name}
                    </Typography>
                    <Typography variant="caption" component="span" color="grey">
                      {blogData?.dateTimePublish}
                    </Typography>
                  </Box>
                  <Divider />
                  <Typography variant="body1" m={1}>
                    {blogData?.text}
                  </Typography>
                  <Box textAlign="right">
                    <Button variant="contained" size="large" sx={{mr: 2}}>
                      Edit
                    </Button>
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
