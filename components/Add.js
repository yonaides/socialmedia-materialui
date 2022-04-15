import { useState, forwardRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    background: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      heigth: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Add() {
  const clasess = useStyle();
  const [state, setOpenSnack] = useState({
    openSnack: false,
  });

  const [open, setOpen] = useState(false);
  const { openSnack } = state;

  const handleClick = () => {
    setOpenSnack({ openSnack: true });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack({ openSnack: false });
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={clasess.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container className={clasess.container}>
          <form className={clasess.form} autoComplete="off">
            <div className={clasess.item}>
              <TextField
                id="standar-basic"
                label="title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={clasess.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                row={4}
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={clasess.item}>
              <TextField select label="Visibility" value="public">
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="peivate">Private</MenuItem>
                <MenuItem value="unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={clasess.item}>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can comment?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="everybody"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="everybody"
                  control={<Radio size="small" />}
                  label="everybody"
                />
                <FormControlLabel
                  value="My friends"
                  control={<Radio size="small" />}
                  label="My friends"
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio size="small" />}
                  label="nobody"
                />
              </RadioGroup>
            </div>
            <div className={clasess.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => handleClick()}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Post created
        </Alert>
      </Snackbar>
    </>
  );
}
