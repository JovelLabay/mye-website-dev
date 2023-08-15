import { gql } from "@apollo/client";

const GET_BLOG_NEWS_BY_ID = gql`
  query GetBlogNewsById($id: ID!) {
    post(id: $id) {
      id
      author {
        node {
          lastName
          firstName
          userId
          description
          avatar {
            url
          }
        }
      }
      blogsAndNewsPost {
        isPostFeatured
        postBodyContent
        postCategory
        postPublished
        postShortDescription
        postTitle
        postShortImage {
          sourceUrl
        }
        postTags
      }
    }
  }
`;

export default GET_BLOG_NEWS_BY_ID;
