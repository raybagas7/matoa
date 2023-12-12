import React, { useState } from "react";
import { ISignUp } from "../../Interfaces/User";
import Input from "../../Components/Custom/Input";

interface SignUpFormProps {
  onSignUp: (signUpData: ISignUp) => void;
}
function SignUpForm({ onSignUp }: SignUpFormProps) {
  const [inFullName, setInFullName] = useState<string>("");
  const [inEmail, setInEmail] = useState<string>("");
  const [inPassword, setInPassword] = useState<string>("");
  const [inCPassword, setInCPassword] = useState<string>("");

  const onFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInFullName(event.target.value);
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInPassword(event.target.value);
  };
  const onCPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInCPassword(event.target.value);
  };

  const signUpData = {
    fullname: inFullName,
    email: inEmail,
    password: inPassword,
    confirmpass: inCPassword,
    role: "user",
  };

  const signUpHandler = (event: any) => {
    event.preventDefault();
    onSignUp(signUpData);
  };

  return (
    <form onSubmit={signUpHandler} className={`flex flex-col gap-4 `}>
      <Input
        onChange={onFullNameChange}
        value={inFullName}
        type="text"
        className="w-full rounded-md border-[1px] p-3"
        name="fullname-signup"
        label="Full Name"
        required
      />
      <Input
        onChange={onEmailChange}
        value={inEmail}
        type="email"
        className="w-full rounded-md border-[1px] p-3"
        name="email-signup"
        label="Email"
        required
      />
      <Input
        onChange={onPasswordChange}
        value={inPassword}
        type="password"
        className="w-full rounded-md border-[1px] p-3"
        name="password-signup"
        label="Password"
        required
      />
      <Input
        onChange={onCPasswordChange}
        value={inCPassword}
        type="password"
        className="w-full rounded-md border-[1px] p-3"
        name="confirm-password-signup"
        label="Confirm Password"
        required
      />
      <button
        type="submit"
        className="w-full rounded-md bg-primary p-3 text-white"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
