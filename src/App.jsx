import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Carrito from "./components/Carrito";
import Navbar from "./components/Navbar";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo leer el catálogo");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch(() => {
        setError("No pudimos cargar el catálogo. Recarga la página.");
        setCargando(false);
      });
  }, []);

  function agregarAlCarrito(producto) {
    const stockActual = Number(producto.stock);
    if (!stockActual) {
      return;
    }
    setCarrito([...carrito, { ...producto, lineaId: Date.now() }]);
    setProductos(
      productos.map((item) =>
        item.id === producto.id
          ? { ...item, stock: Number(item.stock) - 1 }
          : item
      )
    );
  }

  function quitarDelCarrito(lineaId) {
    const linea = carrito.find((item) => item.lineaId === lineaId);
    setCarrito(carrito.filter((item) => item.lineaId !== lineaId));
    if (!linea) {
      return;
    }
    setProductos(
      productos.map((item) =>
        item.id === linea.id ? { ...item, stock: item.stock + 1 } : item
      )
    );
  }

  const texto = busqueda.toLowerCase();
  const visibles = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(texto)
  );

  return (
    <>
    <Navbar cantidad={carrito.length} />
    <main className="container py-4">
      <h1 className="mb-4">Steam del Persa</h1>
      <Carrusel />
      <label htmlFor="q" className="form-label">
        Buscar
      </label>
      <input
        id="q"
        type="search"
        className="form-control mb-4"
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
        placeholder="Juego o consola"
        
      />

      {cargando && <p>Cargando catálogo...</p>}
      {error && <p className="text-warning">{error}</p>}

      {!cargando && !error && visibles.length === 0 && (
        <p>No hay productos con ese nombre.</p>
      )}

      <div className="row g-4">
        {!cargando &&
          !error &&
          visibles.map((producto) => (
            <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <ProductCard
              nombre={producto.nombre}
              precioNormal={producto.precioNormal}
              precioOferta={producto.precioOferta}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
              stock={producto.stock}
              onAgregar={() => agregarAlCarrito(producto)}
            />
            </div>
          ))}
      </div>

      <Carrito carrito={carrito} onQuitar={quitarDelCarrito} />
    </main>
      <Footer />
      </>
  );
}
export default App;