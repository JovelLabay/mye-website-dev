import { gql } from "@apollo/client";

const GetAllPages = gql`
  query GetAllPages {
    pages {
      nodes {
        id
        slug
        title
        uri
        menuOrder
      }
    }
  }
`;

const GetHomePage = gql`
  query GetHomePage {
    nodeByUri(uri: "/") {
      ... on Page {
        carousel {
          fieldGroupName
          carouselItem {
            description
            fieldGroupName
            label
            image {
              sourceUrl
            }
            backgroundColor
          }
        }
        awards {
          subHeader
          items {
            description
            fieldGroupName
            title
          }
          header
          fieldGroupName
          description
          awardItem {
            sourceUrl
          }
        }
        productsServices {
          fieldGroupName
          title
          productsAndServices {
            fieldGroupName
            title
            productServiceItem {
              description
              fieldGroupName
              label
              iconImage {
                sourceUrl
              }
            }
          }
          backgroundColor
        }
      }
    }
  }
`;

export { GetAllPages, GetHomePage };
