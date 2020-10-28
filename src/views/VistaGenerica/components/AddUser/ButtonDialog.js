import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Fab, Grid } from "@material-ui/core";
//Dialog
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PopupModel from "./PopupModel";
import "./styles.css";
import Tooltip from "@material-ui/core/Tooltip";
//import { AuthContext } from "../../../../context/AuthContext";
import { teal, red } from "@material-ui/core/colors";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import { AddCircleOutline, SettingsInputSvideo } from "@material-ui/icons";
import { SNACKBAR_SEVERITIES } from "../../../../common/values";
import emailjs from "emailjs-com";
import CustomSnackbar from "../../../../Components/CustomSnackbar/CustomSnackbar";
//import { signUpRequest, verifyEmail } from "../../../../api/server";
import { getStringWithCap } from "../../../../common/utils";

const SaveButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    "&:hover": {
      backgroundColor: teal[700],
    },
  },
}))(Fab);

const CancelButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Fab);

const myStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  dialogPaper: {
    width: "75%",
    maxHeight: "80%",
    backgroundColor: "#e0e0e0",
  },
  text: {
    fontWeight: "bold",
    color: "gray",
  },
  bgtext: {
    backgroundColor: "white",
    fontWeight: "bold",
    color: "gray",
  },
  button: {
    margin: "28px 0 20px 0",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  text2: {
    color: "gray",
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

const SNACKBAR_MESSAGES = {
  SUCCESS_SIGNUP:
    "El usuario fue creado con éxito. Un mensaje con su información general y contraseña fueron enviados a su correo.",
  API_ERROR:
    "Error al crear usuario. Verifique su conexión y vuelva a intentarlo.",
  ERR_EMAIL_FORMAT:
    "El correo ingresado tiene un formato inválido. Verifíquelo para continuar.",
  EMAIL_EXIST: "El email que intenta ingresar ya existe.",
  ERR_OTHER_FIELDS: (fields) => {
    return (
      "Hay errores en el(los) campo(s) " +
      fields.join(", ") +
      ". Por favor, llenar estos campos."
    );
  },
};

const CustomizedDialogs = (props) => {
  const classes = myStyle();

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [contra, setContra] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [grupo, setGrupo] = useState(null);
  const [dir, setDir] = useState(null);
  //const { authState } = useContext(AuthContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(
    SNACKBAR_MESSAGES.INVALID_ARGUMENTS
  );
  const [snackbarSeverity, setSnackbarSeverity] = useState(
    SNACKBAR_SEVERITIES.INFO
  );

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleOpenSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  function obtenerDatos(email, id, nombre, apellido, contra, tipo, grupo, dir) {
    setEmail(email);
    setId(id);
    setNombre(nombre);
    setApellido(apellido);
    setContra(contra);
    setTipo(tipo);
    setGrupo(grupo);
    setDir(dir);
  }

  // Al menos un número 0-9
  // Al menos una mayúscula
  // Al menos una minúscula
  // Al menos un carácter especial (.,*!?¿¡/#$%&)
  // Longitud mínima de 8 caracteres
  // No acepta espacios

  function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)) {
      return valor;
    } else {
      return null;
    }
  }

  function sendEmail(email, contra, nombre, grupo, evaluador) {
    var contact = {
      email: email,
      nombre: nombre,
      contra: contra,
      evaluador: evaluador,
      grupo: grupo,
    };
    emailjs.send(
      "default_service",
      "passwordsend",
      contact,
      "user_pFZKDimMumLtZ9S5PNTFN"
    );
  }
  function SignUpValidated(userInfo, evaluatorName) {
    /*
    signUpRequest(userInfo)
      .then((res) => {
        
      })
      .catch((err) => {
        
      });
      */
  }
  function signUpHandler() {
    //const evaluatorName = `${authState.name} ${authState.lastname}`;
    const userInfo = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      identificacion: id,
      grupo: grupo,
      tipo: tipo,
      direccion: dir,
      contra: contra,
      //evaluador: authState.id,
      idiomas: [],
      tecnologias: [],
      herramientas: [],
      experiencia: "",
      certificaciones: [],
      aspsalarial: "",
    };

    const errorsArray = [];
    for (const prop in userInfo) {
      if (
        prop !== "contra" &&
        prop !== "evaluador" &&
        prop != "aspsalarial" &&
        prop != "experiencia"
      ) {
        if (!userInfo[prop]) {
          errorsArray.push(getStringWithCap(prop));
        }
      }
    }

    if (errorsArray.length > 0) {
      handleOpenSnackbar(
        SNACKBAR_SEVERITIES.WARNING,
        SNACKBAR_MESSAGES.ERR_OTHER_FIELDS(errorsArray)
      );
    } else {
      if (validarEmail(email)) {
        /*
        verifyEmail(email)
          .then((res) => {
            
          })
          .catch((err) => {
            console.log(err);
          });
          */
      } else {
        handleOpenSnackbar(
          SNACKBAR_SEVERITIES.WARNING,
          SNACKBAR_MESSAGES.ERR_EMAIL_FORMAT
        );
      }
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    signUpHandler();
  };

  return (
    <div className="plus-btn">
      <Grid container spacing={0} align="center" justify="center">
        <Tooltip title="Crear nuevo usuario">
          <Fab
            variant="extended"
            size="large"
            aria-label="add"
            className={classes.button}
            onClick={handleClickOpen}
          >
            <AddCircleOutline className={classes.extendedIcon} />
            Crear usuario
          </Fab>
        </Tooltip>
      </Grid>

      <Dialog
        classes={{ paper: classes.dialogPaper }}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          container
          spacing={0}
          align="center"
          justify="center"
          className={classes.text}
          onClose={handleClose}
        >
          <h4 className={classes.text2}> Crear usuario</h4>
        </DialogTitle>
        <DialogContent dividers>
          <PopupModel obtenerDatos={obtenerDatos} groups={props.groups} />
        </DialogContent>
        <DialogActions>
          <CancelButton
            variant="extended"
            size="small"
            aria-label="save"
            onClick={handleClose}
          >
            <CancelIcon className={classes.extendedIcon} />
            Cancelar
          </CancelButton>
          <SaveButton
            variant="extended"
            size="small"
            aria-label="save"
            onClick={handleCreate}
          >
            <SaveIcon className={classes.extendedIcon} />
            Guardar
          </SaveButton>
        </DialogActions>
      </Dialog>
      <CustomSnackbar
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        severity={snackbarSeverity}
        duration={4000}
        message={snackbarMessage}
      />
    </div>
  );
};

export default CustomizedDialogs;
