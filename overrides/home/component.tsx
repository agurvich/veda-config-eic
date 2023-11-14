import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import Hug from "$veda-ui-scripts/styles/hug";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";
import Image from "$veda-ui-scripts/components/common/blocks/images";

import Partners from "./partners";
import RedEarthImg from "./media/earth-1.png";

const IntroHeadline = styled.div`
  display: flex;
  flex-flow: row;
  gap: ${glsp(2)};
  grid-column: content-start / content-end;

  ${media.largeUp`
    grid-column: content-2 / content-12;
  `}

  p {
    font-size: 1.25rem;
    padding-top: 1rem;
  }

  span {
    color: ${themeVal("color.primary")};
  }
`;

const HomeDescription = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};
  background: ${themeVal("color.info-100")};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-image: linear-gradient(#FFFFFF, #EDF3FC);
`

const ThemeContent = styled.div`
  display: flex;
  flex-flow: row;
  gap: ${glsp(8)};
  padding: ${glsp(3, 2, 1, 2)};
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const BottomContent = styled.div`
  display: flex;
  flex-flow: column;
  width: 80%;
  margin: auto;
  gap: ${glsp()};
  span:first-child {
    width: 60%;
  }
`

const InfoImageContainer = styled.div`
  display: flex;
  flex-flow: row;
  background-color: #02225B; // @TODO: But where can I get this color?
  color: #FFFFFF;
  width: 100%;

  div {
    display: flex;
    flex-flow: column;
    gap: ${glsp()};
    margin: auto;
    padding-left: ${glsp(3)};
  }

  a {
    width: 18.5rem;
  }
`

export default function HomeComponent() {
  const description = "The Earth Information Center consolidates data and insights on how Earth is changing from across the U.S. federal government. Discover how this data is being used to prepare for climate change, and mitigate, adapt, and respond to environmental challenges accross the country."
  return (
    <>
      <HomeDescription>
        <IntroHeadline>
          <div>
            <VarHeading size="xlarge">Multiple agencies,<br/> many interconnected systems, <br/>
              <span>one planet.</span>
            </VarHeading>
            <p>
              {description}
            </p>
          </div>
          <Partners size="small" />
        </IntroHeadline>
      </HomeDescription>
      <ContentContainer>
        <ThemeContent>
          <div>
            <VarHeading size="large">
              Nine themes, one Earth
            </VarHeading>
          </div>
            {/* {PlaceHolder for Cards} */}
        </ThemeContent>
        <BottomContent>
          <span>
            Earth.gov is also the gateway to other interagency cooperative efforts for our planet, like the <a href="https://hub.ghg.center/hub/">U.S. Greenhouse Gas Center</a>
          </span>
          <InfoImageContainer>
            <div>
              <VarHeading size="small">
                U.S. Greenhouse Gas Center
              </VarHeading>
              <span>Uniting Data and Technology to Empower Tomorrow's Climate Solutions</span>
              <Button
                forwardedAs={NavLink}
                to="https://hub.ghg.center/hub/" //@TODO: This isn't working with external link
                size="medium"
                radius="square"
                variation="primary-fill"
              >
                Visit the U.S. GHG Center website
              </Button>
            </div>
            <Image src={RedEarthImg} alt="USGS logo" height={300} />
          </InfoImageContainer>
        </BottomContent>
      </ContentContainer>
    </>
  );
}
