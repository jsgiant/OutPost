import styled from "styled-components";
import tw from "twin.macro";

export const SubmitButton = styled.button`
    ${tw`
        mt-4 bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer outline-none border-0 disabled:opacity-50 disabled:cursor-wait
    `}
`

export const CloseButtonContainer = styled.div`
    ${tw`
        flex justify-end
    `}
`

export const CloseButton = styled.button`
    ${tw`
        border-0 outline-none font-bold p-0 bg-transparent cursor-pointer
    `}
`

export const ErrorMessage = styled.p`
    ${tw`
        text-red-600
    `}
`