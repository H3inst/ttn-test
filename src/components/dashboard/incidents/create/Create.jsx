import { useState } from 'react';
import { useForm } from '../../../../hooks/useForm';
import Dropdown from '../../../elements/Dropdown';

const DEFAULT_FORM_FIELDS = {
  user_name: '',
  position: '',
  campus: '',
  patient_name: '',
  incident_date: '',
  description: ''
};

function CreateIncident({ onClose, onRegister }) {
  const [stepperPosition, setStepperPosition] = useState(1);
  const { handleInputChange, inputValues, setInputs } = useForm(DEFAULT_FORM_FIELDS);

  const handleCloseModal = () => {
    if (stepperPosition > 1) {
      setStepperPosition(prev => prev - 1);
      return;
    }
    onClose();
  };

  const handleNextStep = () => {
    setStepperPosition(prev => prev + 1);
    setInputs({
      user_name: inputValues.user_name,
      position: inputValues.position,
      campus: inputValues.campus,
      patient_name: inputValues.patient_name,
      description: inputValues.description
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister((prev) => [...prev, inputValues]);
    onClose();
  };

  const renderStepper = () => {
    return (
      <div className="stepper">
        <div className="stepper-item">
          <div className={`circle ${stepperPosition > 0 && "circle-active"}`}>
            <i className="fa-solid fa-check"></i>
          </div>
          <p className={`typography typography__normal fw-semibold ${stepperPosition > 0 && "text-secondary"}`}>
            Información básica
          </p>
        </div>
        <div className={`stepper-line ${stepperPosition > 1 && "bg-secondary"}`}></div>
        <div className="stepper-item">
          <div className={`circle ${stepperPosition > 1 && "circle-active"}`}>
            <i className="fa-solid fa-check"></i>
          </div>
          <p className={`typography typography__normal fw-semibold ${stepperPosition > 1 && "text-secondary"}`}>
            Información captura
          </p>
        </div>
        <div className={`stepper-line ${stepperPosition > 2 && "bg-secondary"}`}></div>
        <div className="stepper-item">
          <div className={`circle ${stepperPosition > 2 && "circle-active"}`}>
            <i className="fa-solid fa-check"></i>
          </div>
          <p className={`typography typography__normal fw-semibold ${stepperPosition > 2 && "text-secondary"}`}>
            Descripción de incidente
          </p>
        </div>
      </div>
    );
  };

  const renderForms = () => {
    return (
      <form>
        {stepperPosition === 1 && (
          <>
            <h1 className="typography typography__large text-primary">Información básica</h1>
            <div className="flex mt-20">
              <input
                type="text"
                className="textfield w-100 mr-10"
                placeholder="Nombre del reportante"
                name="user_name"
                onChange={handleInputChange}
                value={inputValues.user_name}
              />
              <input
                type="text"
                className="textfield w-100"
                placeholder="Cargo"
                name="position"
                onChange={handleInputChange}
                value={inputValues.position}
              />
            </div>
            <div className="flex mt-20">
              <Dropdown
                width="100%"
                placeholder="Sede"
                options={['Foca Norte', 'Gral del Norte']}
                onChange={(value) => setInputs({ campus: value })}
              />
              <div className="mr-10"></div>
              <Dropdown
                width="100%"
                placeholder="Lugar"
              />
            </div>
            <div className="flex mt-20">
              <input
                type="text"
                className="textfield w-100 mr-10"
                placeholder="Servicio"
                disabled
              />
              <input
                type="text"
                className="textfield w-100"
                placeholder="Fecha del incidente"
                name="incident_date"
                onChange={handleInputChange}
                value={inputValues.incident_date}
              />
            </div>
            <div className="flex mt-20">
              <input
                type="text"
                className="textfield w-100 mr-10"
                placeholder="Fecha del incidente"
                disabled
              />
              <input
                type="text"
                className="textfield w-100"
                placeholder="Fecha del reporte"
                disabled
              />
            </div>
            <div className="flex w-100 align-center justify-center mt-20">
              <button
                className="button button__medium button__primary"
                onClick={handleNextStep}
                type="button"
              >
                Continuar
              </button>
            </div>
          </>
        )}


        {stepperPosition === 2 && (
          <>
            <h1 className="typography typography__large text-primary">Información captura</h1>
            <div className="flex mt-20">
              <input
                type="text"
                className="textfield w-100 mr-10"
                placeholder="Nombre del paciente"
                name="patient_name"
                onChange={handleInputChange}
                value={inputValues.patient_name}
              />
              <div className="flex w-100">
                <Dropdown
                  width="80px"
                  placeholder="C.C"
                />
                <input
                  type="text"
                  className="textfield ml-10"
                  placeholder="Identificación"
                  disabled
                />
              </div>
            </div>
            <div className="mr-10"></div>
            <Dropdown
              className="mt-20"
              width="100%"
              placeholder="Aseguradora"
            />
            <div className="flex mt-20">
              <input
                type="text"
                className="textfield w-100 mr-10"
                placeholder="Edad"
                disabled
              />
              <input
                type="text"
                className="textfield w-100"
                placeholder="Sexo"
                disabled
              />
            </div>
            <textarea
              type="text"
              className="textfield w-100 mt-20"
              placeholder="Antecedentes patológicos"
              rows={5}
              disabled
            />
            <div className="flex w-100 align-center justify-center mt-20">
              <button
                className="button button__medium button__primary"
                onClick={handleNextStep}
                type="button"
              >
                Continuar
              </button>
            </div>
          </>
        )}
        {stepperPosition === 3 && (
          <>
            <h1 className="typography typography__large text-primary">Descripción del incidente</h1>
            <textarea
              type="text"
              className="textfield w-100 mt-20"
              placeholder="Descripción de lo ocurrido"
              name="description"
              onChange={handleInputChange}
              rows={5}
            />
            <textarea
              type="text"
              className="textfield w-100 mt-20"
              placeholder="Antecedentes patológicos"
              rows={5}
              disabled
            />
            <div className="flex w-100 align-center justify-center mt-20">
              <button className="button button__medium button__primary" onClick={handleSubmit}>
                Guardar
              </button>
            </div>
          </>
        )}
      </form>
    );
  };

  const render = () => {
    return (
      <div className="modal">
        <div className="flex align-center">
          <i className="fa-solid fa-arrow-left" onClick={handleCloseModal}></i>
          <h1 className="typography typography__large text-primary">
            Nuevo incidente y evento adverso
          </h1>
        </div>
        <div className="card mt-30" style={{ width: '100%', maxWidth: '700px' }}>
          {renderStepper()}
        </div>

        <div className="card mt-30" style={{ width: '100%', maxWidth: '700px' }}>
          {renderForms()}
        </div>
      </div>
    );
  };

  return render();
}

export default CreateIncident;