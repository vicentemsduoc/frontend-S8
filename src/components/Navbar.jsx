function Navbar({ cantidad }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-secondary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
          <img
            src="/img/logo-tienda.png"
            alt="Logo de Steam del Persa"
            width="40"
            height="40"
          />
          Steam del Persa
        </a>
        <span className="navbar-text text-warning">Carrito: {cantidad}</span>
      </div>
    </nav>
  );
}

export default Navbar;