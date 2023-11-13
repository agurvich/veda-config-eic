import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { Fold, FoldBody } from "$veda-ui-scripts/components/common/fold";
import RelatedContents from "../../overrides/components/related-content-cards";
import { glsp } from "$veda-ui/@devseed-ui/theme-provider";
import { decorativeHeader } from "../../overrides/common/style";
import {
  teachToolsStoryIds,
  teachK12StoryIds,
} from "../../overrides/common/story-data";

const StyledH2 = styled.h2`
  ${decorativeHeader}
  margin-bottom: ${glsp(0.5)};
`;

const FoldSection = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${glsp(2)};
`;

export default function TeachPage() {
  return (
    <Fold>
      <FoldBody>
        <FoldSection>
          <StyledH2> Tools & Training </StyledH2>
          <RelatedContents storyIds={teachToolsStoryIds} />
        </FoldSection>
        <FoldSection>
          <StyledH2> K-12 Resources </StyledH2>
          <RelatedContents storyIds={teachK12StoryIds} />
        </FoldSection>
      </FoldBody>
    </Fold>
  );
}
