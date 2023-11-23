import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { stories } from "veda";
import ThemeCards from "../../components/theme-cards";
import { Fold } from "$veda-ui-scripts/components/common/fold";
import { themeLandingPageIds } from "../../common/story-data";

/* Screen reader only h2 for heading hierarchy */
const SrOnlyH2 = styled.h2`
  width: 1px;
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
`;

const themeData = Object.keys(stories)
  .map((key) => stories[key].data)
  .filter((story) => themeLandingPageIds.includes(story.id));

export default function ThemeLandingPage() {
  return (
    <Fold>
      <SrOnlyH2> Nine themes</SrOnlyH2>
      <ThemeCards storyIds={themeLandingPageIds} />
    </Fold>
  );
}
