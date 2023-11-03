import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form, SignInMessge } from './styles'

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userSchema>

export function SignUp() {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<User>({
    resolver: zodResolver(userSchema),
  })

  const handleRegisterUser = (user: User) => {
    console.log(user)

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
          <Input label="Nome" {...register('name')} />
          <Input label="Email" {...register('email')} type="email" />
          <Input label="Senha" {...register('password')} type="password" />
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
