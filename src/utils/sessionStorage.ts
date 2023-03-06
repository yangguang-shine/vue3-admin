// session 存储公共方法
export function setSessionData(key: string, value: any) {
  let stringifyValue = value;
  try {
    stringifyValue = JSON.stringify(stringifyValue);
  } catch (e) {
    console.log(e);
  }
  window.sessionStorage.setItem(key, stringifyValue);
}
export function getSessionData(key: string) {
  let parseValue: any = window.sessionStorage.getItem(key);
  try {
    parseValue = JSON.parse(parseValue);
  } catch (e) {
    console.log(e);
  }
  return parseValue;
}
