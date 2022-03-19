import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query {
    blogPostCollection {
      items {
        title
        featuredImage {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const FETCH_A_POST = gql`
  query fetchAPost($id: String!) {
    blogPost(id: $id) {
      title
      body {
        json
      }
      featuredImage {
        url
      }
      sys {
        id
      }
    }
  }
`;
