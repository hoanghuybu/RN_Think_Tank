export const ROUTE_KEY = createEnum({
  //#region auth route
  login: "login",
  welcome: "welcome",
  register: "register",
  onboarding: "onboarding",
  //#endregion

  //#region home route
  home: "home"
  //#endregion
});

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}
