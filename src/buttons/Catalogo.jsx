// Catalogo.jsx

function Catalogo({ children, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}

export default Catalogo;