import { Fragment, useEffect, useState } from 'react';
import Dropdown from '../../elements/Dropdown';
import CreateIncident from './create/Create';
import Details from './details/Details';

function Incidents() {
  const [openDialog, setOpenDialog] = useState(false);
  const [registers, setRegisters] = useState(
    () => JSON.parse(localStorage.getItem('registers')) || []
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
  };

  const handleCloseMenu = () => {
    setOpenDialog(false);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen(prev => !prev);
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

  const renderFilterBar = () => {
    return (
      <div className={`filter-bar ${isFilterOpen && "filter-bar__opened"}`}>
        <div className="flex justify-end w-100">
          <div className="icon-button" onClick={handleToggleFilter}>
            {!isFilterOpen ? (
              <i className="fa-solid fa-chevron-down"></i>
            ) : (
              <i className="fa-solid fa-chevron-up"></i>
            )}
          </div>
        </div>
        <div className="flex align-center" style={{ flexWrap: 'wrap' }}>
          <input
            type="text"
            className="textfield m-5"
            placeholder="Fecha inicio"
          />
          <input
            type="text"
            className="textfield m-5"
            placeholder="Fecha fin"
          />
          <Dropdown
            width="180px"
            placeholder="Estado"
          />
          <input
            type="text"
            className="textfield m-5"
            placeholder="No. programación"
          />
          <input
            type="text"
            className="textfield m-5"
            placeholder="ID Paciente"
          />
          <Dropdown
            className="m-5"
            width="180px"
            placeholder="Cirujano"
          />
          <Dropdown
            width="180px"
            placeholder="Tracking"
          />
          <Dropdown
            className="m-5"
            width="180px"
            placeholder="Condición"
          />
          <input
            type="text"
            className="textfield m-5"
            placeholder="Recuento"
          />
        </div>
      </div>
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
              {renderFilterBar()}
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