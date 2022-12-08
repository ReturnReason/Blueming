import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages/index';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}
