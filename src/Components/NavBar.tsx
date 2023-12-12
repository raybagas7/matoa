import React, { useState, useEffect, useRef } from "react";
import MatoaLogo from "./SVG/MatoaLogo";
import { LiaUser } from "react-icons/lia";
import { LocalStorage } from "../utils/LocalStorage";
import { IUserAuthed } from "../Interfaces/User";
import { MdOutlineAdminPanelSettings, MdLogin, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const localStg = new LocalStorage();
  const userAuth: IUserAuthed = JSON.parse(localStg.getUser()!);
  const [scrollY, setScrollY] = useState(0);
  const firstName = userAuth?.fullname.split(" ");
  const imageRef = useRef<any>();

  useEffect(() => {
    const onScrollNav = () => {
      if (window.scrollY < 250) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", onScrollNav);
    return () => {
      window.removeEventListener("scroll", onScrollNav);
    };
  }, [imageRef]);

  const onLogout = () => {
    localStg.removeUser();
    navigate("/entry");
  };

  const bgNavClass =
    scrollY >= 100
      ? "transition-colors bg-primary duration-1000"
      : "transition-colors duration-1000";

  const textColor = scrollY >= 100 ? "text-white" : "text-primary-text";

  const hoverBg =
    scrollY >= 100 ? "hover:bg-white/20" : "hover:bg-primary hover:text-white";

  return (
    <div
      className={`fixed top-0 z-50 h-[5.626rem] w-full px-[10vw] ${bgNavClass}`}
    >
      <div className="flex h-full items-center justify-between">
        <MatoaLogo
          className={`transition tablet:w-[178px]
        ${scrollY >= 100 ? "fill-white" : "fill-matoa-logo"}`}
        />
        <nav className={`navbar flex gap-[2rem] transition ${textColor}`}>
          <li className={`${hoverBg}`}>Home</li>
          <li className={`${hoverBg}`}>Watches</li>
          <li className={`${hoverBg}`}>News</li>
          {userAuth ? (
            <>
              {userAuth.role === "admin" ? (
                <li
                  onClick={() => navigate("/admin")}
                  className={`${hoverBg} flex items-center justify-center`}
                >
                  <MdOutlineAdminPanelSettings className="h-5 w-5" />
                  <p>Admin</p>
                </li>
              ) : (
                <li className={`${hoverBg} flex items-center justify-center`}>
                  <LiaUser className="h-5 w-5" />
                  <p>{firstName[0]}</p>
                </li>
              )}
              <li
                ref={imageRef}
                onClick={onLogout}
                className={`${hoverBg} flex items-center justify-center`}
              >
                <p>Logout</p>
                <MdLogout />
              </li>
            </>
          ) : (
            <li
              onClick={() => navigate("/entry")}
              className={`${hoverBg} flex items-center justify-center gap-2`}
            >
              <p>Login</p>
              <MdLogin className="h-5 w-5" />
            </li>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
