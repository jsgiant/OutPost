import {useState} from "react"
import { useNavigate } from "react-router-dom";

import { SIGN_IN_PATH } from "../../constants/pathConstants";
import { getToken } from "../../utils/storageUtils";

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
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const logout = async () => {
    setLoading(true)
    await fetch(
      "https://hackout.hafeezulkareem.repl.co/sign-out",
      {
        method: "GET",
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}`}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate(SIGN_IN_PATH)
        }else {
          throw new Error(data.message)
        }
      }).finally(() => {
        setLoading(false)
      })
  }

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
            <LogoutBtn onClick={logout} disabled={loading}>Logout</LogoutBtn>
          </LeftSection>
        )}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default NavBar;
