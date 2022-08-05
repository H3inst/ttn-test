import { Fragment, useEffect, useState } from 'react';
import CreateIncident from './create/Create';

function Incidents() {
  const [registers, setRegisters] = useState(
    () => JSON.parse(localStorage.getItem('registers')) || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('registers', JSON.stringify(registers));
  }, [registers]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderItem = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.user_name}</td>
        <td>{user.position}</td>
        <td>{user.campus}</td>
        <td>{user.patient_name}</td>
        <td>{user.incident_date}</td>
        <td>{user.description}</td>
        <td style={{ textAlign: 'right' }}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </td>
      </tr>
    );
  };

  const renderTable = () => {
    return (
      <table className="table w-100">
        <thead>
          <tr>
            <th>Nombre reportante</th>
            <th>Cargo</th>
            <th>Sede</th>
            <th>Paciente</th>
            <th>Fecha incidente</th>
            <th>Descripción incidente</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {registers.length ? registers.map(renderItem) : (
            <tr>
              <td align="center" colSpan={6}>No hay datos disponibles...</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };

  const render = () => {
    return (
      <Fragment>
        {!isModalOpen ? (
          <Fragment>
            <div className="flex justify-between">
              <h1 className="typography typography__large">
                Incidents
              </h1>
              <button className="button" onClick={handleOpenModal}>
                Nuevo incidente
              </button>
            </div>
            <div className="card card__fluid mt-30">
              <div style={{ overflowX: 'auto' }}>
                {renderTable()}
              </div>
            </div>
          </Fragment>
        ) : (
          <CreateIncident
            onRegister={setRegisters}
            onClose={handleCloseModal}
          />
        )}
      </Fragment>
    );
  };

  return render();
}

export default Incidents;