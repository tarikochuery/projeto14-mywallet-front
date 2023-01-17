import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/nova-entrada" element={<NewIncome />} /> */}
        {/* <Route path="/nova-saida" element={<NewOutcome />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
