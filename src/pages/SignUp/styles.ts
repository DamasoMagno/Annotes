import styled from 'styled-components'

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
