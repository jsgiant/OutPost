import Cookie from "js-cookie";

export const TOKEN = "token";

export function getCookie(key: string) {
   return Cookie.get(key);
}

function setCookie(key: string, value: string) {
   Cookie.set(key, value, {
      expires: 7,
      path: "/",
   });
}

export function getToken() {
   return getCookie(TOKEN);
}
export function setToken(token: string) {
   setCookie(TOKEN, token);
}

export function clearUserSession() {
   Cookie.remove(TOKEN, { path: "/" });
}