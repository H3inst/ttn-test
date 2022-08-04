import { toast } from 'react-toastify';

import data from '../../data/access.json';
import LoginSvg from '../../assets/access/login.svg';

import { useForm } from '../../hooks/useForm';

const DEFAULT_VALUES = {
  user_id: '',
  user_password: ''
};

function Access() {
  const { handleInputChange, inputValues } = useForm(DEFAULT_VALUES);

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    let { user_id, user_password } = inputValues;

    if (user_id !== data.user_identification || user_password !== data.user_password) {
      toast.error('El usuario o contraseña es incorrecto');
      return;
    }
    localStorage.setItem('authenticated', true);
    toast.success('Sesión iniciada');
    window.location.reload();
  };

  const render = () => {
    return (
      <section className="access-layout">
        <form className="access-card" onSubmit={handleSubmitLogin}>
          <h1 className="typography typography__display text-primary mb-50">
            Bienvenido
          </h1>
          <div className="access-card__input-group">
            <span className="typography typography__normal text-primary fw-semibold mb-5">
              Identificación
            </span>
            <input
              type="text"
              className="textfield"
              name="user_id"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="access-card__input-group mt-20 mb-20">
            <span className="typography typography__normal text-primary fw-semibold mb-5">
              Contraseña
            </span>
            <input
              type="password"
              className="textfield"
              name="user_password"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="button button__primary button__large mt-50 mb-50">
            Continuar
          </button>
        </form>

        <img
          src={LoginSvg}
          className="image-responsive ml-50"
          alt="login"
          width="50%"
        />
      </section>
    );
  };

  return render();
}

export default Access;