import { useNavigate } from 'react-router-dom'

function Catalogo({ onClick }) {
     const navigate = useNavigate();

  return (
    <button className="btn-catalogo"
      title="Ver catálogo de cortes y ofertas"
      onClick={() => navigate('/catalogo')}
    >
      <span className="material-symbols-outlined">
        content_cut
      </span>
    </button>
  );
}

export default Catalogo;