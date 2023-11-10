import React from "$veda-ui/react";
import styled, {css} from "$veda-ui/styled-components";
import { Link } from "$veda-ui/react-router-dom";
import { themeVal, glsp } from "$veda-ui/@devseed-ui/theme-provider";
import { stories } from "veda";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  CardList
} from "$veda-ui-scripts/components/common/card";
import { focusStyle } from "../common/style";

export interface ContentsPropType {
  storyIds: string[];
}

const CardWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: 1/-1;
`;

const ThemeCard = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  border-top: 1px solid ${themeVal('color.base-200a')};
`
const ThemeCardImageWrapper = styled.figure`
  height: 240px;
  margin-bottom: ${glsp(1.5)};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`

const ThemeLink = styled(Link)`
  position: absolute;
  inset: 0;
  pointer-events: auto;
  margin: 0;
  font-size: 0;
  ${focusStyle}
`

const PrimaryColorH3 = styled.h2`
  color: ${themeVal('color.primary')};
  margin: ${glsp(1.5)} 0;
`

export default function ThemeCards({storyIds}: ContentsPropType) {

  const relatedData = Object.keys(stories)
  .map((key) => stories[key].data)
  .filter((story) => storyIds.includes(story.id));

  console.log(relatedData)
  const cards = relatedData.map((t) => (
    <li>
      <ThemeCard key={t.id}>
        <PrimaryColorH3>{t.name}</PrimaryColorH3>
        <ThemeCardImageWrapper>
          <img src={t.media.src} alt={t.media.alt} />
        </ThemeCardImageWrapper>
        <p>{t.description}</p>
        <ThemeLink to={t.id}>View more</ThemeLink>
      </ThemeCard>
    </li>
  ))

  return (
      <CardWrapper>
          <CardList>
            {cards}
          </CardList>
      </CardWrapper>
    
  );
}
