function CreateIncident({ onClose }) {

  const handleCloseModal = () => {
    onClose();
  };

  const render = () => {
    return (
      <div className="modal">
        <div className="flex align-center">
          <i class="fa-solid fa-arrow-left" onClick={handleCloseModal}></i>
          <h1 className="typography typography__large text-primary">
            Nuevo incidente y evento adverso
          </h1>
        </div>
      </div>
    );
  };

  return render();
}

export default CreateIncident;