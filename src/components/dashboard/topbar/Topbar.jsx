function Topbar() {

  const render = () => {
    return (
      <div className="dashboard-topbar">
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
      </div>
    );
  };

  return render();
}

export default Topbar;