import { gql } from "@apollo/client";

const GET_PRODUCT_SERVICE = gql`
  query GetProductsServicesPage($id: ID!) {
    productServicesPage(id: $id) {
      title
      joinOurTeam {
        joinOurTeamDescriptionOne
        joinOurTeamMoreLink {
          title
          url
        }
        joinOurTeamBigImage {
          sourceUrl
        }
        headerJoinOurTeam
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
