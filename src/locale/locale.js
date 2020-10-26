import moment from "moment-timezone";
import { ES_MOMENT_LANG } from "../common/values";

const locale = "es";
moment.tz.setDefault("America/Bogota");
moment.locale(locale, ES_MOMENT_LANG);

export { locale, moment }; 
