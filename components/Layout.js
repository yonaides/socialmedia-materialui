import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Add from "./Add";

const useStyles = makeStyles((theme) => ({
  rigth: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Layout({ children }) {
  const clasess = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          {children}
        </Grid>
        <Grid item sm={3} className={clasess.rigth}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default dynamic(() => Promise.resolve(Layout), { ssr: false });