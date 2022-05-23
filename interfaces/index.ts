import React from "react";

export interface ISetValue {
  setValue: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export interface IPostComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface IPost {
  postsData?: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IPostsData extends IPost {
  comments: IPostComment[];
}

export interface IHead {
  title?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: {
    url: string;
    width: number;
    height: number;
  };
  preventIndexing?: boolean;
}
