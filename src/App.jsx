import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<ProjectsPage/>}></Route>
        <Route path='/skills' element={<SkillsPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
