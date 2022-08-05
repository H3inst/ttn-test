import { Fragment, useRef } from "react";
import { createPortal } from "react-dom";

function Dialog({ children, isOpen, onClose, width }) {
  const dialogId = document.getElementById("dialog");
  const dialogRef = useRef(null);

  const handleCloseDialog = (event) => {
    if (dialogRef.current === event.target) {
      onClose();
    }
  }

  const renderContent = () => {
    return (
      <Fragment>
        {isOpen && (
          <div
            className="dialog-wrapper"
            ref={dialogRef}
            onClick={handleCloseDialog}
          >
            <div className="dialog-content" style={{ width: width || 300 }}>
              {children}
            </div>
          </div>
        )}
      </Fragment>
    );
  }

  return createPortal(renderContent(), dialogId);
}

export default Dialog;