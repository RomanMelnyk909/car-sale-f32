import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemCard from './ItemCard';
import { deleteCategory } from '../../constants/crudPath';

export const CategoryBox = ({
  categoryName,
  categoryId,
}: {
  categoryName: string;
  categoryId: number;
}) => {
  const onDeleteCategoryHandler = async (id: number) => {
    const url = deleteCategory(id);
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete category with id ${id}`);
      }

      console.log(`Category with id ${id} deleted successfully`);
      // Optionally, handle any additional logic here, e.g., updating state/UI
    } catch (error) {
      console.error(`Error deleting category with id ${id}:`, error);
      // Optionally, handle error in the UI
    }
  };
  return (
    <Box
      sx={{
        maxWidth: '1680px',
        marginTop: 2,
        padding: 3,
        border: 1.5,
        borderRadius: 2,
        borderColor: '#ddd',
        backgroundColor: '#FCFCFC',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              borderLeft: 6,
              borderColor: 'red',
              borderRadius: 1,
              paddingLeft: 1,
              fontSize: '24px',
            }}
          >
            {categoryName}
          </Typography>
          <Button
          color='error'
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => onDeleteCategoryHandler(categoryId)}
            sx={{
              ml: '4px'
            }}
          >
            Delete
          </Button>
        </Box>

        <Link
          to="#top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <Typography variant="h6" component="h6" sx={{ fontSize: '14px' }}>
            View All Products{' '}
            <Box component="span" sx={{ color: 'red' }}>
              {'>'}
              {'>'}
            </Box>
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          padding: 2,
          maxWidth: '1280px',
          display: 'flex',
          gap: 2,
          overflow: 'auto',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
        <ItemCard cardName="M276 ECU Tune" cardPrice="Start at C$ 1,425" />
      </Box>
    </Box>
  );
};
