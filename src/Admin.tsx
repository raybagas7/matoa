import { Outlet } from "react-router-dom";
import { LocalStorage } from "./utils/LocalStorage";
import { IUserAuthed } from "./Interfaces/User";
import { useEffect, useState } from "react";
import ForbiddenPage from "./Redirect/ForbiddenPage";

function Admin() {
  const localStg = new LocalStorage();
  const userAuth: IUserAuthed = JSON.parse(localStg.getUser()!);
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const [initialize, setInitialize] = useState<boolean>(true);

  useEffect(() => {
    if (userAuth) {
      if (userAuth.isAuth && userAuth.role !== "admin") {
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
    }

    setInitialize(false);
  }, [userAuth]);

  if (initialize) {
    return null;
  }
  if (!isAdmin) {
    return <ForbiddenPage />;
  }

  return <Outlet />;
}

export default Admin;
