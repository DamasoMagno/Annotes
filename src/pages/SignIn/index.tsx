import { GoogleLogo } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { auth } from '../../services/firebase'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Description, Form, Message } from './styles'

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userSchema>

const provider = new GoogleAuthProvider()

export function SignIn() {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<User>({
    resolver: zodResolver(userSchema),
  })

  const handleLoginUser = async (user: User) => {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password)

      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.message)
      }
    }
  }

  const handleLoginWithGoogle = async () => {
    await signInWithPopup(auth, provider)

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
          <Controller
            name="email"
            control={control}
            render={(props) => {
              return (
                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <Input {...props} id="email" type="email" />
                </div>
              )
            }}
          />
          <Controller
            name="password"
            control={control}
            render={(props) => {
              return (
                <div className="field">
                  <label htmlFor="password">Senha</label>
                  <Input {...props} id="password" type="password" />
                </div>
              )
            }}
          />

          <Button>Fazer login</Button>
        </form>

        <Button
          variant="outline"
          onClick={handleLoginWithGoogle}
          className="googleSign"
        >
          <GoogleLogo />
          <span>Entrar com google</span>
        </Button>

        <Message>
          Não tem conta?
          <Link to="/signUp">Registre-se</Link>
        </Message>
      </Form>
    </Container>
  )
}
