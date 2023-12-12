import React, { useState } from "react";
import Input from "../../Components/Custom/Input";
import { ILogin } from "../../Interfaces/User";

interface SignUpFormProps {
  onLogIn: (logInData: ILogin) => void;
}
function LogInForm({ onLogIn }: SignUpFormProps) {
  const [inEmail, setInEmail] = useState<string>("");
  const [inPassword, setInPassword] = useState<string>("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInPassword(event.target.value);
  };

  const logInData = {
    email: inEmail,
    password: inPassword,
    role: "user",
  };

  const logInHandler = (event: any) => {
    event.preventDefault();
    onLogIn(logInData);
  };

  return (
    <form onSubmit={logInHandler} className={`flex flex-col gap-4 `}>
      <Input
        onChange={onEmailChange}
        value={inEmail}
        type="email"
        className="w-full rounded-md border-[1px] p-3"
        name="email-login"
        label="Email"
        required
      />
      <Input
        onChange={onPasswordChange}
        value={inPassword}
        type="password"
        className="w-full rounded-md border-[1px] p-3"
        name="password-login"
        label="Password"
        required
      />
      <button
        type="submit"
        className="w-full rounded-md bg-primary p-3 text-white"
      >
        Log In
      </button>
    </form>
  );
}

export default LogInForm;
