import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import Embed from "$veda-ui-scripts/components/common/blocks/embed";
// required CSS for pure-react-carousel
import "pure-react-carousel/dist/react-carousel.es.css";
import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

import {
  CollecticonChevronLeft,
  CollecticonChevronRight,
} from "$veda-ui/@devseed-ui/collecticons";

import { createButtonStyles } from "$veda-ui/@devseed-ui/button";
import { focusStyle } from "./style";

import {
  glsp,
  listReset,
  media,
  themeVal,
  visuallyHidden,
} from "$veda-ui/@devseed-ui/theme-provider";

const SROnly = styled.span`
  font-size: 0;
`;
const FeaturedList = styled.div`
  /* ignore stylelint parseError */
  ${listReset()}
  .carousel__slider {
    border-radius: ${themeVal("shape.rounded")};
  }
`;

const FeaturedContent = styled.div`
  width: 100%;
  article {
    min-height: 16rem;
    ${media.smallUp`
      min-height: 20rem;
    `}
    ${media.mediumUp`
      min-height: 20rem;
    `}
    ${media.largeUp`
      min-height: 24rem;
    `}
    ${media.xlargeUp`
      min-height: 28rem;
    `}
  }
  /* overriding pure-react-carousel styles */
  > div {
    width: 100% !important;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  gap: ${glsp(1)};
  top: calc(${(props) => props.topHeight}px + ${glsp(4)});
  left: unset;
`;

const buttonStyle = createButtonStyles({
  variation: "achromic-text",
  fitting: "skinny",
});

const ButtonBackStyled = styled(ButtonBack)`
  ${buttonStyle}
  background-color: ${themeVal("color.primary")};
  &:hover {
    background-color: ${themeVal("color.secondary")};
  }
  &:active,
  &:focus,
  &:hover {
    ${focusStyle}
  }
`;

const ButtonNextStyled = styled(ButtonNext)`
  ${buttonStyle}
  background-color: ${themeVal("color.primary")};
  &:hover {
    background-color: ${themeVal("color.secondary")};
  }
  &:active,
  &:focus,
  &:hover {
    ${focusStyle}
  }
`;

const DescWrapper = styled.div`
  margin: ${glsp(3)} 0;
`;

export default function Carousel({ items }) {
  const { isLargeUp } = useMediaQuery();
  const height = isLargeUp ? 515 : 315;
  console.log;
  return (
    <CarouselProvider
      isIntrinsicHeight={true}
      totalSlides={items.length}
      style={{ gridColumn: "1 / -1", gridRow: "2", position: "relative" }}
    >
      <div role="region" aria-label="Carousel">
        <FeaturedList>
          <Slider>
            {items.map((t, idx) => (
              <FeaturedContent
                key={t.desc}
                role="group"
                aria-roledescription="Slide"
                aria-labelledby={`carousel-item-${idx}__label`}
              >
                <Slide index={idx}>
                  <Embed
                    height={height}
                    src={t.src}
                    title="YouTube video player"
                  ></Embed>
                  <DescWrapper>{t.caption}</DescWrapper>
                </Slide>
                <SROnly id={`carousel-item-${idx}__label`}>{t.title}</SROnly>
              </FeaturedContent>
            ))}
          </Slider>
        </FeaturedList>

        {items.length > 1 && (
          <ButtonGroup
            topHeight={height}
            role="group"
            aria-label="Slide controls"
          >
            <ButtonBackStyled>
              <CollecticonChevronLeft title="Go to previous slide" meaningful />
            </ButtonBackStyled>
            <ButtonNextStyled>
              <CollecticonChevronRight title="Go to next slide" meaningful />
            </ButtonNextStyled>
          </ButtonGroup>
        )}
      </div>
    </CarouselProvider>
  );
}
