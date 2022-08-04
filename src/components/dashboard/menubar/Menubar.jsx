import { NavLink } from 'react-router-dom';
import routes from '../../../app/constants/routes';

function Menubar() {
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    window.location.reload();
  };

  const render = () => {
    return (
      <div className="dashboard-menubar">
        <div className="dashboard-menubar__item">
          <i className="fa-brands fa-react"></i>
        </div>

        <div className="flex-1 w-100">
          <NavLink
            to={routes.dashboard}
            className={({ isActive }) => `dashboard-menubar__item ${isActive && "active"}`}
            end
          >
            <i className="fa-solid fa-gear"></i>
            <p className="typography">Dashboard</p>
          </NavLink>

          <NavLink
            to={routes.dashboardIncidents}
            className={({ isActive }) => `dashboard-menubar__item ${isActive && "active"}`}
          >
            <i className="fa-solid fa-circle-plus"></i>
            <p className="typography">Incidents</p>
          </NavLink>
        </div>

        <div className="dashboard-menubar__item" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <p className="typography">Log out</p>
        </div>
      </div>
    );
  };

  return render();
}

export default Menubar;