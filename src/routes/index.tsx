import { Route, Routes } from "react-router-dom";

import { Annotations } from "../pages/Annotations";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Annotations />}/>
    </Routes>
  )
}