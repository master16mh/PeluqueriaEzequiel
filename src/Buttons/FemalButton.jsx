import { useNavigate } from 'react-router-dom'

function Female({ onClick }) {
     const navigate = useNavigate();

  return (
    <button className="btn-female"
      title="Ver catálogo de cortes femeninos"
      onClick={() => navigate('/cortes/femeninos')}
    >
      <span className="material-symbols-outlined">
        female
      </span>
    </button>
  );
}

export default Female;