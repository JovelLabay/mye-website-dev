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
        joinOurTeamHasMarginTop
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
            productsMainContent
          }
        }
      }
      industrySolutions {
        headerIndustrySolutons
        solutionItem {
          titleItems
          items {
            descriptionItem
          }
          backgroundImage {
            sourceUrl
          }
        }
      }
      services {
        hasMarginTop
        hasMarginBottom
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
          detailedDescription {
            description
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
