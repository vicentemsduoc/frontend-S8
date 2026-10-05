function ProductCard({
  nombre,
  precioNormal,
  precioOferta,
  descripcion,
  imagen,
  stock,
  onAgregar,
}) {
  const agotado = stock === 0;

  return (
    <article className="card h-100 bg-dark text-white border-secondary">
      <img
        src={imagen}
        alt={nombre}
        className="card-img-top object-fit-cover"
        style={{ height: "220px" }}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
        <p className="text-secondary mb-1">
          <s>${precioNormal}</s>
        </p>
        <p className="fw-bold text-warning">${precioOferta}</p>
        <p className={agotado ? "small text-danger" : "small"}>Stock: {stock}</p>
        <button
          type="button"
          className={agotado ? "btn btn-secondary mt-auto" : "btn btn-warning mt-auto"}
          onClick={onAgregar}
          disabled={agotado}
        >
          {agotado ? "En el carrito" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;