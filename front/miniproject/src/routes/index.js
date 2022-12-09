import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages/index';
import SignUp from 'pages/SignUp';
import Layout from 'layouts/Layout';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
}
