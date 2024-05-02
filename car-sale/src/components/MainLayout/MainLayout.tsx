import { Box } from "@mui/material";
import Header from "../Header/Header.js";
import Footer from "../Footer/index.js";

const MainLayout = ({ children }) => {
    return (
        <Box sx={{ height: '100%' }}>
            <Header />
                <Box sx={{ height: '100%' }}>
                    { children }
                </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;
