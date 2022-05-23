import React from "react";
import staticPropsWrapper from "@utils/staticPropsWrapper";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { postsSharedData } from "@utils/posts";
import PostsPageHandler from "@components/pages/PostsPageHandler";
import { ISetValue } from "@interfaces/index";

interface IPostsIndex extends InferGetStaticPropsType<typeof getStaticProps>, ISetValue {}

const PostsIndex = ({ postsData, totalPages, currentPage, setValue }: IPostsIndex) => {
  return (
    <PostsPageHandler postsData={postsData} currentPage={currentPage} totalPages={totalPages} setValue={setValue} />
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const currentPage = 1;
  const { postsData, totalPages } = await postsSharedData(currentPage);

  return staticPropsWrapper(context, {
    props: {
      postsData: postsData || false,
      totalPages,
      currentPage,
    },
  });
}

export default PostsIndex;
