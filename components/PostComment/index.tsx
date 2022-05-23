import React, { useEffect, useState } from "react";
import { IPostComment, ISetValue } from "@interfaces/index";
import { Title, Paragraph, StyledRichText, ContentContainer, Column } from "@components/PostComment/index.style";
import Button from "@components/Button";
import { getNameFromEmail } from "@utils/posts";

interface IPostCommentComponent extends ISetValue {
  comments: IPostComment[];
}

const PostComment = ({ comments, setValue }: IPostCommentComponent) => {
  useEffect(() => setValue((prevState) => [...prevState, "PostComment"]), []);

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Title>People commented:</Title>
      {!showMore ? (
        <>
          <ContentContainer>
            <Column>
              <Paragraph>{getNameFromEmail(comments[0].email)}:</Paragraph>
            </Column>
            <Column>
              <StyledRichText html={comments[0].body} setValue={setValue} />
            </Column>
          </ContentContainer>
          <Button onClick={() => setShowMore(true)}>View more comments</Button>
        </>
      ) : (
        <>
          {comments.map((comment) => {
            const userName = getNameFromEmail(comment.email.split("@")[0]);
            return (
              <ContentContainer key={comment.id}>
                <Column>
                  <Paragraph>{userName}:</Paragraph>
                </Column>
                <Column>
                  <StyledRichText html={comment.body} setValue={setValue} />
                </Column>
              </ContentContainer>
            );
          })}
        </>
      )}
    </>
  );
};

export default PostComment;
