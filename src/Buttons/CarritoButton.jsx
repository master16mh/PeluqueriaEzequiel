import { useNavigate } from 'react-router-dom' 

function Carrito({ onClick }) {
    const navigate = useNavigate();

  return (
    <button className="btn-carrito" 
      title="Comprar productos"
      onClick={() => navigate('/carrito')} 
    >
      <span className="material-symbols-outlined">
        add_shopping_cart  
      </span>
    </button>
  );
}

export default Carrito;