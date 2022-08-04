import { Fragment, useState } from 'react';
import CreateIncident from './create/Create';

function Incidents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModa = () => {
    setIsModalOpen(false);
  }

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
                <table className="table w-100">
                  <thead>
                    <tr>
                      <th>Nombre reportante</th>
                      <th>Cargo</th>
                      <th>Sede</th>
                      <th>Paciente</th>
                      <th>Fecha incidente</th>
                      <th>Descripción incidente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
                      <tr key={e}>
                        <td>Luis Perez Ferrer</td>
                        <td>Auxiliar</td>
                        <td>Foca Norte</td>
                        <td>Ana Gutierrez Florez</td>
                        <td>11/04/2022 10:30 a.m</td>
                        <td>El paciente se cayó de una silla y se partió el pescuezo</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Fragment>
        ) : (
          <CreateIncident onClose={handleCloseModa} />
        )}
      </Fragment>
    );
  };

  return render();
}

export default Incidents;