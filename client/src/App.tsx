import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Education from "./pages/Education"

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home")

  function togglePage(page: string) {
    setCurrentPage(page)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home currentPage={currentPage} togglePage={togglePage}/>} />
        <Route path="/education" element={<Education currentPage={currentPage} togglePage={togglePage}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
