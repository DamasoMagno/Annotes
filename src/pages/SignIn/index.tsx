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

  const handleLoginUser = (user: User) => {
    console.log(user)

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
          <Input label="Email" {...register('email')} type="email" />
          <Input label="Senha" {...register('password')} type="password" />
          <Button>Fazer login</Button>
        </form>

        <Message className="register">
          Não tem conta?
          <Link to="/signUp">Registre-se</Link>
        </Message>

        <Button variant="outline">
          <GoogleLogo />
          <span>Entrar com google</span>
        </Button>
      </Form>
    </Container>
  )
}
