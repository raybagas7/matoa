import React, { SetStateAction, createContext, useState } from "react";

export type RoleMatoa = "user" | "admin" | null;
export type StrNul = string | null;
type UserContextType = {
  fullName: StrNul;
  email: StrNul;
  role: RoleMatoa;
  isAuth: boolean;
  setFullName: React.Dispatch<SetStateAction<StrNul>>;
  setEmail: React.Dispatch<SetStateAction<StrNul>>;
  setRole: React.Dispatch<SetStateAction<"user" | "admin" | null>>;
  setIsAuth: React.Dispatch<SetStateAction<boolean>>;
  setUserDataExist: (
    userFullName: StrNul,
    userEmail: StrNul,
    userRole: RoleMatoa,
  ) => void;
};

interface UserContextProps {
  children: React.ReactNode;
}

const initialState: UserContextType = {
  fullName: null,
  email: null,
  role: null,
  isAuth: false,
  setFullName: () => {},
  setEmail: () => {},
  setRole: () => {},
  setIsAuth: () => {},
  setUserDataExist: () => {},
};

export const UserContext = createContext<UserContextType>(initialState);

function UserContextProvider({ children }: UserContextProps) {
  const [fullName, setFullName] = useState<StrNul>(null);
  const [email, setEmail] = useState<StrNul>(null);
  const [role, setRole] = useState<RoleMatoa>(null);
  const [isAuth, setIsAuth] = useState(false);
  const setUserDataExist = (
    userFullName: StrNul,
    userEmail: StrNul,
    userRole: RoleMatoa,
  ) => {
    setFullName(userFullName);
    setEmail(userEmail);
    setRole(userRole);
    setIsAuth(true);
  };
  return (
    <UserContext.Provider
      value={{
        fullName,
        email,
        role,
        isAuth,
        setFullName,
        setEmail,
        setRole,
        setIsAuth,
        setUserDataExist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
