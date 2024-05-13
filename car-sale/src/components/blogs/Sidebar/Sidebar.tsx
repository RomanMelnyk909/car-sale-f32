import {
  Box,
  IconButton,
  Typography,
  Input,
  Link,
} from "@mui/material";
import { Search} from "@mui/icons-material/";

import news1 from "../../../assets/imgs/Blogs/sidebar/news1.jpg";
import news2 from "../../../assets/imgs/Blogs/sidebar/news2.jpg";
import news3 from "../../../assets/imgs/Blogs/sidebar/news3.jpg";

const ariaLabel = { "aria-label": "Search" };

const BlogsSidebar: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default BlogsSidebar;
