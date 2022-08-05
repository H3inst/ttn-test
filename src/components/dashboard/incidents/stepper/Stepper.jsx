function Stepper({ step }) {

  const render = () => {
    return (
      <div className="stepper">
        <div className="stepper-item">
          <div className={`circle ${step > 0 && "circle-active"}`}>
            <i className="fa-solid fa-check"></i>
          </div>
          <p className={`typography typography__normal fw-semibold ${step > 0 && "text-secondary"}`}>
            Información básica
          </p>
        </div>
        <div className={`stepper-line ${step > 1 && "bg-secondary"}`}></div>
        <div className="stepper-item">
          <div className={`circle ${step > 1 && "circle-active"}`}>
            <i className="fa-solid fa-check"></i>
          </div>
          <p className={`typography typography__normal fw-semibold ${step > 1 && "text-secondary"}`}>
            Información captura
          </p>
        </div>
        <div className={`stepper-line ${step > 2 && "bg-secondary"}`}></div>
        <div className="stepper-item">
          <div className={`circle ${step > 2 && "circle-active"}`}>
            <i className="fa-solid fa-check"></i>
          </div>
          <p className={`typography typography__normal fw-semibold ${step > 2 && "text-secondary"}`}>
            Descripción de incidente
          </p>
        </div>
      </div>
    );
  };

  return render();
}

export default Stepper;