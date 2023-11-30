import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form, SignInMessge } from './styles'

export function SignUp() {
  const navigate = useNavigate()

  const { handleSubmit, register } = useForm({})

  const handleRegisterUser = async () => {
    navigate('/login')
  }

  return (
    <Container>
      <Description>
        <h1>Criar conta</h1>
        <h3>Uma plataforma para criação ágil e conveniente de anotações.</h3>
      </Description>

      <Form>
        <form onSubmit={handleSubmit(handleRegisterUser)}>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <Input {...register('name')} id="name" />
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <Input {...register('email')} id="email" type="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Senha</label>
            <Input {...register('password')} id="password" type="password" />
          </div>

          <Button>Criar conta</Button>
        </form>

        <SignInMessge className="login">
          Já tem conta?
          <Link to="/login">Entrar</Link>
        </SignInMessge>
      </Form>
    </Container>
  )
}
