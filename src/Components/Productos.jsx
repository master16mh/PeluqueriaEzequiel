import { useState } from "react";
import { useCarrito } from "../Context/CarritoContext";

function Productos() {

    const { agregarAlCarrito } = useCarrito();

    const [mensaje, setMensaje] = useState("");

    const productos = [
        {
            id: 1,
            nombre: "Cera para cabello",
            precio: 5000
        },
        {
            id: 2,
            nombre: "Shampoo",
            precio: 8000
        },
        {
            id: 3,
            nombre: "Acondicionador",
            precio: 7000
        }
    ];


    const agregarProducto = (producto) => {

        agregarAlCarrito(producto);

        setMensaje(`✅ ${producto.nombre} agregado al carrito`);

        setTimeout(() => {
            setMensaje("");
        }, 2000);
    };


    return (
        <div>

            {mensaje && (
                <div className="mensaje-carrito">
                    {mensaje}
                </div>
            )}


            <div className="contenedor-productos">

                {productos.map((producto) => (

                    <div className="card-producto" key={producto.id}>

                        <h3>{producto.nombre}</h3>

                        <p>${producto.precio}</p>

                        <button 
                        onClick={() => agregarProducto(producto)}
                        >
                            Agregar al carrito 🛒
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Productos;