import {
  CompanyName,
  LeftSection,
  Logo,
  LogoutBtn,
  NavbarContainer,
  NavbarWrapper,
  ProfilePic,
  RightSection,
} from "./styledComponents";

type Props = {
  isLoggedIn?: boolean;
};

const NavBar = ({ isLoggedIn = true }: Props) => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <RightSection>
          <Logo
            src={
              "https://ik.imagekit.io/axszharpl/OutPost/outpost-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665817456429"
            }
            alt={"OutPost logo"}
          />
          <CompanyName>OutPost</CompanyName>
        </RightSection>
        {isLoggedIn && (
          <LeftSection>
            <ProfilePic
              src={
                "https://ik.imagekit.io/axszharpl/OutPost/user_CK3SYbN_Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665818305793"
              }
            />
            <LogoutBtn>Logout</LogoutBtn>
          </LeftSection>
        )}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default NavBar;
