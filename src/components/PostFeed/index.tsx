import NavBar from "../NavBar";
import {
  FeedContainer,
  FeedSection,
  FeedWrapper,
  ProfilePic,
  ProfileSection,
  UserEmail,
  UserName,
} from "./styledComponents";

const PostFeed = () => {
  return (
    <FeedWrapper>
      <NavBar />
      <FeedContainer>
        <ProfileSection>
          <ProfilePic src="https://ik.imagekit.io/axszharpl/OutPost/user_CK3SYbN_Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665818305793" />
          <UserName>Anil Peddireddy</UserName>
          <UserEmail>anil@mail.com</UserEmail>
        </ProfileSection>
        <FeedSection></FeedSection>
      </FeedContainer>
    </FeedWrapper>
  );
};

export default PostFeed;
