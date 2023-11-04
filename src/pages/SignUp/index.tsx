import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form, SignInMessge } from './styles'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { FirebaseError } from 'firebase/app'

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

  const handleRegisterUser = async (user: User) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
      )

      await updateProfile(response.user, {
        displayName: user.name,
      })

      navigate('/login')
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.message)
      }
    }
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
