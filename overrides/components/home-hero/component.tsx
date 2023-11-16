import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import Constrainer from "$veda-ui-scripts/styles/constrainer";
import { StyledVarHeading } from "../../common/style";

import coverImgSrc from "./earth.png";

import {
  Figcaption,
  Figure,
  FigureAttribution,
} from "$veda-ui-scripts/components/common/figure";

const Hero = styled.div`
  background: ${themeVal("color.primary")};
  color: ${themeVal("color.surface")};
`;

const PageHeroHGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  ${media.smallDown`
    align-self: flex-start;
  `}
`;

const HeroHeadline = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column;
  gap: ${glsp()};
  align-items: center;
`;

const HeroBody = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: ${glsp(2)};
  ${media.smallDown`
    flex-direction: column;
  `}
`;

const PageHeroAttribution = styled(Figure)`
  height: 10rem;
  width: 20rem;
  max-width: 100%;
  margin-bottom: ${glsp(-3)};
  ${media.smallDown`
    height: 8rem;
    margin-bottom: ${glsp(-1)};
  `}
`;
const VarHeadingWithShadow = styled(StyledVarHeading)`
  text-shadow: 1px 1px ${themeVal("color.base-200a")};
`;
export default function HomeHero(props) {
  const infoOnClick = () => {
    return;
  };

  return (
    <Hero>
      <Constrainer>
        <HeroBody>
          <PageHeroHGroup>
            <HeroHeadline>
              <VarHeadingWithShadow size="large">
                Explore our changing planet
              </VarHeadingWithShadow>
            </HeroHeadline>
          </PageHeroHGroup>
          <PageHeroAttribution>
            <Figcaption>
              <img src={coverImgSrc} alt="Earth Image for hero" />
              <FigureAttribution
                author="NASA's Scientific Visualization Studio. Visualization of January 2021 Global Atmospheric Carbon Dioxide (CO₂)"
                url="https://svs.gsfc.nasa.gov/5115"
                position="bottom-right"
              />
            </Figcaption>
          </PageHeroAttribution>
        </HeroBody>
      </Constrainer>
    </Hero>
  );
}
