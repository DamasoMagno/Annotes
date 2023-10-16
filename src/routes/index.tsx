import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../layout/Dashboard'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Annotations } from '../pages/Annotations'
import { Trash } from '../pages/Trash'
import { Annotation } from '../pages/Annotation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="" element={<Annotations />} />
        <Route path="/annote" element={<Annotation />} />
        <Route path="trash" element={<Trash />} />
      </Route>

      <Route path="/">
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
