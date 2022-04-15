import { createTheme } from "@mui/material/styles";
import {indigo} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    mode: "light",
  },
});

export default theme;
