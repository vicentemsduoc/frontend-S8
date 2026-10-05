import { useState } from "react";

function Footer() {
  const [enviado, setEnviado] = useState(false);

  function enviarEncargo(evento) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <footer id="contacto" className="border-top border-secondary mt-5 py-4">
      <div className="container">
        <h2>Contacto</h2>
        <p>¿Buscas un juego en específico? ¡Hacemos encargos!</p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:ventas@steamdelpersa.cl">ventas@steamdelpersa.cl</a>
          </li>
          <li>
            <strong>WhatsApp:</strong> +56 9 9999 9999
          </li>
          <li>
            <strong>Ubicación:</strong> Pasillo 9, Local 99, Persa Biobío.
          </li>
        </ul>

        {enviado ? (
          <p className="text-warning">Encargo enviado. Te contactaremos pronto.</p>
        ) : (
          <form onSubmit={enviarEncargo}>
            <fieldset className="border border-secondary rounded p-3">
              <legend>Encarga un juego</legend>

              <label htmlFor="nombre" className="form-label mt-2">
                Nombre
              </label>
              <input id="nombre" name="nombre" className="form-control" required />

              <label htmlFor="email" className="form-label mt-2">
                Correo
              </label>
              <input id="email" name="email" type="email" className="form-control" required />

              <label htmlFor="juego" className="form-label mt-2">
                Juego que buscas
              </label>
              <input id="juego" name="juego" className="form-control" />

              <label htmlFor="plataforma" className="form-label mt-2">
                Plataforma
              </label>
              <select id="plataforma" name="plataforma" className="form-select">
                <option value="ds">Nintendo DS</option>
                <option value="gba">Game Boy Advance</option>
                <option value="ps1">PlayStation 1</option>
                <option value="PC">Computador</option>
              </select>

              <label htmlFor="mensaje" className="form-label mt-2">
                Mensaje
              </label>
              <textarea id="mensaje" name="mensaje" rows="4" className="form-control" />

              <button type="submit" className="btn btn-warning mt-3">
                Enviar encargo
              </button>
            </fieldset>
          </form>
        )}

        <p className="mt-4 mb-0">© 2026 Steam del Persa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;