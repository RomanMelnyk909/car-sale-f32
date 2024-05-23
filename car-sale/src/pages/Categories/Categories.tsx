import { Box } from '@mui/material';
import CategoryTabs from '../../components/category/categoryTab';
import { CategoryBox } from '../../components/category/categoryBox';
import CategoriesTable from '../../components/category/Table';

export const Categories = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CategoryTabs />
      <CategoryBox categoryName="ALL" />
      <CategoryBox categoryName="ECU TUNING" />
      <CategoryBox categoryName="CODING" />
      <CategoryBox categoryName="ELECTRONICS" />
      <CategoryBox categoryName="EXTERIORS" />
      <CategoryBox categoryName="INTERIORS" />
      <CategoriesTable />
    </Box>
  );
};

export default Categories;
