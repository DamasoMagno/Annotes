import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form, SignInMessge } from './styles'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { toast } from 'react-toastify'

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userSchema>

export function SignUp() {
  const navigate = useNavigate()

  const { handleSubmit, register } = useForm<User>({
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
        toast('Usuario não encontrado', {
          type: 'error',
        })
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
