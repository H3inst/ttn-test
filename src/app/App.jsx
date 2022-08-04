import { Fragment } from 'react';
import { ToastContainer, Flip } from 'react-toastify';

import RootRouter from './Router';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <Fragment>
      <ToastContainer
        className="typography typography__normal fw-semibold"
        position="top-center"
        autoClose={5000}
        hideProgressBar="false"
        newestOnTop={false}
        rtl={false}
        transition={Flip}
        pauseOnFocusLoss
        closeOnClick
        draggable
        pauseOnHover
      />
      <RootRouter />
    </Fragment>
  );
}

export default App;
