import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar === true paso nuestra validacion
    if (validar(email, password)) {
      return alert(`BIENVENIDO ${email}`);
    }

    // alert('NO PASO')
    
  };

  const validar = (email, password) => {

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // console.log(regex.test(email))
    
    if (!password.length || !email.length) {
      setError("complete los campos");
      return false;
    }

    if (!regex.test(email)) {
      setError("Email incorrecto");
      return false;
    }

    if (password.length < 6) {
      setError("Contraseña debe tener mas de 6 caracteres");
      return false;
    }

    // paso la validacion
    return true;
  };

  return (
    <>
      <h1 className="title">Iniciar Sesion</h1>
      <form className="form__container" onSubmit={(e) => handleSubmit(e)}>
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            maxLength="999"
            className="input"
            autoComplete="off"
            onChange={(e) => {
              setError('');
              setEmail(e.target.value)
            }}
            value={email}
          />
        </div>
        <div className="form__field">
          <label htmlFor="password">Contrasena</label>
          <input
            type="password"
            autoComplete="off"
            maxLength="999"
            id="password"
            className="input"
            value={password}
            onChange={(e) => {
              setError('');
              setPassword(e.target.value)
            }}
          />
        </div>
        {error && <div className="error__block">{error}</div>}
        <button type="submit" className="btn__submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export { Login };
