import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query {
    blogPostCollection {
      items {
        title
        featuredImage {
          url
        }
      }
    }
  }
`;
