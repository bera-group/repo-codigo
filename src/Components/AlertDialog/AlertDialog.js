import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = (props) => {
  const {
    open,
    handleClose,
    title,
    description,
    continueAction,
    onlyMessage,
    children
  } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {description}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        {onlyMessage ? (
          <Button onClick={handleClose} color='primary' autoFocus>
            ACEPTAR
          </Button>
        ) : (
          <div>
            <Button onClick={handleClose} color='primary' autoFocus>
              CANCELAR
            </Button>
            <Button onClick={continueAction} color='primary'>
              CONTINUAR
            </Button>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  continueAction: PropTypes.func
};

export default AlertDialog;
