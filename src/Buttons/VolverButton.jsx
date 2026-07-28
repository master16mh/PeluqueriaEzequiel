import { Navigate, useNavigate } from "react-router-dom";

function Volver() {
    const navigate = useNavigate()

    return(
      <button className="btn-volver" onClick={()=> navigate('/')} title="Volver a inicio">
        <span className="material-symbols-outlined">
          arrow_back
        </span>
      </button>
    );
}

export default Volver