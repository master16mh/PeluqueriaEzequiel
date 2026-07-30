import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {

        const existe = carrito.find(
            (p) => p.id === producto.id
        );

        if (existe) {

            setCarrito(
                carrito.map((p) =>
                    p.id === producto.id
                        ? { ...p, cantidad: p.cantidad + 1 }
                        : p
                )
            );

        } else {

            setCarrito([
                ...carrito,
                { ...producto, cantidad: 1 }
            ]);

        }
    };


    const disminuirCantidad = (id) => {

        setCarrito(
            carrito
                .map((p) =>
                    p.id === id
                        ? { ...p, cantidad: p.cantidad - 1 }
                        : p
                )
                .filter((p) => p.cantidad > 0)
        );

    };


    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                disminuirCantidad
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
}


export function useCarrito(){
    return useContext(CarritoContext);
}