import styled from "styled-components";
import tw from "twin.macro";

export const NavbarWrapper = styled.nav`
  ${tw`h-16  shadow-lg bg-purple-700 absolute top-0 w-full`}
`;

export const NavbarContainer = styled.div`
  ${tw`mx-12 flex justify-between items-center`}
`;

export const RightSection = styled.div`
  ${tw`flex `}
`;

export const Logo = styled.img`
  ${tw`h-16`}
`;

export const CompanyName = styled.h1`
  ${tw`font-bold text-white text-lg ml-2`}
`;

export const LeftSection = styled.div`
  ${tw`flex items-center`}
`;

export const ProfilePic = styled.img`
  ${tw`rounded-full h-16 `}
`;

export const LogoutBtn = styled.button`
  ${tw`border-0 outline-none text-white font-bold p-2 bg-transparent cursor-pointer`}
`;
