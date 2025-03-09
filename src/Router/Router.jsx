import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nosotros } from "../pages/Nosotros/Nosotros"
import { Colores } from "../pages/Colores/Colores"
import { Contacto } from "../pages/Contacto/Contacto"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nosotros />}></Route>
                <Route path="Colores" element={<Colores />} />
                <Route path="Contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    )
}

export { Router }