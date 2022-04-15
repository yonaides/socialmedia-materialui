import { makeStyles } from "@mui/styles";
import Feed from "../components/Feed";

const useStyle = makeStyles((theme) => ({
  container:{
    paddingTop: theme.spacing(10),
  }
}));

export default function Home() {
  const clasess = useStyle();
  return <Feed/>;
}
