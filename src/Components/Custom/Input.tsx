import { FC, InputHTMLAttributes, useState } from "react";
import ErrorCust from "./ErrorCust";
import {
  moreThanThree,
  minValueInput,
  noWhiteSpace,
  maxValueInput,
  startsWithSpace,
} from "../validations/ProductValidation";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  iconButton?: JSX.Element;
  kind?: string;
  minValue?: number;
  maxValue?: number;
  addOnBlur?: () => void;
}

const Input: FC<InputProps> = ({
  name,
  label,
  iconButton,
  kind,
  minValue,
  maxValue,
  value,
  addOnBlur,
  ...rest
}) => {
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleOnBlur = (e: any) => {
    if (name === "productName") {
      if (noWhiteSpace(String(value))) {
        setShowErrorMsg(true);
        setErrorMsg("Can't contain only whitespace");
        e.target.setCustomValidity("!");
      } else if (moreThanThree(String(value))) {
        setShowErrorMsg(true);
        setErrorMsg("Product name character length must be more than 3");
        e.target.setCustomValidity("!");
      } else {
        setShowErrorMsg(false);
        setErrorMsg("");
        e.target.setCustomValidity("");
        addOnBlur && addOnBlur();
      }
    } else if (minValue !== undefined) {
      if (minValueInput(Number(value), minValue)) {
        setShowErrorMsg(true);
        setErrorMsg(
          minValue === 0
            ? `${label} can't be negative`
            : `${label} must be more than ${minValue - 1}`,
        );
        e.target.setCustomValidity("!");
      } else if (maxValue !== undefined) {
        if (maxValueInput(Number(value), maxValue)) {
          setShowErrorMsg(true);
          setErrorMsg(`${label} maximum discount is ${maxValue}`);
          e.target.setCustomValidity("!");
        } else {
          setShowErrorMsg(false);
          setErrorMsg("");
          e.target.setCustomValidity("");
          addOnBlur && addOnBlur();
        }
      } else {
        setShowErrorMsg(false);
        setErrorMsg("");
        e.target.setCustomValidity("");
        addOnBlur && addOnBlur();
      }
    } else {
      if (noWhiteSpace(String(value))) {
        setShowErrorMsg(true);
        setErrorMsg("Can't contain only whitespace");
        e.target.setCustomValidity("!");
      } else if (startsWithSpace(String(value))) {
        setShowErrorMsg(true);
        setErrorMsg(`Can't start ${label} with whitespace`);
        e.target.setCustomValidity("!");
      } else {
        setShowErrorMsg(false);
        setErrorMsg("");
        e.target.setCustomValidity("");
        addOnBlur && addOnBlur();
      }
    }
  };

  const printUnit = () => {
    if (name === "discount") {
      return "%";
    } else if (name === "weight") {
      return "KG";
    } else if (name === "length" || name === "width") {
      return "cm";
    }
    return null;
  };

  const showLabel = () => {
    if (kind === "image") {
      return (
        <div className="flex flex-row-reverse gap-5">
          <label htmlFor={name} className="w-fit">
            {iconButton}
          </label>
          <div className="relative flex items-center">
            <input
              value={value}
              id={name}
              {...rest}
              onBlur={(e) => handleOnBlur(e)}
            ></input>
          </div>
          {showErrorMsg && <ErrorCust message={errorMsg} />}
        </div>
      );
    }

    return (
      <>
        <label
          className={`text-[14px] ${showErrorMsg && "text-red-500"}`}
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            value={name === "discount" ? value : value || ""}
            id={name}
            {...rest}
            onBlur={(e) => handleOnBlur(e)}
          ></input>
          <p className="absolute right-0 mr-5">{printUnit()}</p>
        </div>
        {showErrorMsg && <ErrorCust message={errorMsg} />}
      </>
    );
  };

  return <div className="flex-1">{showLabel()}</div>;
};

export default Input;
