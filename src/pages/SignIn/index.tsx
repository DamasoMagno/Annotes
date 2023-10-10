import { GoogleLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'

import { Container, Description, Form } from './styles'
import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <Container>
      <Description>
        <h1>Login</h1>
        <h3>Faça login e acesse suas ideias e anotações pessoais.</h3>
      </Description>

      <Form>
        <form>
          <Input label="Email" />
          <Input label="Senha" />
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
