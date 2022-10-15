import styled from "styled-components";
import tw from "twin.macro";

export const PostContainer = styled.div`
  ${tw`flex flex-col shadow-lg rounded border-gray-200 p-6 w-full mb-4`}
`;

export const PostHeader = styled.div`
  ${tw`flex flex-col`}
`;

export const VocationName = styled.h3`
  ${tw`font-medium m-0`}
`;

export const UserPic = styled.img`
  ${tw`rounded-full h-16 `}
`;

export const UserName = styled.p`
  ${tw`text-xs m-0 text-gray-500 font-medium`}
`;

export const Section = styled.div`
  ${tw`flex flex-col mt-2`}
`;

export const SectionHeading = styled.p`
  ${tw`font-medium m-0`}
`;

export const SectionDetail = styled.p`
  ${tw`m-0 mt-2 font-medium text-gray-500 text-sm`}
`;

export const DetailsContainer = styled.div`
  ${tw`flex justify-between items-center mb-4`}
`;

export const RequestBtn = styled.button`
  ${tw`bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer outline-none border-0 disabled:opacity-50 disabled:cursor-wait`}
`;

export const TagContainer = styled.div`
  ${tw`flex items-center`}
`;
export const Tag = styled.p`
  ${tw`text-center m-0 text-xs font-medium text-gray-500 ml-1`}
`;
