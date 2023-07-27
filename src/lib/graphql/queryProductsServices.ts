import { gql } from "@apollo/client";

const GET_PRODUCT_SERVICE = gql`
  query GetProductsServicesPage($id: ID!) {
    productServicesPage(id: $id) {
      title
      joinOurTeam {
        headerJoinOurTeam {
          headerLabel
          headerColor
          isGradient
        }
        joinOurTeamDescriptionOne
        joinOurTeamDescriptionTwo
        joinOurTeamBigImage {
          sourceUrl
        }
        joinOurTeamMoreLink {
          buttonLabel
          buttonLink {
            title
            url
          }
        }
        hasMarginTop
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
      services {
        hasMarginTop
        header
        description
        servicesBackgroundColor
        item {
          title
          description
          learnMore {
            title
            url
          }
        }
      }
      getInTouch {
        headerGetInTouch
        getInTouchBackgroundImage {
          sourceUrl
        }
      }
    }
  }
`;

export default GET_PRODUCT_SERVICE;
