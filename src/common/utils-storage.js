export function setSessionKey(key, value) {
  window.sessionStorage.setItem(key, value);
}

export function getSessionKey(key) {
  return window.sessionStorage.getItem(key);
}

export function removeSessionKey(key) {
  return window.sessionStorage.removeItem(key);
}

export function removeAllSessionKeys() {
  return window.sessionStorage.clear();
}

export function setLocalKey(key, value) {
  window.localStorage.setItem(key, value);
}

export function getLocalKey(key) {
  return window.localStorage.getItem(key);
}

export function removeLocalKey(key) {
  window.localStorage.removeItem(key);
}

export function removeAllLocalKeys() {
  window.localStorage.clear();
}

export function removeAllKeys() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}
