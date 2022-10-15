import styled from "styled-components";
import tw from "twin.macro";

export const FeedWrapper = styled.div`
  ${tw`flex flex-col  h-screen justify-center items-center bg-white`}
`;

export const FeedContainer = styled.div`
  ${tw`flex w-full h-full overflow-hidden`}
`;

export const ProfileSection = styled.section`
  ${tw`flex flex-col border border-solid border-gray-200 overflow-auto w-1/4 items-center shadow-lg`}
`;

export const FeedSection = styled.section`
  ${tw`flex flex-col w-1/3 `}
`;

export const ProfilePic = styled.img`
  ${tw`rounded-full h-36 `}
`;

export const UserName = styled.h2`
  ${tw`text-purple-700 font-medium m-0`}
`;

export const UserEmail = styled.p`
  ${tw`text-purple-500 m-0 `}
`;

export const OfferSection = styled.section`
  ${tw`flex flex-col flex-1`}
`;
