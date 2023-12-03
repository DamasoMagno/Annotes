import { GoogleLogo } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form, Message } from './styles'

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userSchema>

export function SignIn() {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<User>({
    resolver: zodResolver(userSchema),
  })

  const handleLoginUser = async () => {
    navigate('/')
  }

  return (
    <Container>
      <Description>
        <h1>Login</h1>
        <h3>Faça login e acesse suas ideias e anotações pessoais.</h3>
      </Description>

      <Form>
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <Input {...register('email')} id="email" type="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Senha</label>
            <Input {...register('password')} id="password" type="password" />
          </div>

          <Button>Fazer login</Button>
        </form>

        <Button variant="outline">
          <GoogleLogo />
          <span>Entrar com google</span>
        </Button>

        <Message>
          Não tem conta?
          <Link to="/register">Registre-se</Link>
        </Message>
      </Form>
    </Container>
  )
}
