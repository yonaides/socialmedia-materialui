import { useState } from "react";
import dynamic from "next/dynamic";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { alpha, Avatar, Badge, InputBase, Typography } from "@mui/material";
import { Cancel, Notifications, Search } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    width: '100%'
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const clasess = useStyle({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={clasess.toolbar}>
        <Typography variant="h6" className={clasess.logoLg}>
          Lama dev
        </Typography>
        <Typography variant="h6" className={clasess.logoSm}>
          Lama
        </Typography>
        <div className={clasess.search}>
          <Search />
          <InputBase placeholder="Search..." className={clasess.input} />
          <Cancel className={clasess.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={clasess.icons}>
          <Search
            className={clasess.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge color="secondary" badgeContent={4} className={clasess.badge}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={4} className={clasess.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/images/profile.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
