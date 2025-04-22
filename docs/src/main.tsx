import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './Upcoming.css'
import App from './App.tsx'
import Upcoming from './Upcoming.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/gallery" element={<Upcoming />} />
        <Route path="/booking" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
