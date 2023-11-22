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
import Lazyload from "$veda-ui/react-lazyload";
import {
  CollecticonChevronLeft,
  CollecticonChevronRight,
} from "$veda-ui/@devseed-ui/collecticons";
import { createButtonStyles } from "$veda-ui/@devseed-ui/button";
import {
  glsp,
  listReset,
  media,
  themeVal,
  visuallyHidden,
} from "$veda-ui/@devseed-ui/theme-provider";

import Embed from "$veda-ui-scripts/components/common/blocks/embed";
import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";
import { LoadingSkeleton } from "$veda-ui-scripts/components/common/loading-skeleton";
// required CSS for pure-react-carousel
import "pure-react-carousel/dist/react-carousel.es.css";

import { focusStyle, hoverStyle } from "./style";

const SROnly = styled.span`
  ${visuallyHidden}
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
  align-items: center;
  z-index: 5;
`;

const buttonStyle = createButtonStyles({
  variation: "achromic-text",
  fitting: "skinny",
});

const ButtonBackStyled = styled(ButtonBack)`
  ${buttonStyle}
  background-color: ${themeVal("color.primary")};
  &:hover {
    background-color: ${themeVal("color.primary")};
  }
  ${hoverStyle}
  ${focusStyle}
`;

const ButtonNextStyled = styled(ButtonNext)`
  ${buttonStyle}
  background-color: ${themeVal("color.primary")};
  &:hover {
    background-color: ${themeVal("color.primary")};
  }
  ${hoverStyle}
  ${focusStyle}
`;

const DescWrapper = styled.div`
  margin: ${glsp(3)} 0;
`;

interface EmbeddedVideosPropType {
  src: string;
  title: string;
  caption: string;
}

export default function Carousel({ items }: EmbeddedVideosPropType) {
  const { isLargeUp } = useMediaQuery();
  const height = isLargeUp ? 500 : 315;
  return (
    <Lazyload
      placeholder={<LoadingSkeleton height={height} />}
      offset={100}
      once
    >
      <CarouselProvider
        isIntrinsicHeight={true}
        totalSlides={items.length}
        style={{ gridColumn: "1 / -1", gridRow: "2", position: "relative" }}
      >
        {items.length > 1 && (
          <ButtonGroup
            topHeight={height}
            role="group"
            aria-label="Slide controls"
          >
            <ButtonBackStyled>
              <CollecticonChevronLeft title="Go to previous slide" meaningful />
            </ButtonBackStyled>
            {/* A workaround to show current slide number/ total slide number */}
            <DotGroup
              renderDots={(props) => {
                return (
                  <span aria-live="polite">
                    <SROnly>Current slide: </SROnly>
                    {props.currentSlide + 1}
                    <SROnly>Total of </SROnly>/{items.length + 1}
                  </span>
                );
              }}
            />
            <ButtonNextStyled>
              <CollecticonChevronRight title="Go to next slide" meaningful />
            </ButtonNextStyled>
          </ButtonGroup>
        )}
        <div role="region" aria-label="Carousel">
          <FeaturedList>
            <Slider>
              {items.map((t, idx) => (
                <FeaturedContent
                  key={t.title}
                  role="group"
                  aria-roledescription="Slide"
                  aria-labelledby={`carousel-item-${idx}__label`}
                >
                  <Slide index={idx}>
                    <Embed
                      height={height}
                      src={t.src}
                      title={t.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    />
                    <DescWrapper>
                      <h3>{t.title}</h3>
                      <p>{t.caption}</p>
                    </DescWrapper>
                  </Slide>
                  <SROnly id={`carousel-item-${idx}__label`} aria-live="polite">
                    {t.title}
                  </SROnly>
                </FeaturedContent>
              ))}
            </Slider>
          </FeaturedList>
        </div>
      </CarouselProvider>
    </Lazyload>
  );
}
