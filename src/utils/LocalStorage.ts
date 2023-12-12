import { IUserPublic } from "../Interfaces/User";

export class LocalStorage {
  private userDataKey: string;
  constructor() {
    this.userDataKey = "USER_DATA";
  }

  setUser(userData: IUserPublic, isAuth: boolean) {
    const data = {
      fullname: userData.fullname,
      email: userData.email,
      role: userData.role,
      isAuth,
    };
    localStorage.setItem(this.userDataKey, JSON.stringify(data));
  }

  getUser() {
    return localStorage.getItem(this.userDataKey);
  }

  removeUser() {
    localStorage.removeItem(this.userDataKey);
  }
}
