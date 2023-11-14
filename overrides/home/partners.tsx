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

export default function Partners(props: {
  size: "big" | "small"
}) {
  const { size } = props;
  const squareLogoHeight = size == "big" ? "80" : "40";
  
  return (
    <LogoWrapper>
      <a href="https://www.nasa.gov/">
        <Image src={nasaImg} alt="NASA logo" height={squareLogoHeight} />
      </a>

      <a href="https://www.epa.gov/">
        <Image src={epaImg} alt="EPA logo" height={squareLogoHeight} />
      </a>

      <a href="https://www.fema.gov/">
        <Image src={femaImg} alt="FEMA logo" height={squareLogoHeight} />
      </a>

      <a href="https://www.noaa.gov/">
        <Image src={noaaImg} alt="NOAA logo" height={squareLogoHeight} />
      </a>

      <a href="https://www.usaid.gov/">
        <Image src={usaidImg} alt="USAID logo" height={squareLogoHeight} />
      </a>

      <a href="https://www.usda.gov/">
        <Image src={usdaImg} alt="USAID logo" height={squareLogoHeight} />
      </a>

      <a href="https://www.usgs.gov/">
        <Image src={usgsImg} alt="USGS logo" height={squareLogoHeight} />
      </a>
    </LogoWrapper>
  );
}
