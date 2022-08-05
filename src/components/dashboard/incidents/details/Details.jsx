import Dialog from '../../../elements/Dialog';

function Details({ isOpen, onClose = () => { }, width }) {

  const handleClose = () => {
    onClose();
  };

  const render = () => {
    return (
      <Dialog isOpen={isOpen} onClose={handleClose} width={width}>
        <h1 className="typography typography__large">
          Detalles del incidente
        </h1>
        <div className="flex mt-20"></div>
      </Dialog>
    );
  };

  return render();
}

export default Details;