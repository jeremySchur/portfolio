import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Education from "./pages/Education"
import Pygame from "./pages/Pygame"
import Stats360 from "./pages/Stats360"
import Layout from "./Layout"

export default function App() {

  return (
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/stats360" element={<Stats360 />} />
          <Route path="/pygame" element={<Pygame />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
