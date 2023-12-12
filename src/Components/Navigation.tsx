import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils/LocalStorage";

const Navigation = () => {
  const navigate = useNavigate();
  const localStg = new LocalStorage();
  let htmlTag = document.getElementById("matoa-app");

  const toggleDark = () => {
    htmlTag?.classList.toggle("dark");
  };

  const onLogout = () => {
    localStg.removeUser();
    navigate("/entry");
  };
  return (
    <div className="fixed flex h-[100vh] w-[22vw] flex-col items-center justify-between bg-secondary">
      <div>
        <h1 className="mt-10 text-[32px] underline decoration-primary">
          Matoa Admin
        </h1>
        <nav>
          <ul className="aside-navigation mt-[34px] space-y-5 text-center">
            <li className="text-primary">PRODUCT</li>
            <li>REVENUE</li>
            <li>CATEGORIES</li>
          </ul>
        </nav>
        {/* <button onClick={toggleDark}>DARKLIGHT</button> */}
      </div>
      <button
        onClick={onLogout}
        className="mb-[43px] h-[52px] w-[221px] cursor-pointer border-2 border-primary text-[24px] text-primary transition-colors hover:bg-primary hover:text-white hover:transition-colors"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Navigation;
