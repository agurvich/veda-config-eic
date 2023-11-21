import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";

import Image from "$veda-ui-scripts/components/common/blocks/images";
import { media } from "$veda-ui/@devseed-ui/theme-provider";

import epaImg from "../media/epa.svg";
import nasaImg from "../media/nasa.png";
import noaaImg from "../media/noaa.png";
import femaImg from "../media/fema.png";
import usaidImg from "../media/usaid.png";
import usdaImg from "../media/usda.png";
import usgsImg from "../media/usgs.png";

const LogoWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  > * {
    flex-shrink: 0;
  }
  ${media.mediumDown`
    gap: 1rem;
  `}
`;

const LogoWrapperWithLimit = styled.div`
  display: flex;
  flex-flow: column;
  flex-shrink: 0;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  div {
    gap: 1rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    ${media.mediumDown`
      gap: 0.5rem;
    `}
  }
`;

export default function Partners(props: {
  size: "big" | "small",
  top?: number,
}) {
  const { size } = props;
  const squareLogoHeight = size == "big" ? "80" : "40";

  let partners = [
    {
      href: "https://www.nasa.gov/",
      src: nasaImg,
      alt: "NASA logo"
    },
    {
      href: "https://www.epa.gov/",
      src: epaImg,
      alt: "EPA logo"
    },
    {
      href: "https://www.fema.gov/",
      src: femaImg,
      alt: "FEMA logo"
    },
    {
      href: "https://www.noaa.gov/",
      src: noaaImg,
      alt: "NOAA logo"
    },
    {
      href: "https://www.usaid.gov/",
      src: usaidImg,
      alt: "USAID logo"
    },
    {
      href: "https://www.usda.gov/",
      src: usdaImg,
      alt: "USDA logo"
    },
    {
      href: "https://www.usgs.gov/",
      src: usgsImg,
      alt: "USGS logo",
      height: size == "big" ? "40" : "20",
    },
  ]

  const createOrder = (top?: number) => {
    if (top) {
      const bottomLogos = partners.splice(top);

      const createRow = (logos: any[]) => (
        <div>
          {logos.map((partner) => (
            <a href={partner.href}>
              <Image 
                src={partner.src}
                alt={partner.alt}
                height={partner.height ? partner.height : squareLogoHeight}
              />
            </a>
          ))}
        </div>
      );

      return (
        <LogoWrapperWithLimit>
          {createRow(partners)}
          {createRow(bottomLogos)}
        </LogoWrapperWithLimit>
      );
    }
    else {
      return (
        <LogoWrapper>
          {partners.map((partner) => (
            <a href={partner.href}>
              <Image 
                src={partner.src}
                alt={partner.alt}
                height={partner.height ? partner.height : squareLogoHeight}
              />
            </a>
          ))}
        </LogoWrapper>
      )
    }
  }
  
  return (
    createOrder(props.top)
  );
}
