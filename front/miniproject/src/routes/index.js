import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages/index';
import SignUp from 'pages/SignUp';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}
