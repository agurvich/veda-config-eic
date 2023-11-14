import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";

import Constrainer from "$veda-ui-scripts/styles/constrainer";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";

import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

import coverImgSrc from "./earth.png";
import infoIcon from "./info-icon.svg";
import Image from "$veda-ui-scripts/components/common/blocks/images";

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
  justify-content: space-between;

  div {
    display: flex;
    flex-flow: row;
    gap: ${glsp(8)};
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
    appearance: none;
    align-self: flex-end;
    padding-bottom: 1rem;
  }
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

  const infoOnClick = () => {
    return
  }

  return (
    <Hero>
      <Constrainer>
        <PageHeroHGroup>
          <HeroHeadline>
            <VarHeading size="large">Explore our changing planet</VarHeading>
          </HeroHeadline>
          <div>
            <img
              src={coverImgSrc}
              alt="image of planet"
            />
            <button id="home-hero-info-icon">
              <Image src={infoIcon} alt="information" />
            </button>
          </div>
        </PageHeroHGroup>
      </Constrainer>
    </Hero>
  );
}
