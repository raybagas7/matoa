import { ILogin } from "../../Interfaces/User";
import LogInForm from "./LogInForm";

interface SignUpFormProps {
  onLogIn: (logInData: ILogin) => void;
  showHide: () => void;
  showHideSignup: string;
}

function LogInLayout({ showHide, showHideSignup, onLogIn }: SignUpFormProps) {
  return (
    <div className={`absolute w-full px-4 tablet:px-[128px] ${showHideSignup}`}>
      <h1 className="mb-[32px] text-[20px] font-semibold tablet:text-[40px]">
        Log In
      </h1>
      <LogInForm onLogIn={onLogIn} />
      <p className="mt-[32px]">
        You don't have an account?{" "}
        <span
          onClick={showHide}
          className="cursor-pointer font-semibold text-primary-text transition-colors hover:text-primary hover:transition"
        >
          Sign up here.
        </span>
      </p>
    </div>
  );
}

export default LogInLayout;
