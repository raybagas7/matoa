import { useContext, useEffect, useState } from "react";
import {
  ILogin,
  ISignUp,
  IUser,
  IUserAuthed,
  IUserPublic,
} from "../../Interfaces/User";
import { getAllUser } from "../../utils/getAllUser";
import { postNewUser } from "../../utils/postNewUser";
import LogInLayout from "./LogInLayout";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { LocalStorage } from "../../utils/LocalStorage";
import SignUpLayout from "./SignUpLayout";

const EntryPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const localStg = new LocalStorage();
  const userAuth: IUserAuthed = JSON.parse(localStg.getUser()!);
  const [showHideLogin, setShowHideLogin] = useState<string>("invisible");
  const [showHideSignup, setShowHideSignup] = useState<string>(
    "animate-default_quantum_bouncing",
  );

  useEffect(() => {
    console.log(userContext.isAuth);

    if (userAuth) {
      if (userAuth.isAuth && userAuth.role === "admin") {
        navigate("/admin");
      }

      if (userAuth.isAuth && userAuth.role === "user") {
        navigate("/");
      }
    }
  }, []);

  if (userAuth) {
    if (userAuth.isAuth) {
      return null;
    }
  }

  const showHide = () => {
    showHideLogin === "animate-default_quantum_bouncing"
      ? setShowHideLogin("animate-fade_out_quantum_bouncing")
      : setShowHideLogin("animate-default_quantum_bouncing");

    showHideSignup === "animate-default_quantum_bouncing"
      ? setShowHideSignup("animate-fade_out_quantum_bouncing")
      : setShowHideSignup("animate-default_quantum_bouncing");
  };

  const onSignUp = async (signUpData: ISignUp) => {
    if (signUpData.password !== signUpData.confirmpass) {
      alert("Confirm Your Password Is Invalid");
    } else {
      const allUser = await getAllUser();
      const checkUser = allUser.filter(
        (user: ISignUp) => user.email === signUpData.email,
      );
      console.log(checkUser);

      if (checkUser.length === 0) {
        const response = await postNewUser(signUpData);
        console.log(response);
      } else {
        alert("User Already Registerd");
      }
    }
  };

  const onLogIn = async (logInData: ILogin) => {
    const allUser: IUser[] = await getAllUser();
    const checkUser: IUser[] = allUser.filter(
      (user: IUser) => user.email === logInData.email,
    );

    if (checkUser.length === 0) {
      alert("Email is not registered");
    } else {
      if (checkUser[0].password === logInData.password) {
        if (checkUser[0].role == "admin") {
          const admin: IUserPublic = {
            fullname: checkUser[0].fullname,
            email: checkUser[0].email,
            role: checkUser[0].role,
          };
          userContext.setUserDataExist(
            checkUser[0].fullname,
            checkUser[0].email,
            checkUser[0].role,
          );
          localStg.setUser(admin, true);
          navigate("/admin");
        } else {
          const admin: IUserPublic = {
            fullname: checkUser[0].fullname,
            email: checkUser[0].email,
            role: checkUser[0].role,
          };
          userContext.setUserDataExist(
            checkUser[0].fullname,
            checkUser[0].email,
            checkUser[0].role as "user",
          );
          localStg.setUser(admin, true);
          navigate("/");
        }
      } else {
        alert("Wrong password");
      }
    }
  };

  return (
    <div className="flex text-primary-text">
      <img
        className="hidden tablet:block tablet:h-[100vh] tablet:w-[50vw] tablet:object-cover"
        src="/watchwithhand.png"
        alt="watch"
      ></img>
      <div className="relative flex h-[100vh] w-full items-center justify-center">
        <div className="absolute right-0 top-0 mr-[24px] mt-[16px] tablet:mr-[32px] tablet:mt-[40px]">
          <img className="tablet:w-[178px]" src="/Matoa.svg" alt="matoa-logo" />
        </div>

        <SignUpLayout
          onSignUp={onSignUp}
          showHide={showHide}
          showHideLogin={showHideLogin}
        />
        <LogInLayout
          onLogIn={onLogIn}
          showHide={showHide}
          showHideSignup={showHideSignup}
        />
      </div>
    </div>
  );
};

export default EntryPage;
