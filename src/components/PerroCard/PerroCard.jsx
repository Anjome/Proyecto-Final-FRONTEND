import { useEffect, useState } from "react";
import "./PerroCard.css"; // Puedes agregar estilos personalizados aquí

const PerroCard = () => {
    const [perroImagen, setPerroImagen] = useState("");

    const handleFetch = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setPerroImagen(data.message);
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className="tarjeta-perro">
            {perroImagen ? <img src={perroImagen} alt="Perro" className="imagen-perro" /> : <p>Cargando...</p>}
            <button onClick={handleFetch}>Actualizar imagen</button>
        </div>
    );
};

export { PerroCard };
