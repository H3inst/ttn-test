function Charts() {

  const render = () => {
    return (
      <div className="dashboard-charts">
        <h1 className="typography typography__large">
          Dashboard
        </h1>
        <div className="flex mt-20">
          <div className="card w-100 m-10" style={{ height: '80px' }}></div>
          <div className="card w-100 m-10" style={{ height: '80px' }}></div>
          <div className="card w-100 m-10" style={{ height: '80px' }}></div>
          <div className="card w-100 m-10" style={{ height: '80px' }}></div>
        </div>
        <div className="flex">
          <div className="card w-100 m-10" style={{ height: '250px' }}></div>
          <div className="card w-100 m-10" style={{ height: '250px' }}></div>
        </div>
        <div className="flex">
          <div className="card w-70 mr-20" style={{ height: '100%' }}></div>
          <div className="flex flex-column w-100 mr-20">
            <div className="card w-100 mb-10" style={{ height: '80px' }}></div>
            <div className="card w-100 mb-10" style={{ height: '80px' }}></div>
            <div className="card w-100" style={{ height: '80px' }}></div>
          </div>
          <div className="flex flex-column w-100">
            <div className="card w-100 mb-10" style={{ height: '80px' }}></div>
            <div className="card w-100 mb-10" style={{ height: '80px' }}></div>
            <div className="card w-100" style={{ height: '80px' }}></div>

          </div>
        </div>
      </div>
    );
  };

  return render();
}

export default Charts;