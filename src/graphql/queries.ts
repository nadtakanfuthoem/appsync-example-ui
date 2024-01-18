/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPost = /* GraphQL */ `query GetPost($id: String!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const sayHello = /* GraphQL */ `query SayHello($name: String) {
  sayHello(name: $name)
}
` as GeneratedQuery<APITypes.SayHelloQueryVariables, APITypes.SayHelloQuery>;
export const sayGoodbye = /* GraphQL */ `query SayGoodbye($name: String) {
  sayGoodbye(name: $name)
}
` as GeneratedQuery<
  APITypes.SayGoodbyeQueryVariables,
  APITypes.SayGoodbyeQuery
>;
