import { InputHTMLAttributes, useState } from "react";
import { InputContainer, StyledInput, Label } from "./styledComponents";

interface Props extends InputHTMLAttributes<any> {
  label?: string;
  value?: string;
  placeholder?: string;
  isRequired?: boolean;
  onChangeValue?: (value: string) => void;
}

const Input = (props: Props) => {
  const {
    label,
    value: defaultValue,
    onChange,
    placeholder,
    isRequired,
    onChangeValue,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue ?? "");

  const handleOnChange = (e: any) => {
    if (e.target.value.trim().length !== 0) {
      setValue(e.target.value);
      onChangeValue && onChangeValue(e.target.value);
    } else {
      setValue("");
      onChangeValue && onChangeValue("");
    }
  };

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <StyledInput
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        required={isRequired}
        {...others}
      />
    </InputContainer>
  );
};

export default Input;
