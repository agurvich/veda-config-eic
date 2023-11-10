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
import ThemeCards from '../../components/ThemeCard';
import { Fold } from "$veda-ui-scripts/components/common/fold";

const CardWrppaer = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: 1/-1;

  ${CardFooter} {
    margin-top: auto;
  }
`;

const themeLandingPageIds = [
  "air_quality",
  "agriculture",
  "biodiversity",
  "disasters",
  "energy",
  "greenhouse_gases",
  "sea_level_rise",
  "wildfires",
  "water_resources",
];

const themeData = Object.keys(stories)
  .map((key) => stories[key].data)
  .filter((story) => themeLandingPageIds.includes(story.id));

export default function ThemeLandingPage() {
  return (
    <Fold>
      <ThemeCards storyIds={themeLandingPageIds} />
    </Fold>
  );
}
