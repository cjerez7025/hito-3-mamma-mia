import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <main>
      {/* Header con imagen de fondo, título y descripción */}
      <Header />

      {/* Sección de pizzas — renderización dinámica desde pizzas.js */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">Nuestras Pizzas</h2>
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
            >
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
