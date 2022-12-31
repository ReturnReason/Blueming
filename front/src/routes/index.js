import { Routes, Route } from 'react-router-dom';
import { Main, SignIn, SignUp, Error, Donation } from 'pages/index';
import Layout from 'layouts/Layout';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/donation' element={<Donation />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
}
