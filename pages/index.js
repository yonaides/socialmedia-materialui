import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyle = makeStyles((theme) => ({
  container:{
    paddingTop: theme.spacing(10),
  }
}));

export default function Home() {
  const clasess = useStyle();
  return <Container className={clasess.container}> Home page </Container>;
}
