import { useState } from "react";

const portadas = [
  {
    id: 1,
    nombre: "Mario Kart DS",
    gif: "/img/mario-kart-ds-gameplaygif.gif",
  },
  {
    id: 2,
    nombre: "Silent Hill",
    gif: "/img/silent-hills-1-gameplaygif.gif",
  },
  {
    id: 3,
    nombre: "Pokémon Esmeralda GBA",
    gif: "/img/pokemon-esmeralda-gameplaygif.gif",
  },
  {
    id: 4,
    nombre: "Hugo: The Quest for the Sunstones PC",
    gif: "/img/hugo-quest-for-the-sunstones-gameplayimg.webp",
  },
];

function Carrusel() {
  const [indice, setIndice] = useState(0);
  const actual = portadas[indice];

  function anterior() {
    setIndice(indice === 0 ? portadas.length - 1 : indice - 1);
  }

  function siguiente() {
    setIndice(indice === portadas.length - 1 ? 0 : indice + 1);
  }

  return (
    <section className="mb-4 bg-black rounded overflow-hidden position-relative">
      <img
        src={`${import.meta.env.BASE_URL}${actual.gif.replace(/^\//, "")}`}
        alt={"Gameplay de " + actual.nombre}
        className="w-100 object-fit-contain"
        style={{ height: "360px", backgroundColor: "#000" }}
      />
      <p className="position-absolute bottom-0 start-0 end-0 text-center m-0 py-2 bg-dark bg-opacity-75">
        ¡{actual.nombre} disponible!
      </p>
      <button
        type="button"
        className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
        onClick={anterior}
      >
        ‹
      </button>
      <button
        type="button"
        className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
        onClick={siguiente}
      >
        ›
      </button>
    </section>
  );
}

export default Carrusel;