import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
