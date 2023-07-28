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
          awardItems {
            awardField
            awardPosition
            awardTitle
            borderColor
            fieldGroupName
            isCertified
            hasColor
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
          servicesBackgroundColor
          hasMarginTop
          hasMarginBottom
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
          headerWorks
          imageWorking {
            sourceUrl
          }
          workingItem {
            title
            worksDescription {
              workingDescription
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
            datePublished
            blogTags
          }
        }
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
          joinOurTeamHasMarginBottom
        }
        getInTouch {
          headerGetInTouch
          getInTouchBackgroundImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

export { GetAllPages, GetHomePage };
