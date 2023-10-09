import { Link } from 'react-router-dom'

import { Button, Container, Description, Form, Input } from './styles'

export function SignUp() {
  return (
    <Container>
      <Description>
        <h1>Criar conta</h1>
        <h3>Uma plataforma para criação ágil e conveniente de anotações.</h3>
      </Description>

      <Form>
        <form>
          <Input>
            <label htmlFor="name">Nome</label>
            <input id="name" />
          </Input>

          <Input>
            <label htmlFor="email">Email</label>
            <input id="email" />
          </Input>

          <Input>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </Input>

          <Button>Criar conta</Button>
        </form>

        <span className="register">
          Já tem conta?
          <Link to="/"> Entrar</Link>
        </span>
      </Form>
    </Container>
  )
}
