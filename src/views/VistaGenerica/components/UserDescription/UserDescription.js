import React from "react";
import "./styles.css";
import { Tooltip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { withRouter } from "react-router-dom";
import { USER_TYPES } from "../../../../common/values";
import { getRouteByUserType } from "../../../../common/utils";
class UserDescription extends React.Component {
  state = {
    _id: this.props._id,
    nombre: this.props.name,
    apellido: this.props.middleName,
    email: this.props.correo,
    grupo: this.props.test,
    evaluador: this.props.evaluador,
    identificacion: this.props.identificacion,
    direccion: this.props.direccion,
    HojadeVidaLink: this.props.HojadeVidaLink,
    prueba: this.props.test,
    tipo: this.props.tipo,
    history: this.props.history,
  };

  handleRenderView() {
    
  }
  render() {
    return (
      <Card className="content">
        <CardActionArea onClick={() => this.handleRenderView()}>
          <Tooltip title={this.state.nombre}>
            <h3>
              <b>Nombre:</b> <p>{this.state.nombre}</p>
            </h3>
          </Tooltip>
          <Tooltip title={this.state.apellido}>
            <h3>
              <b>Apellido:</b> <p>{this.state.apellido}</p>
            </h3>
          </Tooltip>
          <Tooltip title={this.state.email}>
            <h3>
              <b>Correo:</b> <p>{this.state.email}</p>
            </h3>
          </Tooltip>
          <Tooltip title={this.state.prueba}>
            <h3>
              <b>Grupo asignado:</b> <p>{this.state.prueba}</p>
            </h3>
          </Tooltip>
          <Tooltip title={this.state.tipo}>
            <h3>
              <b>Tipo de usuario:</b> <p>{this.state.tipo}</p>
            </h3>
          </Tooltip>
        </CardActionArea>
      </Card>
    );
  }
}

export default withRouter(UserDescription);
