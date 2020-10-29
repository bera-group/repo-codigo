import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import "./styles.css";
import { Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import { USER_TYPES_LIST } from "../../../../common/values";
//import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
function generateRandomPass() {
  const generator = require("generate-password");
  const simbols = [".", ",", "*", "!", "?", "¿", "¡", "/", "#", "$", "%", "&"];
  const password = generator.generate({
    length: 8, 
    numbers: true,
    uppercase: true,
  });
  const randomsimbol = simbols[Math.floor(Math.random() * simbols.length)];
  const passv2 = password + randomsimbol;

  return passv2;
}
//const useStyles = makeStyles((theme) => ({}));
function PopupModel(props) {
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [contra] = useState(generateRandomPass());
  const [tipo, setTipo] = useState(USER_TYPES_LIST[0].value);
  const [grupo, setGrupo] = useState(props.groups[0].value);
  const [dir, setDir] = useState(null);
  //const classes = useStyles();
  useEffect(() => {
    props.obtenerDatos(email, id, nombre, apellido, contra, tipo, grupo, dir);
  });

  let options = ["Cargando..."].map((group) => {
    return (
      <MenuItem value={group} width="fit-content">
        <ListItemText>{group}</ListItemText>
      </MenuItem>
    );
  });

  if (props.groups) {
    options = props.groups.map((group, i) => (
      <MenuItem value={group.value} key={i} width="fit-content">
        <ListItemText>{group.label}</ListItemText>
      </MenuItem>
    ));
  }

  const userTypeOptions = USER_TYPES_LIST.map((userType) => {
    return (
      <MenuItem value={userType.value} width="fit-content">
        <ListItemText>{userType.label}</ListItemText>
      </MenuItem>
    );

    // return <option value={userType.value}></option>;
  });

  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={2} display="flex" flexWrap="nowrap" p={3} m={3}>
        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              className="box-style"
              label="Nombre"
              autoFocus
              onChange={(e) => setNombre(e.target.value)}
              margin="dense"
              id="name"
              type="text"
              required
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              onChange={(e) => setApellido(e.target.value)}
              className="box-style"
              autoFocus
              margin="dense"
              id="name"
              label="Apellido"
              type="text"
              required
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className="box-style"
              autoFocus
              margin="dense"
              label="Correo"
              id="name"
              type="text"
              required
              variant="outlined"
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              onChange={(e) => setId(e.target.value)}
              className="box-style"
              autoFocus
              margin="dense"
              label="Identificación"
              id="name"
              type="text"
              required
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              id="outlined-select-currency"
              className="box-style"
              select
              autoFocus
              value={grupo}
              margin="dense"
              required
              onChange={(e) => setGrupo(e.target.value)}
              label="Grupo"
              variant="outlined"
            >
              <option aria-label="None" value="" />

              {options}
            </TextField>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              id="outlined-select-currency"
              className="box-style"
              select
              autoFocus
              value={tipo}
              margin="dense"
              required
              onChange={(e) => setTipo(e.target.value)}
              label="Tipo"
              variant="outlined"
            >
              <option aria-label="None" value="" />

              {userTypeOptions}
            </TextField>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box p={1}>
            <TextField
              onChange={(e) => setDir(e.target.value)}
              className="box-style"
              autoFocus
              margin="dense"
              label="Dirección/Lugar de trabajo"
              id="name"
              type="text"
              required
              variant="outlined"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default PopupModel;
