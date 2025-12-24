import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';
import CertificationsPage from './components/Certifications';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<ProjectsPage/>}></Route>
        <Route path='/skills' element={<SkillsPage/>}></Route>
        <Route path='/certifications' element={<CertificationsPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
