import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from './Pages/Contact';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import GameAddiction from './Pages/GameAddiction';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/game-addiction' element={<GameAddiction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
