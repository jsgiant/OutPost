import { TiArrowRightThick } from "react-icons/ti";
import { IoMdMan } from "react-icons/io";
import { MdOutlineFamilyRestroom } from "react-icons/md";

import {
  PostContainer,
  PostHeader,
  VocationName,
  UserName,
  Section,
  SectionHeading,
  SectionDetail,
  DetailsContainer,
  RequestBtn,
  TagContainer,
  Tag,
} from "./styledComponents";

type Props = {
  postDetails: {
    id: string;
    email: string;
    name: string;
    duration: {
      from: string;
      to: string;
    };
    from: string;
    to: string;
    type: string;
    requests: any;
  };
};

const Post = ({ postDetails }: Props) => {
  const {
    name,
    duration: { from, to },
    from: fromCity,
    to: toCity,
    type,
  } = postDetails;
  return (
    <PostContainer>
      <PostHeader>
        <VocationName>{name}</VocationName>
        <UserName>with Anil Peddireddy</UserName>
      </PostHeader>
      <Section>
        <SectionHeading>Duration</SectionHeading>
        <DetailsContainer>
          <SectionDetail>{from}</SectionDetail>
          <TiArrowRightThick color="#9333EA" />
          <SectionDetail>{to}</SectionDetail>
        </DetailsContainer>
      </Section>
      <Section>
        <SectionHeading>Location</SectionHeading>
        <DetailsContainer>
          <SectionDetail> {fromCity}</SectionDetail>
          <TiArrowRightThick color="#9333EA" />
          <SectionDetail> {toCity}</SectionDetail>
        </DetailsContainer>
      </Section>
      <DetailsContainer>
        <TagContainer>
          {type === "SINGLE" ? (
            <>
              <IoMdMan color="#9333EA" />
              <Tag>Single</Tag>
            </>
          ) : (
            <>
              <MdOutlineFamilyRestroom color="#6a12bd" />
              <Tag>Family</Tag>
            </>
          )}
        </TagContainer>
        <RequestBtn>Request</RequestBtn>
      </DetailsContainer>
    </PostContainer>
  );
};

export default Post;
