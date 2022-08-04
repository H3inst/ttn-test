import { Outlet } from 'react-router-dom';
import Menubar from './menubar/Menubar';
import Topbar from './topbar/Topbar';

function Dashboard() {

  const render = () => {
    return (
      <div className="dashboard-layout">
        <Topbar />
        <div className="flex flex-1" style={{ overflow: 'hidden' }}>
          <Menubar />
          <main className="flex-1 pl-50 pr-50 pt-30 pb-50" style={{ overflow: 'auto' }}>
            <Outlet />
          </main>
        </div>
      </div>
    );
  };

  return render();
}

export default Dashboard;