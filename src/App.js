
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Home from './pages/Home';
import UploadPaintingForm from './components/UploadPaintingForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add" element={<UploadPaintingForm />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
