import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .editor {
    margin-top: 2rem;

    .tiptap {
      color: white;
      outline: 0;
      font-size: 1rem;

      h1.is-empty:first-child::before {
        color: #adb5bd;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
      }

      p {
        line-height: 2;

        &:first-of-type {
          margin-top: 1.5rem;
        }

        &.is-empty:before {
          color: #adb5bd;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      }
    }
  }
`
