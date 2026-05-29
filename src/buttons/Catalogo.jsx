function Catalogo({ onClick }) {
  return (
    <button className="btn-catalogo" onClick={onClick} title="Ver catálogo de cortes y ofertas">
      <span className="material-symbols-outlined">
        content_cut
     </span>
    </button>
  );
}

export default Catalogo;