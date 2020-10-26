import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
const styles = (theme) => ({
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
  title: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    paddingleft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}))(MuiDialogContent);
const Dialog = withStyles((theme) => ({
  root: {
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
}))(MuiDialog);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const TypoStyle = withStyles((theme) => ({
  root: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
}))(Typography);
const BeraBold = () => {
  return <bdi style={{ fontWeight: "bold" }}>BERA GROUP S.A.S</bdi>;
};

const PoliticsDialog = (props) => {
  const {
    open,
    handleClose,
    title,
    description,
    continueAction,
    onlyMessage,
    children,
  } = props;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        POLÍTICA DE CALIDAD Y CONFIDENCIALIDAD
      </DialogTitle>
      <DialogContent dividers>
        <Typography style={{ textAlign: "justify" }} gutterBottom>
          Para {BeraBold()} es de suma importancia que todos nuestros Usuarios
          de nuestra página web o Clientes, conozcan la política de privacidad,
          confidencialidad y seguridad de los datos que suministran a nuestra
          organización, así como los términos de uso y las condiciones sobre las
          cuales se manejará la información que nos suministren en razón a las
          diferentes actividades que realizamos, lo cual garantiza la privacidad
          de la información personal. Para ello, le solicitamos leer todas las
          condiciones que a continuación se señalan y que se ajustan a lo
          dispuesto en la Ley 1581 de 2012 y normas concordantes. Si no está de
          acuerdo con el tratamiento que se dará a la información por usted
          suministrada es recomendable que se abstenga de utilizar los servicios
          que presta nuestra organización o de usar esta página web. El Usuario
          o Cliente acepta y reconoce que la información personal que ofrece{" "}
          {BeraBold()}, es de manera voluntaria. Igualmente, acepta y reconoce
          que la información que suministra hará parte de un archivo y/o base de
          datos que contenderá su perfil, que podrá ser utilizada por{" "}
          {BeraBold()} en los términos que a continuación se indican. Al
          facilitarnos sus datos, Cliente o Usuario declara a {BeraBold()}. Que
          son veraces, completos, exactos, actualizados, comprobables y
          comprensibles.
        </Typography>
        <TypoStyle gutterBottom>
          MODIFICACIONES A LA POLÍTICA DE PRIVACIDAD
        </TypoStyle>
        <Typography style={{ textAlign: "justify" }} gutterBottom>
          {BeraBold()}, actualiza su política de privacidad para lo cual se
          publica en esta misma página indicando la fecha de actualización,
          cambios que serán ajustados a la normatividad que sobre la misma sean
          expedidos por el legislador y conlleven la modificación de la política
          adoptada por la organización, entrando en vigencia desde el mismo
          momento de su publicación. El Usuario o Cliente podrá conocer,
          actualizar, modificar y rectificar la información personal que haya
          suministrado de conformidad con lo dispuesto en los artículos 15 y 20
          de la Constitución Política de Colombia y la Ley General de Protección
          de Datos Personales, 1581 de 2012.
        </Typography>
        <TypoStyle gutterBottom>TIPO DE INFORMACIÓN SOLICITADA</TypoStyle>
        <Typography style={{ textAlign: "justify" }} gutterBottom>
          {BeraBold()} no solicitará en ningún momento información de tipo
          sensible según la definición que de esta trae el artículo 5 de la Ley
          1581 de 2012, y que se describe como aquella relacionada con el origen
          racial o étnico, la orientación política, las convicciones religiosas
          o filosóficas, la pertenencia a sindicatos, organizaciones sociales,
          de derechos humanos o que promuevan intereses de cualquier partido
          político, o datos relativos a la salud, entre otros. Por lo tanto,
          toda la información que se captura por nuestra organización será
          utilizada para fines estadísticos y anónimos, y se advierte que en
          ningún caso los datos que reposen en la base de datos de {BeraBold()},
          serán vendidos o cedidos a cualquier título y solo serán utilizados
          para otro fin cuando medie autorización previa y expresa del Usuario o
          Cliente.
        </Typography>
        <TypoStyle gutterBottom>SEGURIDAD</TypoStyle>
        <Typography style={{ textAlign: "justify" }} gutterBottom>
          {BeraBold()} se compromete a garantizar la seguridad de los datos
          personales, por tal motivo, se establece que para compartir la
          información obtenida con terceros, se solicitará consentimiento previo
          y escrito del Usuario o Cliente. Si el Usuario o Cliente considera que
          ha enviado datos que pudieren causarle un perjuicio o que pretenda sea
          eliminado, deberá solicitar a {BeraBold()} directamente en el correo
          electrónico protecciondatos@bera-group.com la eliminación del mismo en
          atención a la legislación vigente del país.
        </Typography>
        <TypoStyle gutterBottom>ENLACES A OTROS SITIOS WEB</TypoStyle>
        <Typography style={{ textAlign: "justify" }} gutterBottom>
          El Portal web de {BeraBold()} podrá introducir enlaces o “links” a
          otros sitios web propios o de terceros. Si el Usuario o Cliente decide
          ir a alguno de los sitios web enlazados en nuestro portal, debe tener
          en cuenta que cada uno de estos portales o sitios web cuenta con una
          política de privacidad distinta, por lo cual no se acepta, ningún tipo
          de responsabilidad sobre la información o datos personales que el
          Usuario o Cliente incluya en estos portales.
        </Typography>
        <TypoStyle gutterBottom>
          PROCESO DE RECOLECCIÓN DE LOS DATOS DE LOS USUARIOS O CLIENTES
        </TypoStyle>
        <Typography style={{ textAlign: "justify" }} gutterBottom>
          {BeraBold()} recibe la información de sus Usuario o Clientes cuando
          realizan alguna transacción con este, como lo es por ejemplo la
          solicitud de un servicio a través de la página web, el registro de
          Usuarios en el chat, la inscripción a un seminario, por lo que los
          datos que se almacenan dependen de la relación comercial requerida.
          Por ello, lo que se requiere básicamente es información relacionada
          con el nombre del contacto, dirección, número telefónico, dirección de
          residencia, correo electrónico, profesión, sector de la economía a que
          se dedica, entre otros, con el fin de asegurar que el servicio
          ofrecido proporcionará satisfacción al Usuario o Cliente, hacer
          seguimiento de esta y aprovechar las recomendaciones de los Usuario o
          Clientes, poder contactarlos en el caso de fallas en el servicio o de
          ofrecer productos nuevos y la información financiera necesaria en caso
          de que se requiera para efectos legales. La información recopilada,
          podrá ser utilizada con fines de marketing e investigación al menos
          que el Usuario o Cliente, manifieste lo contrario, pudiendo{" "}
          {BeraBold()} enviar la información o promoción de los productos que
          haya solicitado el Usuario o Cliente y según lo previsto en la
          Política de tratamiento de la información. De acuerdo con la
          regulación legal vigente en materia de protección de datos, así como
          en materia de las TIC y de comercio electrónico, el Usuario o Cliente
          acepta expresamente que los datos personales aportados en el momento
          de su registro, o cualquier otro facilitado a {BeraBold()} para su
          acceso a algunos de los servicios del sitio web, sean incorporados a
          la base de datos titularidad de esta empresa. En el caso de
          comunicaciones comerciales a través de correo electrónico o medio
          equivalente, el Usuario o Cliente presta su consentimiento expreso
          para el envío de publicidad a través de dicho medio. {BeraBold()} se
          compromete al cumplimiento de su obligación de secreto de los datos de
          carácter personal y de su deber de tratarlos con confidencialidad, y
          asume, a estos efectos, las medidas de índole técnica, organizacional
          y de seguridad necesarias para evitar su alteración, pérdida,
          tratamiento o acceso no autorizado, de acuerdo con lo establecido en
          la normatividad colombiana vigente. Al acceder a los servicios que
          ofrece {BeraBold()} a través de ésta página web, el Usuario o Cliente
          tiene para su acceso una clave que es exclusiva por lo que su uso
          adecuado es su responsabilidad, y además se compromete a mantener
          actualizados para los que podrá usar su Usuario contraseña y
          actualizar estos datos por sí mismo. Cualquier Usuario o Cliente
          registrado puede en cualquier momento ejercer el derecho a acceder,
          rectificar, y en su caso, cancelar sus datos de carácter personal
          suministrados, mediante petición escrita, adjuntando fotocopia legible
          de su identificación, dirigiendo la comunicación a la CALLE 106 No.
          54-73, Oficina 302, en la ciudad de Bogotá D.C., Colombia o al correo
          electrónico protecciondatos@bera-group.com
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PoliticsDialog;
