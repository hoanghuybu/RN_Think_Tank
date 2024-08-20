export const ROUTE_KEY = createEnum({
  //#region auth route
  login: 'login',
  //#endregion

  //#region home route
  home: 'home'
  //#endregion
})

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o
}
