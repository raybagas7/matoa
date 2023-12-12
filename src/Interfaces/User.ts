export interface ISignUp {
  fullname: string;
  email: string;
  password: string;
  confirmpass?: string;
  role: string;
}
export interface IUser {
  fullname: string;
  email: string;
  password: string;
  role: string;
}
export interface IUserPublic {
  fullname: string;
  email: string;
  role: string;
}
export interface IUserAuthed {
  fullname: string;
  email: string;
  role: string;
  isAuth: boolean;
}
export interface ILogin {
  email: string;
  password: string;
}
