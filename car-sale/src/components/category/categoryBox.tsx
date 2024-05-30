import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

export const CategoryBox = ({ categoryName }: { categoryName: string }) => {
  return (
    <Box
      sx={{
        maxWidth: 'lg',
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
        <Link to='#top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: '#000'}}>
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
