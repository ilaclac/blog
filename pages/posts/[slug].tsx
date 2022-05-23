import React, { useEffect } from "react";
import UniversalHead from "@components/UniversalHead";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import staticPropsWrapper from "@utils/staticPropsWrapper";
import { fetchData } from "@lib/fetchData";
import { POSTS_PATH } from "@lib/constants";
import SinglePost from "@components/SinglePost";
import { IPost, ISetValue } from "@interfaces/index";

interface IPostBySlug extends InferGetStaticPropsType<typeof getStaticProps>, ISetValue {}

const PostBySlug = ({ postsData, setValue }: IPostBySlug) => {
  useEffect(() => setValue((prevState) => [...prevState, "PostBySlug"]), []);

  const metaData = {
    title: "bla",
  };

  return (
    <div style={{ height: "30vh" }}>
      <UniversalHead metaData={metaData} setValue={setValue} />
      <SinglePost postsData={postsData} setValue={setValue} />
    </div>
  );
};
export async function getStaticPaths() {
  const postsData = await fetchData(`${POSTS_PATH}`);

  const paths = postsData?.map((post: IPost) => ({
    params: { slug: post.id.toString() },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const postId = parseInt(context.params?.slug as string, 10);

  const getSinglePost = await fetchData(`${POSTS_PATH}?id=${postId}`);

  const postsData = getSinglePost.reduce(
    (acc: any, val: IPost) => ({
      userId: val.userId,
      id: val.id,
      title: val.title,
      body: val.body,
    }),
    {}
  );

  return staticPropsWrapper(context, {
    props: {
      postsData,
    },
  });
}

export default PostBySlug;
