import jwt from "jwt-simple";
import moment from "moment";
import { SECRET_TOKEN } from "../common/values";

export default function decodeToken(token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, SECRET_TOKEN);
      if (payload.exp <= moment().unix()) {
        resolve({
          status: 401,
          message: "El token ha expirado",
        });
      }
      resolve(payload.sub);
    } catch (err) {
      reject({
        status: 500,
        message: "Ivalid Token",
      });
    }
  });
  return decoded;
}
