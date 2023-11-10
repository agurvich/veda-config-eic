import React from "$veda-ui/react";
import { stories} from "veda";
import ThemeCards from '../../components/theme-card';
import { Fold } from "$veda-ui-scripts/components/common/fold";
import { themeLandingPageIds } from "../../common/story-data";


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
