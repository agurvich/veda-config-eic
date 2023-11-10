import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { media, themeVal, glsp } from "$veda-ui/@devseed-ui/theme-provider";
import { stories } from "veda";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Card,
  CardList
} from "$veda-ui-scripts/components/common/card";
import { focusStyle } from "../common/style";

const CardWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: 1/-1;
`;

const StyledCard = styled(Card)`
  figure {
    height: 200px;
  }
`

const EvenCardList = styled(CardList)`
  ${media.largeUp`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export default function EICRelatedContents({storyIds}) {
  const relatedData = Object.keys(stories)
  .map((key) => stories[key].data)
  .filter((story) => storyIds.includes(story.id));

  const cards = relatedData.map((t) => (
    <li>
      <StyledCard 
        key={t.id}
        linkLabel="View more"
        linkTo={t.asLink?.url?? `/stories/${t.id}`}
        title={t.name}
        description={t.description}
        imgSrc={t.media.src}
        imgAlt={t.media.alt}
      />
    </li>
  ))

  const evenNumberCard = relatedData.length%2 == 0

  return (
      <CardWrapper>
        {evenNumberCard && 
          <EvenCardList>
            {cards}
          </EvenCardList>
        }
        {!evenNumberCard && 
          <CardList>
            {cards}
          </CardList>
        }
      </CardWrapper>
    
  );
}
