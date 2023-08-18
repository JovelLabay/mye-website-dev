import { gql } from "@apollo/client";

const GET_ABOUT_US = gql`
  query GetAboutUsPage($id: ID!) {
    aboutUsPage(id: $id) {
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
      aboutUs {
        mission {
          missionLabel
          missionDescription
          backgroundColor
          headerColor
          isGradient
        }
        vision {
          visionLabel
          visionDescription
          backgroundColor
          headerColor
          isGradient
        }
      }
      team {
        teamHeader
        team {
          teamTitle
          teamDetails {
            experience
            name
            position
            linkedin
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default GET_ABOUT_US;
