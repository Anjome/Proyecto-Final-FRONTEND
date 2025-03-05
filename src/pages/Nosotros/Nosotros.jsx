import { Layout } from "../../components/Layout/Layout"
import "../Nosotros/Nosotros.css"

const Nosotros = () => {
    return (
        <Layout>
            <section className="seccion-main">
                <h1 className="h1-sec">"TRANSFORMA TU MARCA CON EL PODER DEL COLOR"</h1>
                <h2 className="h2-sec"><em>Crea experiencias visuales inolvidables con la combinacion perfecta de color y diseño</em></h2>
                <p className="p-card">Los colores no solo embellecen, sino que también cuentan historias y transmiten emociones. Cada tono tiene la capacidad de influir en como los clientes perciben tu marca o producto. El uso adecuado del color puede aumentar la recordación de la marca, evocar sensaciones específicas y establecer una identidad visyal fuerte.</p>

                <div className="background-section">
                    <span>
                        <h1 className="h1-car-cont">"VIBRANTES Y ENERGÉTICOS"</h1>
                    </span>
                </div>
                <div className="car-cont">
                    <div className="car-colores">
                        <h2 className="h2-car-color">COLOR: Rojo(#e74c3c) </h2>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.qAT0P3UaWik2knc_VVFEuAHaE8&pid=Api&P=0&h=180" alt="Color Rojo" className="img-car" />
                        <h3 className="h3-car-colo">Pasión y Energía</h3>
                        <p className="p-car-color">Ideal para resaltar elementos importantes. Evoca intensidad y emociones fuertes, perfecto para captar la atención rápidamente.</p>
                    </div>

                    <div className="car-colores">
                        <h2 className="h2-car-color">COLOR: Azul(#e74c3c) </h2>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.BTobZZmAozWDSe87GKQLqgHaDt&pid=Api&P=0&h=180" alt="Color Rojo" className="img-car" />
                        <h3 className="h3-car-colo">Confianza y Tranquilidad</h3>
                        <p className="p-car-color">Evoca serenidad y seguridad. Perfecto para generar calma y profesionalismo en la imagen de marca.</p>
                    </div>

                    <div className="car-colores">
                        <h2 className="h2-car-color">COLOR: Verde(#e74c3c) </h2>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.E2xQAEGJDuqNalfJ3JmjDgHaEK&pid=Api&P=0&h=180" alt="Color verde" className="img-car" />
                        <h3 className="h3-car-colo">Armonía y Naturaleza</h3>
                        <p className="p-car-color">Representa crecimiento, equilibrio y frescura. Ideal para productos o marcas asociadas con la naturaleza o sostenibilidad.</p>
                    </div>

                    <div className="car-colores">
                        <h2 className="h2-car-color">COLOR: Amarillo(#e74c3c) </h2>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.XUCrEd9dTfim6HOAnTqtBQHaEK&pid=Api&P=0&h=180" alt="Color amarillo" className="img-car" />
                        <h3 className="h3-car-colo">Alegría y Optimismo</h3>
                        <p className="p-car-color">Transmite energía positiva y calidez. Ideal para llamar la atención y generar una sensación de felicidad.</p>
                    </div>
                </div>

            </section>
        </Layout>
    )

}

export { Nosotros }