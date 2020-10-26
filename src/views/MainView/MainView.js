import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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

    return(
        <div classes={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6} onClick={handleForm1}>
                    <Paper>
                        <Typography variant="h3">
                            Formulario de registro #1
                        </Typography>
                        <Typography variant="body1">
                            Ruta: src/views/formulario1
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} onClick={handleView1}>
                    <Paper>
                        <Typography variant="h3">
                            Tipo de vista con todas las validaciones
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
            </Grid>
        </div>
    )
}

export default MainView