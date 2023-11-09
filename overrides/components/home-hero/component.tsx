import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";

import Constrainer from "$veda-ui-scripts/styles/constrainer";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";

import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

import coverImgSrc from "./earth.png";

const Hero = styled.div`
  background: ${themeVal("color.primary")};
  color: ${themeVal("color.surface")};
  padding: ${glsp(3, 0, 0, 0)};
`;

const PageHeroHGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: row;
  gap: ${glsp(8)};
  align-items: center;
`;

const HeroHeadline = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column;
  gap: ${glsp()};
  align-items: center;
`;

export default function HomeHero(props) {
  const { isMediumUp } = useMediaQuery();

  return (
    <Hero>
      <Constrainer>
        <PageHeroHGroup>
          <HeroHeadline>
            <VarHeading size="large">Explore our changing planet</VarHeading>
          </HeroHeadline>
          <img
            src={coverImgSrc}
            alt="image of planet"
          />
        </PageHeroHGroup>
      </Constrainer>
    </Hero>
  );
}
