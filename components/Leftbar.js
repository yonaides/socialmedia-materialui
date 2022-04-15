import dynamic from "next/dynamic";
import NextLink from "next/link";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import {
  Bookmark,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  List,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    [theme.breakpoints.up("sm")]: {
    },
  },
}));

function Leftbar() {
  const clasess = useStyle();

  return (
    <Container className={clasess.container}>
      <div className={clasess.item}>
        <NextLink href="/" className={clasess.link} passHref>
            <Home className={clasess.icon} />          
        </NextLink>
        <Typography className={clasess.text}>
          <NextLink href="/">
          Homepage
          </NextLink>
        </Typography>
      </div>
      <div className={clasess.item}>
        <NextLink href="/friend" className={clasess.link} passHref>
            <Person className={clasess.icon} />
        </NextLink>
        <Typography className={clasess.text}>
          <NextLink href="/friend" passHref>
            Friends
          </NextLink>
        </Typography>
      </div>
      <div className={clasess.item}>
        <List className={clasess.icon} />
        <Typography className={clasess.text}> List</Typography>
      </div>
      <div className={clasess.item}>
        <PhotoCamera className={clasess.icon} />
        <Typography className={clasess.text}> Camera</Typography>
      </div>
      <div className={clasess.item}>
        <PlayCircleOutline className={clasess.icon} />
        <Typography className={clasess.text}> Videos</Typography>
      </div>
      <div className={clasess.item}>
        <TabletMac className={clasess.icon} />
        <Typography className={clasess.text}> Apps</Typography>
      </div>
      <div className={clasess.item}>
        <Bookmark className={clasess.icon} />
        <Typography className={clasess.text}> Collection</Typography>
      </div>
      <div className={clasess.item}>
        <Storefront className={clasess.icon} />
        <Typography className={clasess.text}> Market Place</Typography>
      </div>
      <div className={clasess.item}>
        <Settings className={clasess.icon} />
        <Typography className={clasess.text}> Setting</Typography>
      </div>
      <div className={clasess.item}>
        <ExitToApp className={clasess.icon} />
        <Typography className={clasess.text}> Logout</Typography>
      </div>
    </Container>
  );
}

export default dynamic(() => Promise.resolve(Leftbar), { ssr: false });
