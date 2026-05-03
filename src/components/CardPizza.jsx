import { formatPrice } from "../utils/formatPrice";
import fallbackImg from "../assets/Header.jpg";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card h-100 shadow-sm" style={{ maxWidth: "340px" }}>
      <img
        src={img}
        alt={`Pizza ${name}`}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImg;
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2 text-capitalize">
          Pizza {name}
        </h5>

        {/* Descripción opcional */}
        {desc && (
          <p className="small text-muted mb-2" style={{ fontSize: "0.78rem" }}>
            {desc}
          </p>
        )}

        {/* Ingredientes como lista de <li> — requerimiento Hito 3 */}
        <p className="text-muted small mb-1">
          <em>Ingredientes:</em>
        </p>
        <ul className="list-unstyled small text-muted mb-3 ps-1">
          {ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <p className="fw-bold text-center fs-6 mb-3">
          Precio: ${formatPrice(price)}
        </p>

        <div className="d-flex gap-2 justify-content-between mt-auto">
          <button className="btn btn-sm btn-outline-secondary flex-grow-1">
            Ver Más »
          </button>
          <button className="btn btn-sm btn-dark flex-grow-1">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
