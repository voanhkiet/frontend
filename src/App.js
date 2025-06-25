
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Home from './pages/Home';
import UploadPaintingForm from './components/UploadPaintingForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ResetPasswordForm from './components/ResetPasswordForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/upload" element={<UploadPaintingForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
