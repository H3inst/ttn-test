import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from './constants/routes';
import Access from '../components/access/Access';
import Dashboard from '../components/dashboard/Dashboard';
import Incidents from '../components/dashboard/incidents/Incidents';
import Charts from '../components/dashboard/charts/Charts';

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
          <Route index element={<Charts />} />
          <Route path={routes.dashboardIncidents} element={<Incidents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;