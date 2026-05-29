function Turnero({ onClick }) {
  return (
    <button className="btn-turnero" onClick={onClick} title="Ver y sacar turnos">
      <span className="material-symbols-outlined">
         calendar_month
     </span>
    </button>
  );
}

export default Turnero;