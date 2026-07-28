import { useNavigate } from 'react-router-dom' 

function Turnero({ onClick }) {
    const navigate = useNavigate();

  return (
    <button className="btn-turnero" 
      title="Comprar productos"
      onClick={() => navigate('/turnero')} 
    >
      <span className="material-symbols-outlined">
        calendar_month
      </span>
    </button>
  );
}

export default Turnero;