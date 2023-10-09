import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 15rem;
  }
`

export const Description = styled.div`
  text-align: center;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors['--white']};
    font-weight: bold;
  }

  h3 {
    margin-top: 1rem;
    line-height: 1.8;
    font-size: 1rem;
    color: ${(props) => props.theme.colors['--gray-200']};
  }
`

export const Form = styled.main`
  background-color: ${(props) => props.theme.colors['--neutral-950']};
  border-radius: 8px;
  width: 100%;
  max-width: 30rem;
  max-height: 30.875rem;
  padding: 3rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .register {
    align-self: flex-end;
    color: white;
    font-size: 0.875rem;
    display: block;
    font-size: 1rem;
    margin: 1rem 0 2.5rem;

    a {
      text-decoration: none;
      font-weight: bold;
      color: #005b41;
    }
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  label {
    color: ${(props) => props.theme.colors['--gray-300']};
    font-size: 1rem;
  }

  input {
    background: ${(props) => props.theme.colors['--zinc-950']};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors['--gray-300']};
    height: 3rem;
    border-radius: 8px;
    outline: 0;
    padding: 1rem;

    &:focus-within {
      border: 1px solid #005b41;
    }
  }
`

interface ButtonProps {
  variant?: 'outline'
}

export const Button = styled.button<ButtonProps>`
  padding: 1rem;
  margin-top: 0.5rem;
  height: 3rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: filter 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid #005b41;
          color: #005b41;
        `
      default:
        return css`
          color: white;
          border: 0;
          background-color: #005b41;
        `
    }
  }}

  &:hover {
    filter: brightness(0.9);
  }

  &:has(span) span {
    flex: 1;
  }
`
