import styled from 'styled-components'
import { Message } from '../SignIn/styles'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 8rem;
  }
`

export const Description = styled.div`
  text-align: center;
  max-width: 300px;

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
  border-radius: 10px;
  width: 100%;
  max-width: 30rem;
  padding: 4rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .field {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const SignInMessge = styled(Message)``
