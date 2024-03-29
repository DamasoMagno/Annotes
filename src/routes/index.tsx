import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../layout/Main'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Annotations } from '../pages/Annotations'
import { Trash } from '../pages/Trash'
import { Annotation } from '../pages/Annotation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Annotations />} />
        <Route path="/annotation" element={<Annotation />} />
        <Route path="/trash" element={<Trash />} />
      </Route>

      <Route path="/">
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
