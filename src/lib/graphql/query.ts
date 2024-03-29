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
        footer {
          footerDescription
          footerSubDescription
          anchorLinks {
            achorLink
            anchorName
          }
          socialMedina {
            socialMedinaLink
            socialMedinaItemName
          }
        }
        navigation {
          cloudLoginPortal {
            url
          }
        }
      }
    }
  }
`;

const GetHomePage = gql`
  query GetHomePage {
    nodeByUri(uri: "/") {
      ... on Page {
        navigation {
          cloudLoginPortal {
            url
          }
        }
        awards {
          subHeader
          headerAwards
          fieldGroupName
          descriptionAwards
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

const GetAllBlogsAndNews = gql`
  query GetAllBlogsAndNews {
    posts {
      edges {
        node {
          id
          title
          uri
          author {
            node {
              userId
              email
              lastName
              firstName
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
            postTags
            postShortImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export { GetAllPages, GetHomePage, GetAllBlogsAndNews };
