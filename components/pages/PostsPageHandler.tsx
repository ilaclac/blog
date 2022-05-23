import UniversalHead from "@components/UniversalHead";
import PostsLayout, { IPostsLayout } from "@components/PostLayout";
import { InnerWrapper } from "@components/Layout/index.style";
import React, { useEffect } from "react";
import theme from "@styles/theme";
import { Container } from "@components/pages/IndexPageHandler/index.style";
import { ISetValue } from "@interfaces/index";

const metaData = {
  title: "Posts page",
  metaDescription: "Index page for posts",
};

interface IPostsPageHandler extends IPostsLayout, ISetValue {}

const PostsPageHandler = ({ postsData, currentPage, totalPages, setValue }: IPostsPageHandler) => {
  useEffect(() => setValue((prevState) => [...prevState, "PostsPageHandler"]), []);
  return (
    <>
      {postsData ? (
        <InnerWrapper maxWidth={theme.layout.contentWidth}>
          <UniversalHead metaData={metaData} setValue={setValue} />
          <PostsLayout postsData={postsData} currentPage={currentPage} totalPages={totalPages} setValue={setValue} />
        </InnerWrapper>
      ) : (
        <Container>
          <h1>Fetch posts failed</h1>
        </Container>
      )}
    </>
  );
};

export default PostsPageHandler;
