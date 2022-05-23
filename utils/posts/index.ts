import { fetchData } from "@lib/fetchData";
import { POSTS_PER_PAGE, POSTS_PATH, COMMENTS_PATH } from "@lib/constants";
import { IPost, IPostComment } from "@interfaces/index";

interface IPostsSharedData {
  postsData: [];
  totalPages: number;
}

export const getNameFromEmail = (name: string) => {
  return name.split("@")[0];
};

export const postsSharedData = async (currentPage: number): Promise<IPostsSharedData> => {
  const getAllPosts = await fetchData(POSTS_PATH);
  const totalPages = Math.ceil(getAllPosts?.length / POSTS_PER_PAGE);

  let slicedPostsWithComments;

  if (currentPage !== 0) {
    const offset = (currentPage - 1) * POSTS_PER_PAGE;
    const slicedPosts = getAllPosts?.slice(offset).slice(0, POSTS_PER_PAGE);
    const postCommentIds = slicedPosts?.map((post: IPost) => post.id);
    const slicedPostsComments: IPostComment[] = await fetchData(
      `${COMMENTS_PATH}?${postCommentIds?.map((commentId: number) => `postId=${commentId}`).join("&")}`
    );

    slicedPostsWithComments = slicedPosts?.map((post: IPost) => ({
      ...post,
      comments: [...slicedPostsComments.filter((comment) => comment.postId === post.id)],
    }));
  }

  return { postsData: slicedPostsWithComments, totalPages };
};
