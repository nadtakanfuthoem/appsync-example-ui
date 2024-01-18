/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addPost = /* GraphQL */ `mutation AddPost($author: String!, $title: String!, $content: String!) {
  addPost(author: $author, title: $title, content: $content) {
    id
    author
    title
    content
    ups
    downs
    version
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddPostMutationVariables,
  APITypes.AddPostMutation
>;
