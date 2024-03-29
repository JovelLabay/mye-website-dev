import { gql } from "@apollo/client";

const GET_BLOGS_AND_NEWS = gql`
  query GetBlogsAndNewsPage($id: ID!) {
    blogAndNewsPage(id: $id) {
      title
      headerBlogsAndNews {
        headerBlogsAndNewsTitle
        headerBlogsAndNewsDescription
        backgroundImage {
          sourceUrl
        }
      }
    }
  }
`;

export default GET_BLOGS_AND_NEWS;
