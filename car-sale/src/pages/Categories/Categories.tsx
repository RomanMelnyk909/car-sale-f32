import { Box } from '@mui/material';
import CategoryTabs from '../../components/category/CategoryTab';
import { CategoryBox } from '../../components/category/CategoryBox';
import { useEffect, useState } from 'react';
import { getCategoriesList } from '../../constants/crudPath';
import QueryLoader from '../../components/QueryLoader/QueryLoader';

export interface Categories {
  id: number
  title: string
  urlSlug: string
  priority: number
  image: string
}
type CategoriesArr = Categories[]

export const Categories = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [categories, setCategories] = useState<undefined | CategoriesArr>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getCategoriesList);
        if (!response.ok) {
          throw new Error('Network request failed');
        }
        const result = await response.json();
        console.log(result);

        setCategories(result);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <QueryLoader fetching={isFetching}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CategoryTabs categoryNames={categories} />
        {!isFetching &&
          categories?.map((cat) => (
            <CategoryBox key={cat?.id} categoryName={cat?.title} />
          ))}
      </Box>
    </QueryLoader>
  );
};

export default Categories;
