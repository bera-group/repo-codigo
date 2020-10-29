/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
//import fondo from "./img/footer-bg.png";
//import logo from "./img/logo-login.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import { red } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";
//import firebase from "./../../firebase";
//import { v4 as uuidv4 } from "uuid";
//import { createPostulante } from "../../api/server";
import {
  herramientas,
  tecnologias,
  languages,
  sino,
  SNACKBAR_SEVERITIES, 
  SNACKBAR_MESSAGES,
} from "../../common/values";
import CustomSnackbar from "../../Components/CustomSnackbar/CustomSnackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  colorPrimary: {
    backgroundColor: "#B2DFDB",
  },
  barColorPrimary: {
    backgroundColor: "#24A699",
  },
  paper: {
    paddingTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //backgroundImage: `url(${fondo})`,
  },
  Form: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  foto: {
    width: "200px",
    height: "200px",
  },
  cedula: {
    width: "300px",
    height: "150px",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "150px",
      height: "100px",
    },
  },
  ingresar: {
    margin: theme.spacing(3, 0, 2),
  },
  registrarse: {
    margin: theme.spacing(3, 0, 2),
  },
  centerword: {
    textAlign: "center",
  },
  back: {
    background: "white",
    // background: '#e0f2f1',
    border: "2px solid  #284E7C",
    borderRadius: "10px",
    margin: theme.spacing(6, 0, 6),
    textAlign: "-webkit-center",
  },
  borderbot: {
    //fontFamily: "Montserrat",
    fontweight: 800,
    borderBottom: "2px solid  #284E7C",
    padding: theme.spacing(3, 0, 3),
    margin: theme.spacing(0, 0, 3),
  },
  button: {
    minHeight: 60,
    margin: theme.spacing(2, 0, 4),
    font: "bold",
    position: "relative",
    color: "white",
    backgroundColor: "#24A699",
    //fontFamily: "Montserrat",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#4db6ac",
    },
    "&:active": {
      backgroundColor: "#038C73",
    },
    "&:focus": {
      backgroundColor: "#038C73",
    },
  },
  font: {
    //fontFamily: "Montserrat",
    fontWeight: 800,
  },
  font2: {
    //fontFamily: "Montserrat",
    fontWeight: 500,
  },
  button2: {
    minHeight: 60,
    margin: theme.spacing(4, 0, 4),
    font: "bold",
    position: "relative",
    color: "white",
    //fontFamily: "Montserrat",
    backgroundColor: red[500],
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: red[500],
    },
    "&:active": {
      backgroundColor: red[500],
    },
    "&:focus": {
      backgroundColor: red[500],
    },
  },
  button3: {
    minHeight: 60,
    margin: theme.spacing(4, 0, 4),
    font: "bold",
    position: "relative",
    color: "white",
    //fontFamily: "Montserrat",
    border: "4px solid " + red[500],
    backgroundColor: "#24A699",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#4db6ac",
    },
    "&:active": {
      backgroundColor: "#4db6ac",
    },
    "&:focus": {
      backgroundColor: "#4db6ac",
    },
  },
  falsebutton: {
    borderWidth: "1px",
    borderColor: red[500] + "!important",
    color: red[500] + "!important",
  },
}));
const CssTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#4db6ac",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#4db6ac",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4db6ac",
      },
      "&:hover fieldset": {
        borderColor: "#4db6ac",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4db6ac",
      },
    },
  },
}))(TextField);

const SNACKBAR_MESSAGESS = {
  SUCCESS_SIGNUP:
    "El usuario fue creado con éxito. En la próximas horas un asesor le podrá asignar una usuario y una vacante",
  API_ERROR:
    "Error al crear usuario. Verifique su conexión y vuelva a intentarlo.",
  ERR_EMAIL_FORMAT:
    "El correo ingresado tiene un formato inválido. Verifíquelo para continuar.",
  ERR_PDF_FORMAT:
    "debe ingresar un archivo en formato PDF. Verifíquelo para continuar.",
  EMAIL_EXIST: "El email que intenta ingresar ya existe.",
  WAIT: "¡Espere un momento porfavor!",
  ERR_OTHER_FIELDS: (fields) => {
    return (
      "Hay errores en el(los) campo(s) " +
      fields.join(", ") +
      ". Por favor, llenar estos campos."
    );
  },
};


export default function Formulario1() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [filename, setFileName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [experiencia, setExperiencia] = React.useState("");
  const [cedula, setCedula] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [idiomas, setIdiomas] = React.useState([]);
  const [certificaciones, setCertificaciones] = React.useState(false);
  const [certHerr, setCertHerr] = React.useState([]);
  const [certAnoth, setCertAnoth] = React.useState("");
  const [tecnologia, setTecnologias] = React.useState([]);
  const [otherTecnol, setOtherTecn] = React.useState("");
  const [aspsalarial, setAspsalarial] = React.useState("");
  const [herramienta, setHerramienta] = React.useState([]);
  const [otherHerra, setOtherHerra] = React.useState("");
  const [file, setFile] = React.useState("");
  const [check1, setCheck1] = React.useState(true);
  const [check2, setCheck2] = React.useState(true);
  const [check3, setCheck3] = React.useState(true);
  const [check4, setCheck4] = React.useState(true);
  const [check5, setCheck5] = React.useState(true);
  const [check16, setCheck16] = React.useState(true);
  const [check18, setCheck18] = React.useState(true);
  const [check19, setCheck19] = React.useState(true);
  const [check20, setCheck20] = React.useState(true);
  const [check21, setCheck21] = React.useState(true);
  const [check23, setCheck23] = React.useState(true);
  const [check24] = React.useState(true);
  const [check25, setCheck25] = React.useState(true);
  const [check26] = React.useState(true);
  const [check27, setCheck27] = React.useState(true);
  const [check28] = React.useState(true);
  const [check29, setCheck29] = React.useState(true);
  //const [, setProgress] = React.useState(0);
  const [edad, setEdad] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(
    SNACKBAR_MESSAGES.INVALID_ARGUMENTS
  );
  const [snackbarSeverity, setSnackbarSeverity] = React.useState(
    SNACKBAR_SEVERITIES.INFO
  );

  const getBack = () => {
    removeAllLocalKeys();
    window.location.replace("/auth");
  };

  function removeAllLocalKeys() {
    window.localStorage.clear();
  }

  const handleOpenSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const fileUploadButton5 = () => {
    document.getElementById("fileButton5").click();
    document.getElementById("fileButton5").onchange = (e) => {
      if (e.target.files[0]) {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      }
    };
  };

  useEffect(() => {
    //componentWillMount();
  }, []);

  const idiomasList = languages.map((c) => {
    return (
      <MenuItem key={c.value} value={c.value}>
        {c.label}
      </MenuItem>
    );
  });
  const herramientasList = herramientas.map((c) => {
    return (
      <MenuItem key={c.value} value={c.value}>
        {c.label}
      </MenuItem>
    );
  });
  const tecnologiasList = tecnologias.map((c) => {
    return (
      <MenuItem key={c.value} value={c.value}>
        {c.label}
      </MenuItem>
    );
  });

  const certList = sino.map((c) => {
    return (
      <MenuItem key={c.value} value={c.value}>
        {c.label}
      </MenuItem>
    );
  });

  // Validaciones del formulario
  function uploadAllData() {
    var idm = typeof idiomas !== "undefined" && idiomas.length > 0;
    var tec = typeof tecnologia !== "undefined" && tecnologia.length > 0;
    var herr = typeof herramienta !== "undefined" && herramienta.length > 0;
    if (
      name === "" ||
      lastname === "" ||
      cedula === "" ||
      telefono === "" ||
      mail === "" ||
      file === "" ||
      direccion === "" ||
      experiencia === "" ||
      idm === false ||
      aspsalarial === "" ||
      tec === false ||
      herr === false
    ) {
      if (name === "") {
        setCheck2(false);
      }
      if (lastname === "") {
        setCheck3(false);
      }
      if (cedula === "") {
        setCheck1(false);
      }
      if (telefono === "") {
        setCheck5(false);
      }
      if (mail === "") {
        setCheck4(false);
      }
      if (edad === "") {
        setCheck18(false);
      }
      if (direccion === "") {
        setCheck19(false);
      }
      if (experiencia === "") {
        setCheck20(false);
      }
      if (aspsalarial === "") {
        setCheck29(false);
      } else {
        setCheck29(true);
      }
      if (file === "") {
        setCheck16(false);
      } else {
        setCheck16(true);
      }
      if (typeof idiomas !== "undefined" && idiomas.length > 0) {
        setCheck21(true);
      } else {
        setCheck21(false);
      }
      if (typeof herramienta !== "undefined" && herramienta.length > 0) {
        setCheck27(true);
      } else {
        setCheck27(false);
      }
      if (typeof tecnologia !== "undefined" && tecnologia.length > 0) {
        setCheck25(true);
      } else {
        setCheck25(false);
      }
      if (name !== "") {
        setCheck2(true);
      }
      if (lastname !== "") {
        setCheck3(true);
      }
      if (cedula !== "") {
        setCheck1(true);
      }
      if (telefono !== "") {
        setCheck5(true);
      }
      if (mail !== "") {
        setCheck4(true);
      }
      if (edad !== "") {
        setCheck18(true);
      }
      if (direccion !== "") {
        setCheck19(true);
      }
      if (experiencia !== "") {
        setCheck20(true);
      }
      handleOpenSnackbar(
        SNACKBAR_SEVERITIES.WARNING,
        'Asegurese de llenar todos los campos requeridos.'
      );
    } else if (validarEmail(mail) === null) {
      
      handleOpenSnackbar(
        SNACKBAR_SEVERITIES.ERROR,
        SNACKBAR_MESSAGESS.ERR_EMAIL_FORMAT
      );
    } else {
      console.log("subiendo archivos");

      if (tecnologia.includes("Otro") || otherTecnol !== null) {
        tecnologia.push(otherTecnol);
      }
      if (herramienta.includes("Otro") || otherHerra !== null) {
        herramienta.push(otherHerra);
      }
      var v = [];
      v.push(certificaciones);
      if (certificaciones === true) {
        if (typeof certHerr !== "undefined" && certHerr.length > 0) {
          certHerr.forEach((i) => {
            v.push(i);
          });
          if (certHerr.includes("Otro") && certAnoth !== null) {
            v.push(certAnoth);
          }
          //subirData(v);
        } else {
          setCheck23(false);
          handleOpenSnackbar(
            SNACKBAR_SEVERITIES.WARNING,
            'Asegurese de llenar todos los campos requeridos.'
          );
        }
      } else {
        //subirData(v);
      }
    }
  }
/*
* Método para subir un archivo a firestore
  const subirData = async (v) => {
    const formData = new FormData();
    //file en el botón
    if (file) {
      formData.append("file", file);
      const namef = formData.get("file").name;
      const ext = ".pdf";
      const extension = namef.substring(namef.lastIndexOf(".")).toLowerCase();
      if (extension === ext) {
        const newname = uuidv4();

        formData.set("name", newname);

        var storageRef = firebase.storage().ref();

        // Points to 'hojasdevida'
        var pdfRef = storageRef.child("hojadevidaPost");

        // Points to 'images/space.jpg'
        // Note that you can use variables to create child values

        var fileName = newname;
        var spaceRef = pdfRef.child(fileName);

        // File path is 'images/space.jpg'
        var path = spaceRef.fullPath;

        console.log("path " + path);
        //este dato se guardar en la db
        formData.set("url", path);

        var dataUser = {
          nombre: name,
          apellido: lastname,
          cedula: cedula,
          email: mail,
          idiomas: idiomas,
          telefono: telefono,
          edad: edad,
          aspsalarial: aspsalarial,
          direccion: direccion,
          experiencia: experiencia,
          tecnologias: tecnologia,
          herramientas: herramienta,
          certificaciones: v,
          HojadeVidaLink: path,
        };
        console.log("completado");

        createPostulante(dataUser)
          .then((res) => {
            
          })
          .catch((err) => {
            
          });
      } else {
        handleOpenSnackbar(
          SNACKBAR_SEVERITIES.WARNING,
          SNACKBAR_MESSAGESS.ERR_PDF_FORMAT
        );
      }
    } else {
      handleOpenSnackbar(
        SNACKBAR_SEVERITIES.WARNING,
        'Ingrese su hoja de vida'
      );
    }
  };
*/
  function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)) {
      return valor;
    } else {
      return null;
    }
  }

  return (
    <div className={classes.paper}>
      <CssBaseline />
      <Grid container item xs={12} spacing={3} justify="center">
        <Grid item xs={8} className={classes.back}>
          <Grow in={true} timeout={800}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  margin: "20px 0 0px 0",
                }}
              >
                {/*<img src={logo} alt={"logo"} />*/}
              </div>
              <Typography
                component="h1"
                variant="h3"
                className={classes.borderbot}
                align="center"
              >
                Registro
              </Typography>
            </div>
          </Grow>
          <Grow in={true} timeout={800}>
            <div>
              <Grid container item xs={12} sm={12} spacing={2} justify="center">
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check2 === true ? "Nombre" : "Por favor ingresar nombre"
                    }
                    variant="outlined"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check2 === false ? classes.falsebutton : null,
                      },
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                    InputLabelProps={{
                      className: check2 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check3 === true
                        ? "Apellido"
                        : "Por favor ingresar apellido"
                    }
                    variant="outlined"
                    required
                    value={lastname}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setLastname(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check3 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check3 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check1 === true
                        ? "Cédula"
                        : "Por favor ingresar la cédula"
                    }
                    variant="outlined"
                    type="text"
                    required
                    className={classes.font2}
                    onChange={(e) =>
                      setCedula(e.target.value.replace(/\D/, ""))
                    }
                    value={cedula}
                    inputProps={{
                      maxLength: 15,
                    }}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check1 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check1 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check18 === true ? "Edad" : "Por favor ingresar edad"
                    }
                    variant="outlined"
                    required
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check18 === false ? classes.falsebutton : null,
                      },
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                    InputLabelProps={{
                      className: check18 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check4 === true
                        ? "Correo"
                        : "Por favor ingresar el correo"
                    }
                    variant="outlined"
                    type="email"
                    required
                    value={mail}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setMail(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check4 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check4 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check5 === true
                        ? "Teléfono"
                        : "Por favor ingresar el teléfono"
                    }
                    variant="outlined"
                    type="text"
                    required
                    onChange={(e) =>
                      setTelefono(e.target.value.replace(/\D/, ""))
                    }
                    value={telefono}
                    inputProps={{
                      maxLength: 15,
                    }}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check5 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check5 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check19 === true
                        ? "Dirección"
                        : "Por favor ingresar dirección"
                    }
                    variant="outlined"
                    required
                    value={direccion}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setDireccion(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check19 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check19 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check20 === true
                        ? "Años de experiencia"
                        : "Por favor ingresar los años de experiencia"
                    }
                    variant="outlined"
                    type="number"
                    required
                    value={experiencia}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setExperiencia(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check20 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check20 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    select
                    name="Idiomas"
                    variant="outlined"
                    label={
                      check21 === true
                        ? "Idiomas"
                        : "Por favor ingresar los idiomas que conoce"
                    }
                    SelectProps={{
                      multiple: true,
                      value: idiomas,
                      onChange: (e) => setIdiomas(e.target.value),
                    }}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check21 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check21 === false ? classes.falsebutton : null,
                    }}
                  >
                    {idiomasList}
                  </CssTextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    select
                    name="¿Tiene certificación?"
                    variant="outlined"
                    label="¿Tiene certificación?"
                    SelectProps={{
                      value: certificaciones,
                      onChange: (e) => setCertificaciones(e.target.value),
                    }}
                  >
                    {certList}
                  </CssTextField>
                </Grid>
                {certificaciones === true ? (
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    spacing={2}
                    justify="center"
                  >
                    <Grid item xs={12} sm={6} className={classes.Form}>
                      <CssTextField
                        id="outlined-basic"
                        fullWidth
                        select
                        name="¿Tiene certificación?"
                        variant="outlined"
                        label={
                          check23 === true
                            ? "¿Tiene certificación en alguna de estas herramientas?"
                            : "Por favor ingresar las herramientas en las que tiene certificación"
                        }
                        SelectProps={{
                          multiple: true,
                          value: certHerr,
                          onChange: (e) => setCertHerr(e.target.value),
                        }}
                        InputProps={{
                          classes: {
                            input: classes.font2,
                            notchedOutline:
                              check23 === false ? classes.falsebutton : null,
                          },
                        }}
                        InputLabelProps={{
                          className:
                            check23 === false ? classes.falsebutton : null,
                        }}
                      >
                        {herramientasList}
                      </CssTextField>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.Form}>
                      <CssTextField
                        id="outlined-basic"
                        fullWidth
                        label={
                          check24 === true
                            ? "¿Qué otra certificación tiene?"
                            : "Por favor ingresar su otra certificación"
                        }
                        variant="outlined"
                        type="text"
                        value={certAnoth}
                        onChange={(e) => setCertAnoth(e.target.value)}
                        InputProps={{
                          classes: {
                            input: classes.font2,
                            notchedOutline:
                              check24 === false ? classes.falsebutton : null,
                          },
                        }}
                        inputProps={{
                          maxLength: 50,
                        }}
                        InputLabelProps={{
                          className:
                            check24 === false ? classes.falsebutton : null,
                        }}
                      />
                    </Grid>
                  </Grid>
                ) : null}
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    select
                    name="Idioas"
                    variant="outlined"
                    label={
                      check25 === true
                        ? "¿Qué tecnologias conoce?"
                        : "Por favor ingresar las tecnologias que conoce"
                    }
                    SelectProps={{
                      multiple: true,
                      value: tecnologia,
                      onChange: (e) => setTecnologias(e.target.value),
                    }}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check25 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check25 === false ? classes.falsebutton : null,
                    }}
                  >
                    {tecnologiasList}
                  </CssTextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check26 === true
                        ? "¿Qué otras tecnologias conoces?"
                        : "Por favor ingresar las otras tecnologias que conoces"
                    }
                    variant="outlined"
                    type="text"
                    value={otherTecnol}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setOtherTecn(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check26 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check26 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    select
                    name="herramientas"
                    variant="outlined"
                    label={
                      check27 === true
                        ? "¿Qué herramientas conoce?"
                        : "Por favor ingresar las herramientas que conoce"
                    }
                    SelectProps={{
                      multiple: true,
                      value: herramienta,
                      onChange: (e) => setHerramienta(e.target.value),
                    }}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check27 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check27 === false ? classes.falsebutton : null,
                    }}
                  >
                    {herramientasList}
                  </CssTextField>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check28 === true
                        ? "¿Qué otras herramienta conoces?"
                        : "Por favor ingresar las diferentes herramientas que conoce"
                    }
                    variant="outlined"
                    type="text"
                    value={otherHerra}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setOtherHerra(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check28 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check28 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.Form}>
                  <CssTextField
                    id="outlined-basic"
                    fullWidth
                    label={
                      check29 === true
                        ? "¿Cuál es tu aspiración salarial?"
                        : "Por favor ingresar la aspiración salarial"
                    }
                    variant="outlined"
                    type="number"
                    required
                    value={aspsalarial}
                    inputProps={{
                      maxLength: 50,
                    }}
                    onChange={(e) => setAspsalarial(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.font2,
                        notchedOutline:
                          check29 === false ? classes.falsebutton : null,
                      },
                    }}
                    InputLabelProps={{
                      className: check29 === false ? classes.falsebutton : null,
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </Grow>
          <br></br>
          <Grow in={true} timeout={800}>
            <div>
              <Typography
                component="h1"
                variant="h5"
                className={classes.font}
                align="center"
              >
                Documentos
                <Tooltip
                  enterTouchDelay={0}
                  title="Los archivos de seguridad social y Rut deben estar en formato .pdf, Todas las imagenes tienen que estar en formato .jpeg o png"
                >
                  <IconButton>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </Typography>
              <Grid container item xs={12} sm={12} spacing={2} justify="center">
                <Grid item xs={12} sm={5} className={classes.Form}>
                  <input
                    id="fileButton5"
                    type="file"
                    hidden
                    accept="application/pdf"
                  />
                  <p>{filename}</p>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={
                      check16 === true ? classes.button : classes.button3
                    }
                    onClick={() => fileUploadButton5()}
                  >
                    Cargar Hoja de vida
                  </Button>
                  {check16 === false ? (
                    <Grid item xs={12} className={classes.font}>
                      Por favor cargar la Hoja de vida*
                    </Grid>
                  ) : null}
                </Grid>
              </Grid>
              {/*
                progress !== 0 && <Grid items xs={12} sm={12}>
                  <LinearProgress variant="determinate" value={progress} classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }} style={{ width: '70%' }} />
                </Grid> */}
              <Grid item xs={12} sm={5} className={classes.Form}>
                <h3>* Los campos son obligatorios</h3>
              </Grid>
              <Grid item xs={8}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => uploadAllData()}
                >
                  Registrarse
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button2}
                  onClick={() => getBack()}
                >
                  Volver
                </Button>
              </Grid>
            </div>
          </Grow>
        </Grid>
        <CustomSnackbar
            open={openSnackbar}
            handleClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            duration={3000}
            message={snackbarMessage}
          />
      </Grid>
    </div>
  );
}
