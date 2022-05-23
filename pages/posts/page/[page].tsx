import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { postsSharedData } from "@utils/posts";
import staticPropsWrapper from "@utils/staticPropsWrapper";
import PostsPageHandler from "@components/pages/PostsPageHandler";
import { ISetValue } from "@interfaces/index";

interface IPostsPage extends InferGetStaticPropsType<typeof getStaticProps>, ISetValue {}

const PostsPage = ({ postsData, totalPages, currentPage, setValue }: IPostsPage) => {
  return (
    <PostsPageHandler postsData={postsData} currentPage={currentPage} totalPages={totalPages} setValue={setValue} />
  );
};

export async function getStaticPaths() {
  const { totalPages } = await postsSharedData(0);

  const paths = [];
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const currentPage = parseInt(context.params?.page as string, 10);
  const { postsData, totalPages } = await postsSharedData(currentPage);

  return staticPropsWrapper(context, {
    props: {
      postsData: postsData || false,
      totalPages,
      currentPage,
    },
  });
}

export default PostsPage;
