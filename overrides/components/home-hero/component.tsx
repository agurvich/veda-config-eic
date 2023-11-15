import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
// import { Fold,  } from "$veda-ui-scripts/components/common/fold";
import Constrainer from "$veda-ui-scripts/styles/constrainer";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";

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
  background-image: url(${coverImgSrc});
  background-repeat: no-repeat;
  background-position: right 6rem bottom 0;
  background-size: auto 10rem;
  ${media.mediumDown`
    background-size: auto 8rem;
    background-position: right bottom;
  `}
`;

const PageHeroAttribution = styled(Figure)`
  height: 10rem;
  width: 80px;
  ${media.mediumDown`
    height: 8rem;
  `}
`;
const VarHeadingWithShadow = styled(VarHeading)`
  text-shadow: 1px 1px ${themeVal('color.base-200a')};
`
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
              <VarHeadingWithShadow size="large">Explore our changing planet</VarHeadingWithShadow>
            </HeroHeadline>
          </PageHeroHGroup>
          <PageHeroAttribution>
            <Figcaption>
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
