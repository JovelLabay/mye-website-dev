import { gql } from "@apollo/client";

const GetComment = gql`
  query GetComments {
    comments {
      nodes {
        content
        commentId
        id
        date
        replies {
          nodes {
            content
            date
            author {
              node {
                name
              }
            }
          }
        }
        type
      }
    }
  }
`;

export default GetComment;
