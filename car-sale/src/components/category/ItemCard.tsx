import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { CardLabel } from './CardLabel';
import { Link } from 'react-router-dom';

export default function ItemCard({
  cardName,
  cardPrice,
}: {
  cardName: string;
  cardPrice: string;
}) {
  return (
    <Link to="#" style={{ textDecoration: 'none', minWidth: 240 }}>
      <Card
        sx={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 5px 0px rgba(122,120,122,1)',
          borderRadius: 2,
          border: 1,
          borderColor: 'white',
        }}
      >
        <CardMedia
          sx={{ height: 140, borderBottom: 1, borderBottomColor: '#ccc' }}
          image="https://assets.v3.snowfirehub.com/images/120888/499_o_.he-best-image-format-for-the-web-3-quick-SEO-tips-"
          title="fetched image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', fontSize: '24px' }}
          >
            {cardName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <CardLabel label="C300" />
          <CardLabel label="C400" />
          <CardLabel label="C450" />
        </CardActions>
      </Card>
    </Link>
  );
}
