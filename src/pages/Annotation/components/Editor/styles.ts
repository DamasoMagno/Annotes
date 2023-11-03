import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.5rem;

  .editor {
    margin-top: 2rem;

    .tiptap {
      color: white;
      outline: 0;
      font-size: 1rem;

      p.is-editor-empty:first-child::before {
        color: #adb5bd;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
      }
    }
  }
`
