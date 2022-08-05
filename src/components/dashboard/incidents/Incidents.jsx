import { Fragment, useEffect, useState } from 'react';
import CreateIncident from './create/Create';
import Details from './details/Details';

function Incidents() {
  const [openDialog, setOpenDialog] = useState(false);
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

  const handleOpenMenu = () => {
    setOpenDialog(true);
  }

  const handleCloseMenu = () => {
    setOpenDialog(false);
  }

  const renderItem = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.user_name}</td>
        <td>{user.position}</td>
        <td>{user.campus}</td>
        <td>{user.patient_name}</td>
        <td>{user.incident_date}</td>
        <td>{user.description}</td>
        <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="icon-button" onClick={handleOpenMenu}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
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
              <div className="filter-bar">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
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
        <Details
          isOpen={openDialog}
          onClose={handleCloseMenu}
          width={600}
        />
      </Fragment>
    );
  };

  return render();
}

export default Incidents;