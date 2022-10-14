import styled from "styled-components";
import tw from "twin.macro";

export const InputContainer = styled.div`
  ${tw`flex flex-col items-start`}
`;

export const Label = styled.label`
  ${tw`text-gray-500 font-medium text-sm mb-1`}
`;

export const StyledInput = styled.input`
  ${tw`border-gray-300 mb-4 w-full border-solid border rounded h-8 px-2 focus:shadow-lg focus:border-purple-500 outline-none focus:border-2`}
  width: 350px;
`;
