import { createGlobalStyle } from 'styled-components'

export const ReactQuillStyles = createGlobalStyle`
  .quill {
    width: 100%;
    height: 100%;
  }

  .ql-container {
    width: 100%;
    height: 100%;
    max-height: calc(100% - 60px);
  }

  .ql-editor {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }

`
