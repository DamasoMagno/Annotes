import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Description>
        <h1>Criar conta</h1>
        <h3>Uma plataforma para criação ágil e conveniente de anotações.</h3>
      </Description>

      <Form>
        <form>
          <Input label="Nome" />
          <Input label="Email" />
          <Input label="Senha" />
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
