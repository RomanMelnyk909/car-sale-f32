import { Box } from '@mui/material';
import CategoryTabs from '../../components/category/categoryTab';
import { CategoryBox } from '../../components/category/CategoryBox';
import { useEffect, useState } from 'react';
import { categoriesList } from '../../constants/crudPath';
import QueryLoader from '../../components/QueryLoader/QueryLoader';

export interface Categories {
  id: number;
  title: string;
  urlSlug: string;
  priority: number;
  image: string;
}
type CategoriesArr = Categories[];

export const Categories = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [categories, setCategories] = useState<undefined | CategoriesArr>(
    undefined
  );

  const fetchData = async () => {
    try {
      const response = await fetch(categoriesList);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const result = await response.json();
      console.log(result);
      setCategories(result);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    const fetchCategoriesAndListenForChanges = async () => {
      setIsFetching(true);
      await fetchData();

      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(categoriesList);
          if (!response.ok) {
            throw new Error('Network request failed');
          }
          const result = await response.json();
          console.log(result);
          setCategories(result);
        } catch (error) {
          console.log(error);
        }
      }, 5000);
      return () => clearInterval(intervalId);
    };

    fetchCategoriesAndListenForChanges();
  }, [categoriesList]);

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
        {categories?.map((cat, index) => (
          <CategoryBox
            key={cat.id}
            categoryName={cat.title}
            categoryId={cat.id}
          />
        ))}
      </Box>
    </QueryLoader>
  );
};

export default Categories;
