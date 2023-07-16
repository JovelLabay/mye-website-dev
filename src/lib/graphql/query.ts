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
        awards {
          subHeader
          headerAwards
          fieldGroupName
          descriptionAwards
          awardItem {
            sourceUrl
          }
          items {
            description
            title
          }
        }
        carousel {
          fieldGroupName
          carouselItem {
            backgroundColor
            description
            label
            learnMore {
              title
              url
            }
            image {
              sourceUrl
            }
          }
        }
        products {
          backgroundColor
          fieldGroupName
          title
          productsAndServices {
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
        }
        services {
          description
          fieldGroupName
          header
          item {
            description
            learnMore {
              url
            }
            title
          }
        }
        myeWorking {
          fieldGroupName
          headerWorks
          workingItem {
            title
            description
          }
          imageWorking {
            sourceUrl
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
        about {
          descriptionOne
          descriptionTwo
          headerAbout
          bigImage {
            sourceUrl
          }
        }
        blogsNews {
          headerBlogsNews
          blogsNewsItem {
            itemDescription
            itemHeader
            subItemHeader
            itemImage {
              sourceUrl
            }
            isFeature
          }
        }
      }
    }
  }
`;

export { GetAllPages, GetHomePage };
