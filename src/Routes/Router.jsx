import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { ProtectedRoute } from './ProtectedRoute';
import { NewIncome } from '../pages/NewIncome';
import { NewOutcome } from '../pages/NewOutcome';
import { UpdateIncome } from '../pages/UpdateIncome';
import { UpdateOutcome } from '../pages/UpdateOutcome';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewIncome />} />
          <Route path="/nova-saida" element={<NewOutcome />} />
          <Route path="/editar-entrada/:id" element={<UpdateIncome />} />
          <Route path="/editar-saida/:id" element={<UpdateOutcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
