export enum ReduxActionType {
  AUTH_LOGIN = "[auth] Login",
  authLogout = "[auth] Logout",
  authStartRegister = "[auth] Start Register",
  authStartStartTokenRenew = "[auth] Start token renew",
  authCheckingFinish = "[auth] Finish checking login state",

  eventAddNew = "[event] Add event",
  eventsLoad = "[event] Load events",
  eventDelete = "[event] Delete event",
  eventUpdate = "[event] Update event",
  eventAddUser = "[event] Add user ",
  eventDeleteUser = "[event] Delete user",
  eventSetActive = "[event] Set active",
  eventUpdateActive = "[event] Set active",
  eventUnsetActive = "[event] Unset active",
  eventLogout = "[event] Unset active",
};
