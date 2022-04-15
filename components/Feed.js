import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Post from "./Post";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export default function Feed() {
  const clasess = useStyle();

  return (
    <Container className={clasess.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}
