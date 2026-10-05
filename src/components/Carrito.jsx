function Carrito({ carrito, onQuitar }) {
  const total = carrito.reduce((suma, item) => suma + item.precioOferta, 0);

  return (
    <section className="mt-4 p-3 border border-secondary rounded">
      <h2 className="h4">Carrito ({carrito.length})</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {carrito.map((item) => (
            <li
              key={item.lineaId}
              className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center"
            >
              <span>
                {item.nombre} — ${item.precioOferta}
              </span>
              <button
                type="button"
                className="btn btn-outline-warning btn-sm"
                onClick={() => onQuitar(item.lineaId)}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-3 mb-0 fw-bold">Total: ${total}</p>
    </section>
  );
}

export default Carrito;