import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@mui/material";

import styles from "../../../pages/Blogs/styles.module.css";
import defaultImage from "../../../assets/imgs/Blogs/cards/1.jpg";
import { singleBlogPathCreator } from "../../../constants/pathName";

interface Data {
  id: string;
  slug: string;
  image: string;
  dateTimePublish: string;
  name: string;
  text: string;
  isShow: boolean;
}

interface BlogsCardProps {
  item: Data;
}

function BlogsCard({ item }: Readonly<BlogsCardProps>) {
  const navigator = useNavigate();

  return (
    <Card
      sx={{ maxWidth: "100%", mb: 4 }}
      key={item.id}
      className={styles.card}
    >
      <Box position="relative" overflow="hidden" height="450px">
        <CardMedia
          component="img"
          image={defaultImage}
          alt="car"
          className={styles.centeredImage}
        />
      </Box>
      <CardContent>
        <Typography variant="caption">{item.dateTimePublish}</Typography>
        <Typography gutterBottom variant="h4" component="div" m="10px 0 15px">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {item.text}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigator(singleBlogPathCreator(item?.slug));
            window.scrollTo(0, 0);
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogsCard;
