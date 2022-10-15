import { useState } from "react";
import Input from "../common/Input";
import NavBar from "../NavBar";
import {
  ErrorMsg,
  SignInBtn,
  SignInContainer,
  SignInForm,
  SignInHeading,
} from "./styledComponents";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    console.log({ email, password });
    //TODO: Need to integrate the API
  };

  return (
    <SignInContainer>
      <NavBar isLoggedIn={false} />
      <SignInForm onSubmit={onSubmitForm}>
        <SignInHeading>Sign In</SignInHeading>

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
          label="Password"
          placeholder="Enter your Password"
          value={password}
          onChangeValue={setPassword}
          minLength={6}
        />

        <SignInBtn type="submit">Sign In</SignInBtn>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
