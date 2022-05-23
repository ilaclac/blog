import merge from "lodash/merge";
import { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from "next";

const staticPropsWrapper = async <F>(
  context: GetStaticPropsContext,

  customProps?: GetStaticPropsResult<F>
): Promise<GetStaticPropsResult<F>> => {
  const propsResult = {
    revalidate: Number(process.env.REVALIDATE_TIME) || 3600,
  };

  return merge(customProps, propsResult);
};

export default staticPropsWrapper;

export type StaticPropsWrapperType = InferGetStaticPropsType<typeof staticPropsWrapper>;
