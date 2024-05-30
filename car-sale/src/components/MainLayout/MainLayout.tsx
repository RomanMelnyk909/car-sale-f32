import { Box } from "@mui/material";
import Header from "../Header/Header.js";
import Footer from "../Footer/index.js";

const MainLayout = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100%" alignItems="center">
            <Header />
                <Box display="flex" flexDirection="column" flex="1 1 auto" maxWidth="lg" width="100%" marginY={7}>
                    { children }
                </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;
