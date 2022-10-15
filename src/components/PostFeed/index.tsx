import NavBar from "../NavBar";
import PostCreateModal from "../PostCreateModal";
import {
  FeedContainer,
  FeedSection,
  FeedWrapper,
  PostList,
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
        <FeedSection>
          <PostList>{/*TODO: Render the list here */}</PostList>
        </FeedSection>
      </FeedContainer>
      <PostCreateModal />
    </FeedWrapper>
  );
};

export default PostFeed;
