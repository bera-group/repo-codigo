import { moment } from "../locale/locale";
import { USER_TYPES } from "./values";

export function shuffle(array) {
  let m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

export const getCurrentDateWithLocale = () => {
  const now = moment();
  const year = now.year();
  const month = now.month();
  const day = now.date();
  const currentDateWithLocale = moment(`${year}-${month + 1}-${day}`).startOf(
    "date"
  );
  return currentDateWithLocale.toISOString();
};

export const getDateWithLocale = (date) => {
  const year = date.year();
  const month = date.month();
  const day = date.date();
  const dateWithLocale = moment(`${year}-${month + 1}-${day}`).tz(
    "America/Bogota"
  );
  return dateWithLocale.toISOString();
};

export const getCurrentFullDateWithLocale = () => {
  return moment().format("LLLL");
};

export const getFormattedDate = (date) => {
  const localeDate = moment(date);
  const dateArray = localeDate.format("LLLL").split(" ");
  const noTimeArray = dateArray.slice(0, dateArray.length - 2);
  const newFormat = noTimeArray.join(" ");
  return newFormat;
};

export const getFormattedTime = (time) => {
  const particularTime = moment(time);
  const formattedTime = particularTime.format("h:mm:ss a");
  return formattedTime;
};

export const getFormattedDuration = (hour, min) => {
  console.log("hora", hour);
  console.log("minuto", min);
  const segundos = min * 60 + hour * 3600;
  console.log("la duración a enviar es ", segundos);
  return segundos;
};

export const getLabelByValue = (objects, value) => {
  const label = objects.filter((obj) => {
    return obj.value === value;
  });
  if (label[0]) {
    return label[0].label;
  } else {
    return value;
  }
};

export const getStringWithCap = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getRouteByUserType = (userType, route) => {
  switch (userType) {
    case USER_TYPES.ADMIN:
      return `/admin/${!route ? "" : route}`;
    case USER_TYPES.ADMIN_V:
      return `/adminv/${!route ? "" : route}`;
    case USER_TYPES.P_USER:
      return `/userp/${!route ? "" : route}`;
    case USER_TYPES.R_USER:
      return `/userr/${!route ? "" : route}`;
    default:
      return "/";
  }
};
