import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Access from '../components/access/Access';
import routes from './constants/routes';

function RootRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.access} element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;