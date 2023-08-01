import { gql } from "@apollo/client";

const GET_JOIN_TEAM = gql`
  query GetJoinTeamPage($id: ID!) {
    joinOurTeamPage(id: $id) {
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
      roles {
        backgroundColor
        roles {
          requirements {
            requirement
          }
          responsibilities {
            responsibility
          }
          roleDescription
          title
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

export default GET_JOIN_TEAM;
