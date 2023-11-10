import { media, themeVal, glsp } from "$veda-ui/@devseed-ui/theme-provider";
import { css } from '$veda-ui/styled-components';

export const focusStyle = css`
  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
`

export const decorativeHeader = css`
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