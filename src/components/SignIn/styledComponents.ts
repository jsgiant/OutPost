import styled from "styled-components";
import tw from "twin.macro";
import {
  SignUpBtn,
  SignUpContainer,
  SignUpForm,
} from "../SignUp/styledComponents";

export const SignInContainer = styled(SignUpContainer)``;

export const SignInHeading = styled.h1`
  ${tw`mb-4`}
`;

export const SignInForm = styled(SignUpForm)``;

export const SignInBtn = styled(SignUpBtn)``;

export const ErrorMsg = styled.p`
  ${tw`text-red-600 text-center`}
`;
