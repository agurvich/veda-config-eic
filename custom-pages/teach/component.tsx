import React from "$veda-ui/react";
import styled, { css } from "$veda-ui/styled-components";
import { Fold } from "$veda-ui-scripts/components/common/fold";
import RelatedContents from '../../overrides/components/EICRelatedContents'
import { media, themeVal, glsp } from "$veda-ui/@devseed-ui/theme-provider";

const decorativeHeader = css`
  column-span: all;
  max-width: 52rem;
  display: flex;
  flex-direction: column;
  gap: calc(${glsp()} - ${glsp(0.25)});
  &::before {
    content: '';
    width: ${glsp(2)};
    height: ${glsp(0.25)};
    border-radius: ${themeVal('shape.rounded')};
    background: ${themeVal('color.primary')};
  }
`

const StyledH2 = styled.h2`
  ${decorativeHeader}
`
export default function TeachPage() {
  return (
    <Fold>
      <StyledH2> STEM </StyledH2>
      <RelatedContents storyIds={['globe_protocol_etraining', 'stem_resources', 'climate_kids']} />
    </Fold>
  );
}
