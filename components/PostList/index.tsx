import React, { useEffect } from "react";
import { IPostsData, ISetValue } from "@interfaces/index";
import PostComment from "@components/PostComment";
import LinkTo from "@components/LinkTo";
import { Container, Title, SinglePostWrapper } from "@components/PostList/index.style";

interface IPostList extends ISetValue {
  postsData: IPostsData[];
}

const PostList = ({ postsData, setValue }: IPostList) => {
  useEffect(() => setValue((prevState) => [...prevState, "PostList"]), []);

  return (
    <Container>
      {postsData
        ? postsData.map((post) => {
            const { id, title, comments } = post;

            return (
              <SinglePostWrapper key={id}>
                <LinkTo href={`/posts/${id}`}>
                  <Title id={`${id}`}>
                    #{id} - {title}
                  </Title>
                </LinkTo>
                {comments ? <PostComment comments={comments} setValue={setValue} /> : null}
              </SinglePostWrapper>
            );
          })
        : "No Posts"}
    </Container>
  );
};

export default PostList;
