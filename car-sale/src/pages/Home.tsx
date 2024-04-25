import { Box } from "@mui/material"
import CategoryTabs from "../components/category/categoryTab"
import { CategoryBox } from "../components/category/categoryBox"

export const Home = () => {
    return <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <h1>This is home page</h1>
    <CategoryTabs />
    <CategoryBox categoryName='ALL'/>
    <CategoryBox categoryName='ECU TUNING'/>
    <CategoryBox categoryName='CODING'/>
    <CategoryBox categoryName='ELECTRONICS'/>
    <CategoryBox categoryName='EXTERIORS'/>
    <CategoryBox categoryName='INTERIORS'/>
    </Box>
}