import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

import { HOME_PATH, SIGN_IN_PATH } from "../../constants/pathConstants";
import { isSignedIn } from "../../utils/authUtils";

import Input from "../common/Input";
import NavBar from "../NavBar";

import {
  ErrorMsg,
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
  SignUpHeading,
} from "./styledComponents";

const SignUp = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSignedIn()) {
      return navigate(HOME_PATH)
    }
  }, [])

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg(`Password doesn't match`);
      return;
    }
    setErrorMsg("");
    setIsLoading(true);
    await fetch(
      "https://hackout.hafeezulkareem.repl.co/sign-up",
      {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {'Content-Type': 'application/json'}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate(SIGN_IN_PATH)
        }else {
          throw new Error(data.message)
        }
      })
      .catch((error) => {
        setErrorMsg(error.message)
      }).finally(() => {
        setIsLoading(false)
      });
  };

  return (
    <SignUpContainer>
      <NavBar isLoggedIn={false} />
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
        <SignUpBtn type="submit" disabled={isLoading}>
          Sign up
        </SignUpBtn>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
