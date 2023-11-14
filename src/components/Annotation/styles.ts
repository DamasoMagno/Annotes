import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: rgba(23, 23, 23, 0.5);
  border: 1px solid rgba(23, 23, 23, 0.5);
  border-radius: 4px;
  padding: 1.5rem;
`

export const Default = styled(Link)`
  text-decoration: none;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: ${(props) => props.theme.colors['--gray-50']};
      font-weight: bold;
      font-size: 1.5rem;
    }

    span {
      color: ${(props) => props.theme.colors['--gray-400']};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors['--gray-300']};
    line-height: 1.6;
    font-size: 1rem;
    margin-top: 0.875rem;
    margin: 0.75rem 0 0;
  }
`

export const Trashed = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: ${(props) => props.theme.colors['--gray-50']};
      font-weight: bold;
      font-size: 1.5rem;
    }

    span {
      color: ${(props) => props.theme.colors['--gray-400']};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors['--gray-300']};
    line-height: 1.6;
    font-size: 1rem;
    margin: 1rem 0 2rem;
  }
`

export const Tags = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['--gray-400']};
  }

  button {
    border: 0;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    transition: background-color 0.25s;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme.colors['--gray-600']};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
