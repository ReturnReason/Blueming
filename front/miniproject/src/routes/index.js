import { Routes, Route } from 'react-router-dom';
import { Main, SignUp } from 'pages/index';
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
