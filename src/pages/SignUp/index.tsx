import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form } from './styles'
import { Message } from '../SignIn/styles'

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userSchema>

export function SignUp() {
  const { register, handleSubmit } = useForm<User>({
    resolver: zodResolver(userSchema),
  })

  const handleLoginUser = (user: User) => {
    console.log(user)
  }

  return (
    <Container>
      <Description>
        <h1>Criar conta</h1>
        <h3>Uma plataforma para criação ágil e conveniente de anotações.</h3>
      </Description>

      <Form>
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <Input label="Nome" {...register('name')} />
          <Input label="Email" {...register('email')} />
          <Input label="Senha" {...register('password')} />
          <Button>Criar conta</Button>
        </form>

        <Message className="login">
          Já tem conta?
          <Link to="/login">Entrar</Link>
        </Message>
      </Form>
    </Container>
  )
}
