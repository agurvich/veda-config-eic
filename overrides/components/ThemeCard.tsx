import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { Link } from "$veda-ui/react-router-dom";
import { media, themeVal, glsp } from "$veda-ui/@devseed-ui/theme-provider";
import { stories } from "veda";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Card,
  CardList
} from "$veda-ui-scripts/components/common/card";

const CardWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: 1/-1;
`;

const ThemeCard = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  border-top: 1px solid ${themeVal('color.base-200a')};
  padding-top: ${glsp(1)};
`
const ThemeCardImageWrapper = styled.figure`
  padding: ${glsp(1)} 0;
  height: 240px;
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
  font-size: 0;
  margin: 0;
`

export default function ThemeCards({storyIds}) {

  const relatedData = Object.keys(stories)
  .map((key) => stories[key].data)
  .filter((story) => storyIds.includes(story.id));
  console.log(relatedData)
  const cards = relatedData.map((t) => (
    <li>
      <ThemeCard key={t.id}>
        <h3>{t.name}</h3>
        <ThemeCardImageWrapper>
          <img src={t.media.src} alt={t.media.alt} />
        </ThemeCardImageWrapper>
        <p>{t.description}</p>
        <ThemeLink to={t.id} />
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
