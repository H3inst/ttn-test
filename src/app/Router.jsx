import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from './constants/routes';
import Access from '../components/access/Access';
import Dashboard from '../components/dashboard/Dashboard';

function RootRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('authenticated') || false
  );

  useEffect(() => {
    setIsAuthenticated((prev) => JSON.parse(prev));
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={isAuthenticated
          ? <Dashboard />
          : <Navigate to={routes.access} />} />
        <Route
          path={routes.access}
          element={!isAuthenticated
            ? <Access />
            : <Navigate to={routes.dashboard} />}
        />
        <Route
          path={routes.dashboard}
          element={isAuthenticated
            ? <Dashboard />
            : <Navigate to={routes.access} />}
        >
          <Route index element={<h1>Charts</h1>} />
          <Route path={routes.dashboardIncidents} element={<h1>Incidents</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;