//imports de los componentes
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AddUser, UserDescription } from "./components";
import CircularProgress from "@material-ui/core/CircularProgress";
//import { getUsersByRequest, getGroupsRequest } from "../../api/server";
import FilterSelect from "../../Components/FilterSelect/FilterSelect";
import { Fab } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import ClearIcon from "@material-ui/icons/Clear";
import GetAppIcon from "@material-ui/icons/Clear";
import {
  languages,
  Salario,
  SNACKBAR_SEVERITIES,
  PAGE_STATES,
  SNACKBAR_MESSAGES,
  tecnologias,
  sino,
  anosexp,
  herramientas,
} from "../../common/values";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";
//import JSZip from "jszip";
//import JSZipUtils from "jszip-utils";
//import firebase from "./../../firebase";
//import { saveAs } from "file-saver";
import ElementsNotFound from "../../Components/ElementsNotFound/ElementsNotFound";
//import { useSnackbar } from "notistack";
import CustomSnackbar from "../../Components/CustomSnackbar/CustomSnackbar";
import { user, grupos } from "./data";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 240,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 50,
      paddingLeft: 25,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "white",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    color: "grey",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },
  container: {
    flexGrow: 1,
    width: "100%",
  },
  CardContainer: {
    paddingTop: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grid: {
    justify: "center",
    alignItems: "center",
    alignContent: "center",
  },
  search: {
    position: "relative",
    borderRadius: "50px",
    backgroundColor: "#bcbcbc",
    "&:hover": {
      backgroundColor: "#acacac",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "80%",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    alignItems: "center",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  userText: {
    color: "black",
    paddingRight: "30px",
  },
  account: {
    color: "grey",
  },
  cod: {
    color: "grey",
  },
  buttons: {
    marginTop: 16,
    textAlign: "center",
  },
  loadingState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
}));

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // background: '#f4f6f8',
  background: "#ffffff",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  marginTop: 15,
  marginBottom: 15,
  borderRadius: 5,
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 10,
  paddingLeft: 10,
};

export default function Users(props) {
  console.log("[Users.js] redering...");
  //const [usuarios2, setUsuarios2] = useState("");
  const classes = useStyles();
  const [filters, setFilters] = useState({
    tipo: ["UsuarioR", "UsuarioP"],
    idiomas: [],
    tecnologias: [],
    herramientas: [],
    experiencia: [],
    certificaciones: [],
    aspsalarial: [],
  });
  function filterHandler(filters) {}
  const [usuarios, setUsuarios] = useState("");
  const [groups, setGroups] = useState(null);
  const [page, setPage] = useState(1);
  const [usersToShow, setUsersToShow] = useState([]);
  //const { enqueueSnackbar } = useSnackbar();
  const [userState, setUsersState] = useState(PAGE_STATES.LOADING);
  const [groupsState, setGroupsState] = useState(PAGE_STATES.LOADING);
  const [usersfound, setUsersFound] = useState(PAGE_STATES.LOADING);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(
    SNACKBAR_MESSAGES.INVALID_ARGUMENTS
  );
  const [snackbarSeverity, setSnackbarSeverity] = React.useState(
    SNACKBAR_SEVERITIES.INFO
  );
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

  const resetFilters = () => {
    setFilters({
      idiomas: [],
      tecnologias: [],
      herramientas: [],
      experiencia: [],
      certificaciones: [],
      aspsalarial: [],
    });
    filterHandler({});
  };
  /*
  * Funcionalidad para descargar las hojas de vida que se encuentran en firestore
  const downloadcv = () => {
    var zip = new JSZip();
    var zipFilename = "hojasdevida.zip"; //name of .zip in download
    var storage = firebase.storage();
    var cont = 0;
    if (usuarios2) {
      //ask if users2 is ready
      console.log(usuarios2);
      usuarios2.map((user) => {
        //map users
        const link =
          "gs://prueba-tecnica-a62ab.appspot.com/" + user.HojadeVidaLink; //firebase link of download

        var gsReference = storage.refFromURL(link); //create a reference to download
        gsReference
          .getDownloadURL() //download link
          .then(function (link) {
            //create the request
            var xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = function (event) {
              var blob = xhr.response;
            };
            var filename =
              user.nombre +
              " " +
              user.apellido +
              " " +
              user.identificacion +
              ".pdf"; //name of each filename of cv
            // loading a file and add it in a zip file
            JSZipUtils.getBinaryContent(link, function (err, data) {
              //instanciate the .zip
              if (err) {
                console.log("error");
                throw err; // or handle the error
              }
              zip.file(filename, data, { binary: true }); //add to .zip the file

              cont = cont + 1; //ask 4 the next user
              if (cont == usuarios2.length) {
                //validate the last cv

                zip.generateAsync({ type: "blob" }).then(function (content) {
                  saveAs(content, zipFilename); //download .zip with all users cv
                });
              }
            });
          })
          .catch(function (error) {
            console.log(error);
            // Handle any errors
          });
      });
    }
  };
  */

  function getUsersHandler() {
    setUsersState(PAGE_STATES.LOADING);
    setUsersFound(PAGE_STATES.LOADING);
    setUsuarios(user)
    setUsersToShow(user)
    setUsersState(PAGE_STATES.LOADED);
    setUsersFound(PAGE_STATES.LOADED);
    handleOpenSnackbar(
      SNACKBAR_SEVERITIES.INFO,
      "Usuarios encontrados :)"
    );
    handleOpenSnackbar(
      SNACKBAR_SEVERITIES.SUCCESS,
      "Este mensaje aparece cuando se filtran y cargan los usuarios"
    );
    /*
    getUsersByRequest(filters)
      .then((res) => {
        
      })
      .catch((err) => {
        
      });
      */
  }
  const getGroupsHandler = () => {
    setGroupsState(PAGE_STATES.LOADING);
    setGroups(grupos)
    setGroupsState(PAGE_STATES.LOADED);
    /*
    getGroupsRequest()
      .then((res) => {
        
      })
      .catch((err) => {
        
      });
      */
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    Reloadview();
  }, []);
  
  const Reloadview = () => {
    getGroupsHandler();
    getUsersHandler();
  };
  function handleChangeFilters(event, filter) {
    switch (filter) {
      case "tecnologias": {
        setFilters({ ...filters, tecnologias: event.target.value });
        break;
      }
      case "certificaciones": {
        setFilters({ ...filters, certificaciones: event.target.value });
        break;
      }
      case "experiencia": {
        setFilters({ ...filters, experiencia: event.target.value });
        break;
      }
      case "herramientas": {
        setFilters({ ...filters, herramientas: event.target.value });
        break;
      }
      case "languages": {
        setFilters({ ...filters, idiomas: event.target.value });
        break;
      }
      case "Salario": {
        setFilters({ ...filters, aspsalarial: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.container}>
          {groupsState === PAGE_STATES.LOADED && usuarios ? (
            <div>
              <Grid
                container
                className={classes.buttons}
                spacing={4}
                justify="flex-start"
                alignItems="center"
              >
                <Grid item xs align="center">
                  <AddUser groups={groups} updateUsers={getUsersHandler} />
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginBottom: 10, ...containerStyle }}
              >
                <Grid container direction="row" spacing={2}>
                  <Grid item xs sm={6} xs={12}>
                    <FilterSelect
                      value={filters.herramientas}
                      inputLabel="Herramientas"
                      options={herramientas}
                      changed={(event) =>
                        handleChangeFilters(event, "herramientas")
                      }
                    />
                  </Grid>
                  <Grid item xs sm={6} xs={12}>
                    <FilterSelect
                      value={filters.tecnologias}
                      inputLabel="Tecnologías"
                      options={tecnologias}
                      changed={(event) =>
                        handleChangeFilters(event, "tecnologias")
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs sm={6} xs={12}>
                    <FilterSelect
                      value={filters.idiomas}
                      inputLabel="Idiomas"
                      options={languages}
                      changed={(event) =>
                        handleChangeFilters(event, "languages")
                      }
                    />
                  </Grid>
                  <Grid item xs sm={6} xs={12}>
                    <FilterSelect
                      value={filters.experiencia}
                      inputLabel="Años de experiencia"
                      options={anosexp}
                      changed={(event) =>
                        handleChangeFilters(event, "experiencia")
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs sm={6} xs={12}>
                    <FilterSelect
                      value={filters.certificaciones}
                      inputLabel="Certificaciones"
                      options={sino}
                      changed={(event) =>
                        handleChangeFilters(event, "certificaciones")
                      }
                    />
                  </Grid>
                  <Grid item xs sm={6} xs={12}>
                    <FilterSelect
                      value={filters.aspsalarial}
                      inputLabel="Aspiración salarial"
                      options={Salario}
                      changed={(event) => handleChangeFilters(event, "Salario")}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={4} className={classes.buttons}>
                    <Fab
                      variant="extended"
                      size="small"
                      aria-label="filter"
                      onClick={() => getUsersHandler()}
                    >
                      <FilterListIcon className={classes.extendedIcon} />
                      Filtrar
                    </Fab>
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.buttons}>
                    <Fab
                      variant="extended"
                      size="small"
                      aria-label="delete filters"
                      onClick={resetFilters}
                    >
                      <ClearIcon className={classes.extendedIcon} />
                      Limpiar
                    </Fab>
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.buttons}>
                    <Fab
                      variant="extended"
                      size="small"
                      aria-label="delete filters"
                      //onClick={downloadcv}
                    >
                      <GetAppIcon className={classes.extendedIcon} />
                      Descargas hojas de vida
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
              {usersfound === PAGE_STATES.LOADED ? (
                <div>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 25,
                      marginBottom: 15,
                    }}
                  >
                    {Math.ceil(usersToShow.length / 9) > 0 && (
                      <Pagination
                        defaultPage={1}
                        count={Math.ceil(usersToShow.length / 9)}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={handlePageChange}
                      />
                    )}
                  </Box>
                  <Grid container spacing={3} align="center" justify="center">
                    {usersToShow
                      .slice((page - 1) * 9, page * 8 + page)
                      .map((item) => {
                        return (
                          <Grid item xs key={item._id}>
                            <UserDescription
                              _id={item._id}
                              name={item.nombre}
                              middleName={item.apellido}
                              correo={item.email}
                              test={item.grupo}
                              evaluador={item.evaluador}
                              identificacion={item.identificacion}
                              direccion={item.direccion}
                              //HojadeVidaLink={item.HojadeVidaLink}
                              tipo={item.tipo}
                            />
                          </Grid>
                        );
                      })}
                  </Grid>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 25,
                      marginBottom: 15,
                    }}
                  >
                    {Math.ceil(usersToShow.length / 9) > 0 && (
                      <Pagination
                        defaultPage={1}
                        count={Math.ceil(usersToShow.length / 9)}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={handlePageChange}
                      />
                    )}
                  </Box>
                </div>
              ) : usersfound === PAGE_STATES.LOADING ? (
                <div className={classes.loadingState}>
                  <CircularProgress disableShrink />
                </div>
              ) : (
                <div>
                  <ElementsNotFound
                    label={"No hay usuarios disponibles para visualizar."}
                    option={1}
                    type={"retry"}
                    method={getUsersHandler}
                  />
                </div>
              )}
            </div>
          ) : (groupsState === PAGE_STATES.LOADING) |
            (userState === PAGE_STATES.LOADING) ? (
            <div className={classes.loadingState}>
              <CircularProgress disableShrink />
            </div>
          ) : (
            <div>
              <ElementsNotFound
                label={"Hubo un error obteniendo la información.   :("}
                option={2}
                type={"retry"}
                method={Reloadview}
              />
            </div>
          )}
        </div>
        <CustomSnackbar
            open={openSnackbar}
            handleClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            duration={3000}
            message={snackbarMessage}
          />
      </main>
    </div>
  );
}
