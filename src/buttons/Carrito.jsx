function Carrito({ onClick }) {
  return (
    <button className="btn-carrito" onClick={onClick} title="Comprar productos">
      <span className="material-symbols-outlined">
        add_shopping_cart
      </span>
    </button>
  );
}

export default Carrito;