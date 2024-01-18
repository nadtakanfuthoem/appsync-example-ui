/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Post = {
  __typename: "Post",
  id: string,
  author?: string | null,
  title?: string | null,
  content?: string | null,
  ups: number,
  downs: number,
  version: number,
};

export type AddPostMutationVariables = {
  author: string,
  title: string,
  content: string,
};

export type AddPostMutation = {
  addPost:  {
    __typename: "Post",
    id: string,
    author?: string | null,
    title?: string | null,
    content?: string | null,
    ups: number,
    downs: number,
    version: number,
  },
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    author?: string | null,
    title?: string | null,
    content?: string | null,
    ups: number,
    downs: number,
    version: number,
  } | null,
};

export type SayHelloQueryVariables = {
  name?: string | null,
};

export type SayHelloQuery = {
  sayHello?: string | null,
};

export type SayGoodbyeQueryVariables = {
  name?: string | null,
};

export type SayGoodbyeQuery = {
  sayGoodbye?: string | null,
};

export type OnCreatePostSubscriptionVariables = {
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    author?: string | null,
    title?: string | null,
    content?: string | null,
    ups: number,
    downs: number,
    version: number,
  } | null,
};
