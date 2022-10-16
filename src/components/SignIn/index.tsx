import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../App";

import { HOME_PATH } from "../../constants/pathConstants";
import { setToken } from "../../utils/storageUtils";

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
  const navigate = useNavigate()
  //@ts-ignore
  const [user, dispatch] = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm =async (e: any) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);
    await fetch(
      "https://hackout.hafeezulkareem.repl.co/sign-in",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {'Content-Type': 'application/json'}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const {token, name} = data
          dispatch({type: 'SET_USER_PROFILE', payload: {email, name}})
          setToken(token)
          navigate(HOME_PATH)
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
    <SignInContainer>
      <NavBar />
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

        <SignInBtn type="submit" disabled={isLoading}>Sign In</SignInBtn>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
