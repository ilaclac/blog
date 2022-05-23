import React, { useEffect } from "react";
import { IPost, ISetValue } from "@interfaces/index";
import { Container, Title, StyledRichText } from "@components/SinglePost/index.style";
import { InnerWrapper } from "@components/Layout/index.style";
import theme from "@styles/theme";

interface ISinglePost extends ISetValue {
  postsData: IPost;
}

const SinglePost = ({ postsData, setValue }: ISinglePost) => {
  useEffect(() => setValue((prevState) => [...prevState, "SinglePost"]), []);

  const { title, body } = postsData;
  return (
    <InnerWrapper maxWidth={theme.layout.contentWidth}>
      <Container>
        <Title>{title}</Title>
        <StyledRichText html={body} setValue={setValue} />
      </Container>
    </InnerWrapper>
  );
};

export default SinglePost;
