import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      //color: theme.palette.text.secondary,
    },
    
  }));

const MainView = (props) =>{
    const classes = useStyles();
    const {history} =props

    const handleForm1 = () => {
        history.push({
            pathname: "formulario1",
        })
    }

    const handleView1 = () => {
        history.push({
            pathname: 'vistagenerica'
        })
    }

    const handleLogin = () => {
        history.push({
            pathname: 'login'
        })
    }

    return(
        <div classes={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <center>
                        <Typography variant="h1">
                            Repositorio de código
                        </Typography>
                        <Typography>
                            Modifíquese a discreción
                        </Typography>
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <Paper onClick={handleForm1}>
                        <Typography variant="h3">
                            <u>Formulario de registro #1</u>
                        </Typography>
                        <Typography variant="body1">
                            Ruta: src/views/formulario1
                        </Typography>
                        <Typography varian="body1">
                            Ejemplo basado en la vista de creación de un postulado. Este formulario contienen todas las validaciones pertinientes
                            Dentro existe un método para subir archivos a firestore
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper onClick={handleView1}>
                        <Typography variant="h3">
                            <u>Tipo de vista con todas las validaciones</u>
                        </Typography>
                        <Typography variant="body1">
                            Ruta: src/views/VistaGenerica
                        </Typography>
                        <Typography varian="body1">
                            Ejemplo basado en la vista de creación de usuario. Esta página contiene un botón de creación de usuario
                                que al momento de ejecutarlo muestra un formulario. Un área de filtrado y el área donde van los cards de usuarios.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <Typography variant="h4">
                           Componentes locales 
                        </Typography>
                        <Typography Varian="body1">
                            Ruta: src/Components
                        </Typography>
                        <Typography>
                            Descripción: En esta carpeta se encuentran archivos importantes como son: 
                            <ul>
                                <li>CustomSnackbar</li>
                                <li>Alert Dialog</li>
                                <li>Filter select</li>
                            </ul>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper onClick={handleLogin}>
                        <Typography variant="h4">
                           <u>Vista de inicio de sesión</u>
                        </Typography>
                        <Typography Varian="body1">
                            Ruta: src/views/Login
                        </Typography>
                        <Typography>
                            Ejemplo de vista de inicio de sesión
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <Typography variant="h4">
                           Implementación token
                        </Typography>
                        <Typography Varian="body1">
                            Ruta: src/toke-imp
                        </Typography>
                        <Typography>
                            Implementación de funcionalidad
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <Typography variant="h4">
                           Servicios de API
                        </Typography>
                        <Typography Varian="body1">
                            Ruta: src/api-examples
                        </Typography>
                        <Typography>
                            Ejemplo de implementación de API. Este ejemplo incluye el controlador, el modelo, las rutas, el middleware y los servicios.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainView