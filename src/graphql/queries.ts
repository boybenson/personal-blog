import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query fetchPosts {
    blogPostCollection {
      items {
        title
        body {
          json
        }
        sys {
          id
        }
      }
    }
  }
`;
