import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Annotations } from '../pages/Annotations'
import { Trash } from '../pages/Trash'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Annotations />} />
        <Route path="trash" element={<Trash />} />
      </Route>
      <Route path="/">
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
