import styled from "styled-components";
import tw from "twin.macro";

export const SubmitButton = styled.button`
    ${tw`
        mt-4 bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer outline-none border-0 disabled:opacity-50 disabled:cursor-wait
    `}
`

export const ErrorMessage = styled.p`
    ${tw`
        text-red-600
    `}
`