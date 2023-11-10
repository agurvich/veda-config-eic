import React from "$veda-ui/react";
import { Fold } from "$veda-ui-scripts/components/common/fold";
import RelatedContents from '../../overrides/components/EICRelatedContents'

export default function TeachPage() {
  return (
    <Fold>
      <h2> STEM</h2>
      <RelatedContents storyIds={['globe_protocol_etraining', 'stem_resources', 'climate_kids']} />
    </Fold>
  );
}
