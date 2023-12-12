import { FC, TextareaHTMLAttributes, useState } from "react";
import { noWhiteSpace } from "../validations/ProductValidation";
import ErrorCust from "./ErrorCust";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  addOnBlur?: () => void;
}

const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  value,
  addOnBlur,
  ...rest
}) => {
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleOnBlur = (e: any) => {
    if (noWhiteSpace(String(value))) {
      setShowErrorMsg(true);
      setErrorMsg("Can't contain only whitespace");
      e.target.setCustomValidity("!");
    } else {
      setShowErrorMsg(false);
      setErrorMsg("");
      e.target.setCustomValidity("");
      addOnBlur && addOnBlur();
    }
  };

  return (
    <>
      <div>
        <label
          className={`text-[14px] ${showErrorMsg && "text-red-500"}`}
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          value={value}
          id={name}
          className="mt-2 block h-[160px] w-full  resize-none bg-[#F1F1F1] p-4 outline-none"
          onBlur={(e) => handleOnBlur(e)}
          {...rest}
        />
        {showErrorMsg && <ErrorCust message={errorMsg} />}
      </div>
    </>
  );
};

export default TextArea;
