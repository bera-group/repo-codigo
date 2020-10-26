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
                            Ruta: src/views/formulario1
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainView