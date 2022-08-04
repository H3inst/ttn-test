import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './constants/routes';
import Access from '../components/access/Access';
// import Dashboard from '../components/dashboard/Dashboard';

function RootRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('authenticated') || false
  );

  useEffect(() => {
    setIsAuthenticated(() => isAuthenticated === 'true');
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.access}
          element={<Access />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;