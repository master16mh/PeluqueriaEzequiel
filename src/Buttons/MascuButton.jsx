import { useNavigate } from 'react-router-dom'

function Mascu({ onClick }) {
     const navigate = useNavigate();

  return (
    <button className="btn-mascu"
      title="Ver catálogo de cortes masculinos"
      onClick={() => navigate('/cortes/masculinos')}
    >
      <span className="material-symbols-outlined">
        male
      </span>
    </button>
  );
}

export default Mascu;