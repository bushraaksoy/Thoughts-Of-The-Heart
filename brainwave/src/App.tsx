import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import LogoBanner from './components/LogoBanner/LogoBanner';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className='app'>
      <LogoBanner />
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:blogName' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
