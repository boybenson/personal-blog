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
  query {
    blogPost(id: "6eLI42ghBzClRafqRzE8SE") {
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
