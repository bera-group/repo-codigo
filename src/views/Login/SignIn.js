/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
//import logo from "./img/logo-login.png";
import "./styles.css";
//import { AuthContext } from "../../context/AuthContext";
import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
//import { signInRequest } from "../../api/server";
import CustomSnackbar from "../../Components/CustomSnackbar/CustomSnackbar";
import { SNACKBAR_SEVERITIES } from "../../common/values";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
//import { useHistory } from "react-router";
//import decodeToken from "../../token-Implementation/index";
//import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";
const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#DBDBDB",
  },
  barColorPrimary: {
    backgroundColor: "#2A93D5",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    font: "bold",
    height: "50px",
    width: "100%",
    position: "relative",
    marginTop: "50px",
    color: "white",

    backgroundColor: "#2a93d5",
    "&:hover": {
      backgroundColor: "#2ad5c7",
    },
    "&:active": {
      backgroundColor: "#2ad5c7",
    },
    "&:focus": {
      backgroundColor: "#2ad5c7",
    },

    transition: "background 1s",
  },
  loginwrapper: {
    backgroundColor: "#fff",
    height: "450px",

    [theme.breakpoints.up("xs")]: {
      Width: "400px",
    },

    margin: "8%",
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    borderRadius: "10px",
    box: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  loginform: {
    margin: "10%",
    width: "80%",
    heigth: "80%",
    alignSelf: "center",
    justifySelf: "center",
  },
  textoambiente: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "12px",
  },
}));

const SNACKBAR_MESSAGES = {
  INVALID_ARGUMENTS:
    "El correo ingresado tiene un formato inválido, verifíquelo para continuar.",
  API_ERROR:
    "Error al iniciar sesión. Revise su conexión y vuelva a intentarlo.",
  SUCC_CONNECTION: "Conexión exitosa.",
  USER_NOT_FOUND: "El correo ingresado no corresponde con ningún usuario.",
  WRONG_PASSWORD: "Su contraseña es incorrecta.",
};

function SignIn() {
  //const { authDispatch } = useContext(AuthContext);
  //const history = useHistory();
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


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inProgress, setInProgress] = useState(false);

  const login = () => {
    handleOpenSnackbar(
      SNACKBAR_SEVERITIES.WARNING,
      SNACKBAR_MESSAGES.INVALID_ARGUMENTS
    );
    if (validateForm()) {
      setInProgress(true);
      /*
      signInRequest(email, password)
        .then((res) => {
          
        })
        .catch((error) => {
          
        });
        */

    } else {
      setInProgress(false);
      
    }
  };

  function validateForm() {
    const emaila = email;
    const passworda = password;
    let errorsa = {};
    var validate = true;
    //valido que el campo email no este vacio
    if (emaila === "") {
      validate = false;
      errorsa["email"] = "*Ingrese un email";
    }
    //valido que el campo email sea valido
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaila)) {
      validate = true;
    } else {
      validate = false;
    }
    errorsa["email"] = "*Ingrese un email valido";
    //valido que el campo contraseña no este vacio
    if (passworda === "") {
      validate = false;
      errorsa["password"] = "*Ingrese su contraseña";
    }
    //cambio el estado de los errores
    return validate;
  }
  const classes = useStyles();
  return (
    <div className="login-container">
      <Fade in={true} timeout={{ enter: "2000ms" }}>
        <Grid Container spacing={3} className={classes.loginwrapper}>
          <CssBaseline />

          <Grid item xs={12} className={classes.loginform}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                margin: "0px 0 15px 0",
              }}
            >
              {/* Inserte logo
              <img src={logo} alt={"logo"} className="img-login" />
              */}
              
            </div>
            <form>
              <TextField
                type="email"
                name="email"
                placeholder="Email..."
                className="input"
                size="medium"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                className="login-input"
                type="password"
                name="password"
                placeholder="Contraseña..."
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="btn-submit">
                <Button
                  className={classes.button}
                  type="button"
                  value="INICIAR SESIÓN"
                  onClick={(e) => login()}
                >
                  INICIAR SESIÓN
                </Button>
              </div>
            </form>

            {inProgress ? (
              <ColorLinearProgress
                style={{
                  marginTop: 100,
                }}
              />
            ) : (
              <p className="container-footer">
                <p className={classes.textoambiente}>Vista de inicio de sesión</p>
                <p>2.0.0</p>
              </p>
            )}
          </Grid>

          <CustomSnackbar
            open={openSnackbar}
            handleClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            duration={3000}
            message={snackbarMessage}
          />
        </Grid>
      </Fade>
    </div>
  );
}

export default SignIn;
