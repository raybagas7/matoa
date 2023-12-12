import SignUpForm from "./SignUpForm";
import { ISignUp } from "../../Interfaces/User";

interface SignUpFormProps {
  onSignUp: (signUpData: ISignUp) => void;
  showHide: () => void;
  showHideLogin: string;
}

function SignUpLayout({ onSignUp, showHide, showHideLogin }: SignUpFormProps) {
  return (
    <div className={`absolute w-full px-4 tablet:px-[128px] ${showHideLogin}`}>
      <h1 className="mb-[32px] text-[20px] font-semibold tablet:text-[40px]">
        Sign Up
      </h1>
      <SignUpForm onSignUp={onSignUp} />
      <p className="mt-[32px]">
        Have an account?{" "}
        <span
          onClick={showHide}
          className="cursor-pointer font-semibold text-primary-text transition-colors hover:text-primary hover:transition"
        >
          Log In Here.
        </span>
      </p>
    </div>
  );
}

export default SignUpLayout;
