
import { Link } from "react-router-dom"
import "./Layout.css"

const Layout = (props) => {
    return (
        <>
            <header>
                <img src="https://tse4.mm.bing.net/th?id=OIP.Y0-YiI3P6TWZXvuVKOT13wHaHa&pid=Api&P=0&h=180"
                    alt="Logo" />
                <p className="frase-header">¡Pinta tu vida de colores!</p>
                <nav>
                    <ul>
                        <li><Link to="/">NOSOTROS</Link></li>
                        <li><Link to="/colores">COLORES</Link></li>
                        <li><Link to="/contacto">CONTACTO</Link></li>
                    </ul>
                </nav>
            </header >

            <main>
                {props.children}
            </main>

            <footer>
                <p> <em>- Sitio desarrollado por Angelina Josefa Menendez -</em></p>
            </footer>
        </>
    )
}

export { Layout }
