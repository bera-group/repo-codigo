/** LOCAL URL  */
// export const baseURL = 'http://127.0.0.1:8080/api';
/** HEROKU URL */
export const baseURL = "https://atenea-dev-api.herokuapp.com/api";

export const complexity = [
  {
    value: "Junior",
    label: "Junior",
  },
  {
    value: "Mid",
    label: "Mid",
  },
  {
    value: "Senior",
    label: "Senior",
  },
];
export const complexity2 = [
  {
    value: "Junior",
    label: "Junior",
  },
  {
    value: "Mid",
    label: "Mid",
  },
  {
    value: "Senior",
    label: "Senior",
  },
  {
    value: "Variada",
    label: "Variada",
  },
];
export const languages = [
  {
    value: "Español",
    label: "Español ",
  },
  {
    value: "Ingles",
    label: "Ingles ",
  },
  {
    value: "Frances",
    label: "Frances ",
  },
  {
    value: "Italiano",
    label: "Italiano ",
  },
  {
    value: "Alemán",
    label: "Alemán ",
  },
  {
    value: "Ruso",
    label: "Ruso ",
  },
  {
    value: "Chino",
    label: "Chino ",
  },
  {
    value: "Portugués",
    label: "Portugués ",
  },
];

export const herramientas = [
  {
    value: "Bizagi",
    label: "Bizagi ",
  },
  {
    value: "Salesforce",
    label: "Salesforce ",
  },
  {
    value: "Sap",
    label: "SAP ",
  },
  {
    value: "Bonita",
    label: "Bonita ",
  },
  {
    value: "Tableau",
    label: "Tableau ",
  },
  {
    value: "Ui Path",
    label: "UI Path ",
  },
  {
    value: "Otro",
    label: "Otro ",
  },
];

export const sino = [
  {
    value: true,
    label: "Si",
  },
  {
    value: false,
    label: "No",
  },
];

export const tecnologias = [
  {
    value: "React JS",
    label: "React JS ",
  },
  {
    value: "React Native",
    label: "React Native ",
  },
  {
    value: "Java",
    label: "Java ",
  },
  {
    value: "HTML5",
    label: "HTML5 ",
  },
  {
    value: "PHP",
    label: "PHP ",
  },
  {
    value: "JavaScript",
    label: "JavaScript ",
  },
  {
    value: "Python",
    label: "Python ",
  },
  {
    value: "Angular",
    label: "Angular ",
  },
  {
    value: "Otros",
    label: "Otros ",
  },
];
function exp(num) {
  const array = [];
  for (var i = 1; i <= num; i++) {
    array.push({ value: i.toString(), label: i.toString() });
  }
  return array;
}
export const anosexp = exp(50);

export const Salario = [
  {
    value: "1",
    label: "de $900.000 a $1.600.000",
  },
  {
    value: "2",
    label: "menor a  $3.000.000",
  },
  {
    value: "3",
    label: "menor a $4.000.000",
  },
];

export const SECRET_TOKEN = "4tenea_Pru3bas#2020_/*";

export const TEST_STATES_DB = {
  DONE: "Realizada",
  UNDONE: "Sin realizar",
  ABORTED: "Abortada",
};

export const ES_MOMENT_LANG = {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: "ene._feb._mar_abr._may_jun_jul._ago_sept._oct._nov._dec.".split(
    "_"
  ),
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sabado".split("_"),
  weekdaysShort: "dom._lun._mar._miér._jue._vier._sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
};

export const RATE_TEST_STRING_VALUES = {
  RATE_DIALOG_TITLE: "¿Está seguro que desea asignar esta calificación?",
  RATE_DIALOG_DESCRIPTION:
    "Si no está seguro de los valores asignados presione el botón de CANCELAR. Puede salir de esta vista y hacerlo en otro momento. No podrá reasignar el puntaje de las preguntas abiertas una vez que los haya asignado. ",
};

/*
 * Al menos un número 0-9
 * Al menos una mayúscula
 * Al menos una minúscula
 * Al menos un carácter especial (.,*!?¿¡/#$%&)
 * Longitud mínima de 8 caracteres
 * No acepta espacios
 */

export const securePasswordRegEx = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,}$/;

export const STATUS_FILTER_VALUES = [
  "Realizada",
  "No realizada",
  "Abortada",
  "Sin calificar",
];

/**
 * INFO: 'info' blue snackbar
 * SUCCESS: 'success' green snackbar
 * ERROR: 'error' red snackbar
 * WARNING: 'warning' orange snackbar
 */

export const SNACKBAR_SEVERITIES = {
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  EXIST: "exist",
};

export const USER_TYPES_LIST = [
  { value: "UsuarioR", label: "Usuario recurso" },
  { value: "UsuarioP", label: "Usuario postulado" },
  { value: "AdminV", label: "Administrador vacante" },
  { value: "Admin", label: "Administrador" },
];

export const USER_TYPES = {
  ADMIN: "Admin",
  ADMIN_V: "AdminV",
  P_USER: "UsuarioP",
  R_USER: "UsuarioR",
};

export const TEST_STATES = {
  GETTING_TEST: "GETTING_TEST",
  OVERVIEW: "OVERVIEW",
  UPDATING_PROCESS: "UPDATING_PROCESS",
  CALCULATING_TIME: "CALCULATING_TIME",
  CHECKING_PROCESS: "CHECKING_PROCESS",
  CHECKING_AVAILABILITY: "CHECKING_AVAILABILITY",
  GENERATING_TEST: "GENERATING_TEST",
  IN_PROCESS: "IN_PROCESS",
  DONE: "DONE",
  ABORTED: "ABORTED",
  TIME_IS_OVER: "TIME_IS_OVER",
  SENDING_RESULTS: "SENDING_RESULTS",
  RETRY_SENDING: "RETRY_SENDING",
};

export const ALERT_TYPES_TEST = {
  UNANSWERED: "UNANSWERED",
  ABORT: "ABORT",
  SEND: "SEND",
};

export const QUESTION_DURATION = {
  OPEN: 6,
  MULTIPLE: 4,
  BINARY: 3,
};

export const QUESTION_TYPES = {
  OPEN: "OPEN",
  MULTIPLE: "MULTIPLE",
  BINARY: "BINARY",
};

export const drawerWidth = 240;
export const PAGE_STATES = {
  LOADING: 0,
  LOADED: 1,
  NOT_FOUND: 2,
  NOT_ELEMENTS_FOUND: 3,
};
export const SNACKBAR_MESSAGES = {
  DELETED_TEST: "Prueba eliminada exitosamente.",
  ERR_DELETING_TEST:
    "Error eliminando la prueba. Verifique su conexión y vuelva a intentarlo.",
  ASSIGNED_TEST: "Pruebas asignadas exitosamente.",
  ERR_ASSIGNING_TEST:
    "Error asignando las pruebas. Si el problema persiste verifique conexión y vuelva a intentarlo.",
  OBTAINED_TESTS: "Pruebas actualizadas exitosamente.",
  ERR_OBTAINING_TESTS:
    "Error obteniendo las pruebas. Verifique su conexión y actualice la página.",
  ERR_OBTAINING_USERS:
    "Error obteniendo los usuarios. Verifique su conexión y actualice la página.",
  ERR_OBTAINING_GROUPS:
    "Error obteniendo los grupos. Verifique su conexión y actualice la página.",
  ATLEAST_ONE_USER: "Seleccione al menos un usuario para asignar la prueba.",
  WRONG_HOURS:
    "La hora de inicio de la prueba debe ser inferior a la de finalización.",
  ERR_CHECKING_AVAILABILITY:
    "Error obteniendo disponibilidad de preguntas, revise su conexión y vuelva a intentarlo.",
  ERR_ASSIGNING_TEST_AVAILABILITY:
    "No hay suficientes preguntas, utilice la  comprobación de disponibilidad.",
  SUCCESS_ADD: "pregunta(s) agregada(s) exitosamente.",
  ERR_ADDING:
    "Error agregando preguntas. Revise su conexión y vuelva a intentarlo.",
  SUCCESS_DELETE: "Pregunta eliminada exitosamente.",
  ERR_DELETING:
    "Error eliminando pregunta. Revise su conexión y vuelva a intentarlo.",
  ERR_OBTAINING_QUESTIONS:
    "Error obteniendo preguntas. Revise su conexión y vuelva a intentarlo.",
  ERR_OBTAINING_VACS:
    "Error obteniendo vacantes. Revise su conexión y vuelva a intentarlo.",
  SUCCESS_EDIT: "Pregunta editada exitosamente.",
  ERR_EDITING:
    "Error editando pregunta. Revise su conexión y vuelva a intentarlo.",
  ERR_OBTAINING_PROCESSES:
    "Error obteniendo procesos. Revise su conexión y vuelva a intentarlo",
  ERR_DELETING_POSTULANTES:
  "Ocurrió un error al eliminar el postulado. Revise su conexión y vuelva a intentarlo",

  SUCCESS_CREATING_KIT: "Kit de pruebas creado exitosamente.",
  ERR_ADDING_KIT:
    "Error creando el kit de pruebas. Revise su conexión y vuelva a intentarlo.",
  ERR_OBTAINING_KITS:
    "Error obteniendo Kits. Revise su conexión y vuelva a intentarlo.",
  ERR_DELETING_KIT:
    "Error eliminando el kit de prueba. Revise su conexión y vuelva a intentarlo.",
  SUCCESS_DELETE_KIT: "Kit eliminada exitosamente.",
  ERR_OTHER_FIELDS: (fields) => {
    return (
      "Hay errores en el(los) campo(s) " +
      fields.join(", ") +
      ". Por favor, llenar estos campos."
    );
  },
};

export const TABS = {
  QUICK: "QUICK",
  CUSTOM: "CUSTOM",
  KIT: "KIT",
};
