import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp } from "$veda-ui/@devseed-ui/theme-provider";
import { stories, getString } from "veda";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Card,
  CardList,
  CardFooter,
} from "$veda-ui-scripts/components/common/card";

import { Fold } from "$veda-ui-scripts/components/common/fold";

const CardWrppaer = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: 1/-1;

  ${CardFooter} {
    margin-top: auto;
  }
`;

const themeData = Object.keys(stories)
  .map((key) => stories[key].data)
  .filter((story) => story.theme);

export default function ThemeLandingPage() {
  return (
    <Fold>
      <CardWrppaer>
        <CardList>
          {themeData.map((t) => (
            <li>
              <Card
                linkLabel="View more"
                linkTo={`/stories/${t.id}`}
                title={t.name}
                description={t.description}
                imgSrc={t.media.src}
                imgAlt={t.media.alt}
                footerContent={<div>Footer</div>}
              />
            </li>
          ))}
        </CardList>
      </CardWrppaer>
    </Fold>
  );
}
