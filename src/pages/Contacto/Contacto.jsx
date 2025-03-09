import { useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import "../Contacto/Contacto.css"


const Contacto = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${mensaje}`);
        setName("");
        setEmail("");
        setMensaje("")
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "mensaje") {
            setMensaje(value);
        }
    };


    return (
        <Layout>
            <h1><em>Formulario de contacto</em></h1>
            <h2>Complete con sus datos:</h2>

            <form onSubmit={handleSubmit} className="contacto-form">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="name" placeholder="Tu nombre" onChange={handleChange} value={name} required autoComplete="off" />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" nombre="Email" placeholder="Ingrese su mail" onChange={handleChange} value={email} required autoComplete="off" />

                <label htmlFor="mensaje">Mensaje</label>
                <input type="text" name="mensaje" nombre="Mensaje" placeholder="escriba su mensaje" onChange={handleChange} value={mensaje} required autoComplete="off" />

                <button type="submit">Enviar</button>
            </form>
        </Layout>
    )
}

export { Contacto }