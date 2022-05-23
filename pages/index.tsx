import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import staticPropsWrapper from "@utils/staticPropsWrapper";
import { fetchData } from "@lib/fetchData";
import { POSTS_PATH } from "@lib/constants";
import IndexPageHandler from "@components/pages/IndexPageHandler";
import { ISetValue } from "@interfaces/index";

interface IIndexPage extends InferGetStaticPropsType<typeof getStaticProps>, ISetValue {}

const IndexPage = ({ postsData, setValue }: IIndexPage) => {
  return <IndexPageHandler postsData={postsData} setValue={setValue} />;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const postsData = await fetchData(POSTS_PATH);

  return staticPropsWrapper(context, {
    props: {
      postsData,
    },
  });
}

export default IndexPage;
