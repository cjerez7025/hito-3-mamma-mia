import { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  return (
    <main>
      <Header />

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
