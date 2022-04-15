/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link:{
    marginRight:theme.spacing(2),
    color:"#555",
    fontSize:16
  }
}));

function Rightbar() {
  const clasess = useStyle();

  return (
    <Container className={clasess.container}>
      <Typography className={clasess.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={clasess.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList
        sx={{ width: 500, height: 450 }}
        style={{ marginBottom: 20 }}
        cols={3}
      >
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={clasess.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={clasess.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={clasess.link} variant="body2">
        Movies
      </Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" className={clasess.link} variant="body2">
        Games
      </Link>      
      <Link href="#" className={clasess.link} variant="body2">
        Nature
      </Link>
    </Container>
  );
}

export default dynamic(() => Promise.resolve(Rightbar), { ssr: false });
