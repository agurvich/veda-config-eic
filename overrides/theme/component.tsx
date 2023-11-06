import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Card,
  CardList,
  CardFooter,
} from "$veda-ui-scripts/components/common/card";
import { glsp, media } from "$veda-ui/@devseed-ui/theme-provider";

const CardWrppaer = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: 1/-1;

  ${CardFooter} {
    margin-top: auto;
  }
`

const themes = Array(9).fill(0).map((e, idx) => idx)

export default function ThemeLandingPage() {
  return (
    <CardWrppaer>
      <CardList>
      {themes.map(t=> (
        <li>
          <Card
            linkLabel="View more"
            linkTo="/stories/us-methane-sources"
            title={`Theme ${t}`}
            description="Description"
            footerContent={
              <div>
                Footer
              </div>
            }
          /> 
        </li>
      ))}
      </CardList>
    </CardWrppaer>

  )
}