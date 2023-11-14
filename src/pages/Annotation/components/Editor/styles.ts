import styled from 'styled-components'

export const Container = styled.div`
  .editor {
    margin-top: 2rem;

    .tiptap {
      color: white;
      outline: 0;
      font-size: 1rem;

      h1.is-editor-empty:first-child::before {
        color: #adb5bd;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
      }
    }
  }
`
