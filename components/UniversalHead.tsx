import React, { useEffect } from "react";
import Head from "next/head";
import { IHead, ISetValue } from "../interfaces";

interface IUniversalHead extends ISetValue {
  metaData: IHead;
}
const UniversalHead = ({ metaData, setValue }: IUniversalHead) => {
  useEffect(() => setValue((prevState) => [...prevState, "UniversalHead"]), []);

  const { title, metaDescription, metaKeywords, ogTitle, ogDescription, ogUrl, ogImage, preventIndexing } =
    metaData || {};

  return (
    <Head>
      {title ? <title>{title}</title> : null}
      {metaDescription ? <meta name="description" content={metaDescription} /> : null}
      {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : null}
      {ogTitle ? <meta property="og:title" content={`${ogTitle}`} key="og:title" /> : null}
      {ogDescription ? <meta property="og:description" content={`${ogDescription}`} key="og:description" /> : null}
      {ogUrl ? <meta property="og:url" content={`${ogUrl}`} key="og:url" /> : null}
      {ogImage ? (
        <>
          <meta property="og:image" content={`${ogImage.url}`} key="image" />
          <meta property="og:image:width" content={`${ogImage.width}`} key="og:image:width" />
          <meta property="og:image:height" content={`${ogImage.height}`} key="og:image:height" />
        </>
      ) : null}
      <meta property="og:type" content="Website" />
      {preventIndexing ? (
        <>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </>
      ) : null}
    </Head>
  );
};

export default UniversalHead;
