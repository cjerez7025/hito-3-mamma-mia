import { useState, useEffect } from "react";
import fallbackImg from "../assets/Header.jpg";
import { formatPrice } from "../utils/formatPrice";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar pizza:", err));
  }, []);

  if (!pizza) {
    return (
      <main className="container py-5 text-center">
        <p>Cargando pizza...</p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              className="card-img-top"
              style={{ height: "300px", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImg;
              }}
            />
            <div className="card-body">
              <h2 className="card-title fw-bold text-capitalize">
                Pizza {pizza.name}
              </h2>
              <p className="text-muted">{pizza.desc}</p>
              <p className="fw-bold fs-5">Precio: ${formatPrice(pizza.price)}</p>

              <h5 className="mt-3">Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>

              <button className="btn btn-dark mt-3 w-100">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;
