import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ThreeD from './pages/3D'
import VR from './pages/VR'
import Print3D from './pages/Print3D'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/3d" element={<ThreeD />} />
          <Route path="/vr" element={<VR />} />
          <Route path="/print3d" element={<Print3D />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
