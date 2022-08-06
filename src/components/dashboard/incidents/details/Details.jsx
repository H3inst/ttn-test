import Dialog from '../../../elements/Dialog';
import Dropdown from '../../../elements/Dropdown';

function Details({ isOpen, onClose = () => { }, width }) {

  const handleClose = () => {
    onClose();
  };

  const render = () => {
    return (
      <Dialog isOpen={isOpen} onClose={handleClose} width={width}>
        <h1 className="typography typography__large text-primary">
          Detalles del incidente
        </h1>
        <div className="flex mt-20">
          <input
            type="text"
            className="textfield mr-10 w-100"
            placeholder="Nombre del insumo"
          />
          <input
            type="text"
            className="textfield w-100"
            placeholder="Código"
          />
        </div>
        <Dropdown
          className="mt-20"
          placeholder="Sede"
        />
        <textarea
          className="textfield w-100 mt-20"
          rows={5}
          placeholder="Comentarios"
        />
        <div className="flex justify-center w-100 mt-20">
          <button className="button button__primary button__medium">
            Solicitar
          </button>
        </div>
      </Dialog>
    );
  };

  return render();
}

export default Details;