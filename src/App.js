
import './App.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
 
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/Services" element={<Services/>}/>
</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
