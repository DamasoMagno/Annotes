import { GoogleLogo, Link } from 'phosphor-react'

import { Button, Container, Description, Form, Input } from './styles'

export function SignIn() {
  return (
    <Container>
      <Description>
        <h1>Login</h1>
        <h3>Faça login e acesse suas ideias e anotações pessoais.</h3>
      </Description>

      <Form>
        <form>
          <Input>
            <label htmlFor="email">Email</label>
            <input id="email" />
          </Input>

          <Input>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </Input>

          <Button>Fazer login</Button>
        </form>

        <span className="register">
          Não tem conta?
          <Link to="/signUp"> Registre-se</Link>
        </span>

        <Button variant="outline">
          <GoogleLogo />
          <span>Entrar com google</span>
        </Button>
      </Form>
    </Container>
  )
}
