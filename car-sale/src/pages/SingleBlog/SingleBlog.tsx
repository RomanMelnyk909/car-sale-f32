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

import { get } from "lodash";

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

function SingleBlog() {
  const { slug } = useParams();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);

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
                    <Button variant="contained" size="large" sx={{ mr: 2 }}>
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
