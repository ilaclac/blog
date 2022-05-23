import React, { useEffect } from "react";
import PostList from "@components/PostList";
import Pagination from "@components/Pagination";
import { Wrapper } from "@components/PostLayout/index.style";
import { ISetValue } from "@interfaces/index";

export interface IPostsLayout extends ISetValue {
  postsData: [];
  currentPage: number;
  totalPages: number;
}

const PostsLayout = ({ postsData, currentPage, totalPages, setValue }: IPostsLayout) => {
  useEffect(() => setValue((prevState) => [...prevState, "PostsLayout"]), []);

  const nextPageDisabled = currentPage === totalPages;
  const prevPageDisabled = currentPage === 1;

  return (
    <Wrapper>
      <PostList postsData={postsData} setValue={setValue} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        prevPageDisabled={prevPageDisabled}
        nextPageDisabled={nextPageDisabled}
        setValue={setValue}
      />
    </Wrapper>
  );
};

export default PostsLayout;
