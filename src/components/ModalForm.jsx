import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import UsersContext from '../app/middlewares/useContext';
import { Close } from "@material-ui/icons";
import { STAGE } from "../helpers/utils/constants";
const uuidv4 = require('uuid/v4');

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalForm() {
  const [open, setOpen] = React.useState(true);
  const user = React.useContext(UsersContext);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Close onClick={() => { handleClose() }} />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ներկա փուլ {user.stageNumber[0]}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            ներկա վիճակ  {user.stageNumber}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            հաջորդ փուլ {Number(user.stageNumber[0]) + 1}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Ընտրել հաջորդ փուլի վիճակը
           </DialogContentText>
          {STAGE.map(stage => {
            return <DialogContentText key={uuidv4()} id="alert-dialog-slide-description">
              <label> {stage.label}</label>
              <label> {stage.value}</label>

            </DialogContentText>
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Անառդյունք
          </Button>
          <Button onClick={handleClose} color="primary">
            Հաստատել
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
