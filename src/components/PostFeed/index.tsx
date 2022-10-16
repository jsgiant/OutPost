import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { SIGN_IN_PATH } from "../../constants/pathConstants";
import { isSignedIn } from "../../utils/authUtils";
import { getToken } from "../../utils/storageUtils";
import NavBar from "../NavBar";
import Post from "../Post";
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
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)

  //@ts-ignore
  const [user, dispatch] = useContext(UserContext)

  const getProfileDetails = async () => {
    await fetch(
      "https://hackout.hafeezulkareem.repl.co/user",
      {
        method: "GET",
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}`}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const {name, email} = data
          dispatch({type: 'SET_USER_PROFILE', payload: {email, name}})
        }else {
          throw new Error(data.message)
        }
      })
  }

  const getPosts = async () => {
    await fetch(
      "https://hackout.hafeezulkareem.repl.co/travels",
      {
        method: "GET",
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}`}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const {travels} = data
          if (travels !== null) {
            setPosts(travels)
          }
        }else {
          throw new Error(data.message)
        }
      })
  }

  useEffect(() => {
    if (!isSignedIn()) {
      return navigate(SIGN_IN_PATH)
    }
    if (Object.keys(user).length === 0) {
      getProfileDetails()
    }
    getPosts()
  }, [])

  const openCreateModal = () => {
    setShowCreateModal(true)
  }

  const closeCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <FeedWrapper>
      <NavBar openCreateModal={openCreateModal} />
      <FeedContainer>
        <ProfileSection>
          <ProfilePic src="https://ik.imagekit.io/axszharpl/OutPost/user_CK3SYbN_Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665818305793" />
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </ProfileSection>
        <FeedSection>
          <PostList>
            {posts.map((post: any) => <Post key={post.id} postDetails={post} />)}
          </PostList>
        </FeedSection>
      </FeedContainer>
      <PostCreateModal open={showCreateModal} getPosts={getPosts} closeModal={closeCreateModal} />
    </FeedWrapper>
  );
};

export default PostFeed;
