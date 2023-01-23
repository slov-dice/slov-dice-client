import { createGlobalStyle } from 'styled-components'

export const TippyStyles = createGlobalStyle`
  .tippy-box {
    border: white 1px solid;
  }

  .tippy-box[data-placement^=top]> .tippy-arrow:before {
    border-top-color: white;

  }

  .tippy-box[data-placement^=bottom]> .tippy-arrow:before {
    border-bottom-color: white;
  }
`
