import { useState } from "react";
import Input from "../common/Input";
import {
  ErrorMsg,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpHeading,
} from "./styledComponents";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword });
    if (password !== confirmPassword) {
      setErrorMsg(`Password Doesn't match`);
    } else {
      setErrorMsg("");
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={onSubmitForm}>
        <SignUpHeading>Sign Up</SignUpHeading>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          required
          value={name}
          onChangeValue={setName}
        />
        <Input
          label="Email ID"
          placeholder="Enter your email id"
          required
          type={"email"}
          value={email}
          onChangeValue={setEmail}
        />
        <Input
          type={"password"}
          label="Create a Password"
          placeholder="Enter a new Password"
          value={password}
          onChangeValue={setPassword}
          minLength={6}
        />
        <Input
          type={"password"}
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeValue={setConfirmPassword}
          minLength={6}
        />
        <SignUpBtn type="submit">Sign up</SignUpBtn>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
