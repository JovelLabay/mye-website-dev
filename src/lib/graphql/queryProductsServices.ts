import { gql } from "@apollo/client";

const GET_PRODUCT_SERVICE = gql`
  query GetProductsServicesPage($id: ID!) {
    productServicesPage(id: $id) {
      title
      joinOurTeam {
        hasMarginTop
        joinOurTeamDescriptionOne
        joinOurTeamMoreLink {
          buttonLabel
          buttonLink {
            title
            url
          }
        }
        joinOurTeamBigImage {
          sourceUrl
        }
        headerJoinOurTeam {
          headerColor
          headerLabel
          isGradient
        }
      }
      products {
        productsAndServices {
          title
          productServiceItem {
            label
            description
            iconImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCT_SERVICE;
