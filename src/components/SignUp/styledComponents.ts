import styled from "styled-components";
import tw from "twin.macro";

export const SignUpContainer = styled.div`
  ${tw`flex flex-col h-screen justify-center items-center bg-purple-800`}
`;

export const SignUpHeading = styled.h1`
  ${tw`mb-4`}
`;

export const SignUpForm = styled.form`
  ${tw`bg-white text-center rounded-lg py-8 px-5 shadow-xl flex items-center flex-col `};
  width: 400px;
`;

export const SignUpBtn = styled.button`
  ${tw`bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer outline-none border-0`}
`;

export const ErrorMsg = styled.p`
  ${tw`text-red-600 text-center`}
`;
