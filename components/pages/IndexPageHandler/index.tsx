import React, { useEffect, useState } from "react";
import SearchBar from "@components/SearchBar";
import { IPost, ISetValue } from "@interfaces/index";
import { Container } from "@components/pages/IndexPageHandler/index.style";
import SinglePost from "@components/SinglePost";
import { PostContext } from "@context/PostContext";
import indexText from "@public/static/IndexText.md";
import RichText from "@components/RichText";

interface IIndexPageHandler extends ISetValue {
  postsData: IPost[];
}

const IndexPageHandler = ({ postsData, setValue }: IIndexPageHandler) => {
  useEffect(() => setValue((prevState) => [...prevState, "IndexPageHandler"]), []);

  const [activePost, setActivePost] = useState({});

  const filteredTitles = postsData?.map((post) => post.title);
  const filteredPost = postsData
    ?.filter((post) => post.title === activePost)
    .reduce(
      (acc: any, val) => ({
        userId: val.userId,
        id: val.id,
        title: val.title,
        body: val.body,
      }),
      {}
    );

  return (
    <PostContext.Provider value={[activePost, setActivePost]}>
      <Container>
        {postsData ? (
          <>
            <RichText html={indexText} setValue={setValue} />
            <SearchBar suggestions={filteredTitles} setValue={setValue} />
            <SinglePost postsData={filteredPost} setValue={setValue} />
          </>
        ) : (
          <Container>
            <h1>Fetch posts failed</h1>
          </Container>
        )}
      </Container>
    </PostContext.Provider>
  );
};

export default IndexPageHandler;
