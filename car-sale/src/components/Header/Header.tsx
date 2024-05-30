import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BLOGS, CATEGORIES, HOME, PRODUCT } from "../../constants/pathName";

const Header = () => {
  return (
    <>
      <Box display="flex" width="100%" maxWidth="lg" justifyContent="center">
        <AppBar
          position="static"
          sx={{ backgroundColor: "silver", }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button
              component={Link}
              to={HOME}
              sx={{
                mr: 1,
                color: "silver",
                backgroundColor: "#ffffff",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "silver",
                },
              }}
              variant="contained"
            >
              Home
            </Button>
            <Button
              component={Link}
              to={BLOGS}
              sx={{
                mr: 1,
                color: "silver",
                backgroundColor: "#ffffff",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "silver",
                },
              }}
              variant="contained"
            >
              Blogs
            </Button>
            <Button
              component={Link}
              to={CATEGORIES}
              sx={{
                mr: 1,
                color: "silver",
                backgroundColor: "#ffffff",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "silver",
                },
              }}
              variant="contained"
            >
              Categories
            </Button>
            <Button
              component={Link}
              to={PRODUCT}
              sx={{
                mr: 1,
                color: "silver",
                backgroundColor: "#ffffff",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "silver",
                },
              }}
              variant="contained"
            >
              Products
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
