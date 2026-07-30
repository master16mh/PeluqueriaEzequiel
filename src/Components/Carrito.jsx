import { useCarrito } from "../Context/CarritoContext";


function Carrito(){

    const { carrito, agregarAlCarrito, disminuirCantidad } = useCarrito();


    const total = carrito.reduce(
        (acum, producto) =>
            acum + producto.precio * producto.cantidad,
        0
    );


    return (
        <div className="carrito">

            <h2>Mi carrito</h2>


            {carrito.length === 0 ? (

                <p className="vacio">
                    🛒 El carrito está vacío
                </p>

            ) : (

                <>
                {carrito.map((producto)=>(

                    <div className="item-carrito" key={producto.id}>

                        <h3>{producto.nombre}</h3>

                        <p>${producto.precio}</p>


                        <button
                        onClick={() => disminuirCantidad(producto.id)}
                        >
                            -
                        </button>


                        <span>
                            {producto.cantidad}
                        </span>


                        <button
                        onClick={() => agregarAlCarrito(producto)}
                        >
                            +
                        </button>


                        <p>
                          Subtotal:
                          ${producto.precio * producto.cantidad}
                        </p>


                    </div>

                ))}


                <h2>
                    Total: ${total}
                </h2>

                </>

            )}

        </div>
    )
}


export default Carrito;