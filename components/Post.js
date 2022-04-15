import dynamic from "next/dynamic";
import { makeStyles } from "@mui/styles";
import { CardActionArea, CardActions, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyle = makeStyles((theme) => ({
    media:{
        height: 250
    },
    card:{
        marginBottom: theme.spacing(5),
        [theme.breakpoints.up("sm")]: {
          heigth: 150
        },
    }
}));

function Post() {
  const clasess = useStyle();

  return (
    <Card className={clasess.card}>
      <CardActionArea>
        <CardMedia className={clasess.media} image="/images/frutas.jpg" title="My post" />
        <CardContent>
          <Typography gutterBottom variant="h5"> My first post</Typography>
          <Typography variant="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary"> Share</Button>
      <Button size="small" color="primary"> Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default dynamic(() => Promise.resolve(Post), { ssr: false });