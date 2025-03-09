import { Layout } from "../../components/Layout/Layout";
import { PerroCard } from "../../components/PerroCard/PerroCard";
import "../Colores/Colores.css";

const Colores = () => {
    return (
        <Layout>
            <div className="cont-img-colores">
                <h1><em>Ellos colorean Nuestras vidas</em></h1>
                <div className="lista-perros">
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />
                    <PerroCard />

                </div>
            </div>
        </Layout>
    );
};

export { Colores };
