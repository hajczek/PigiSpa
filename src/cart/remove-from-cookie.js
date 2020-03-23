/**
 * @description Remove all from cookie after clicked btn 'Kupuje i place' in basket
 * @param  {String} name Name of key in cookie
 */
export function removeFromCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
