let auth:string = "";

export const setToken=(token: string) =>{ auth = token; }

export const getToken=() =>{ return auth; }
