import "./index.css";
import {ChangeEvent} from "react";

interface IInputProps {
  label?: string;
  name?: string;
  value: string;
  setValue: (val: string) => void;
  placeholder: string;
  inputType?: string;
}

const Input = ({
  label,
  name,
  value,
  setValue,
  placeholder,
  inputType='text',
}: IInputProps) => {
  return (
    <div className="text-field">
      <label className="text-field-label" htmlFor={name}>
        {label}:
      </label>
      <input
        className="text-field-input"
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(val: ChangeEvent<HTMLInputElement>) => setValue(val.target.value)}
      />
    </div>
  );
};

export default Input;
