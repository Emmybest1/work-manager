declare module 'MyTypes' {
  export type User = {
    email: string;
  };

  export type RegisterUserStarted = {
    type: string;
    payload?: undefined;
  };

  export type RegisterUser = {
    type: string;
    payload?: undefined;
  };

  export type RegisterUserSuccessfull = {
    type: string;
    payload: string;
  };

  export type RegisterUserFailed = {
    type: string;
    payload: string;
  };
}
