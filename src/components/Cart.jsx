import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { pizzaCart } from "../pizzas";
import { formatPrice } from "../utils/formatPrice";
import fallbackImg from "../assets/Header.jpg";

const Cart = () => {
  // Estado del carrito inicializado con pizzaCart del archivo pizzas.js
  const [cart, setCart] = useState(pizzaCart);

  // Aumentar cantidad de una pizza
  const handleIncrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Disminuir cantidad — si llega a 0 se elimina del carrito
  const handleDecrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);
    setCart(updated);
  };

  // Total calculado dinámicamente
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p className="text-muted text-center">El carrito está vacío.</p>
      ) : (
        <>
          <Table borderless responsive className="align-middle">
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  {/* Imagen */}
                  <td style={{ width: "60px" }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImg;
                      }}
                    />
                  </td>

                  {/* Nombre */}
                  <td className="text-capitalize fw-semibold">{item.name}</td>

                  {/* Precio unitario */}
                  <td>${formatPrice(item.price)}</td>

                  {/* Botones cantidad */}
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </Button>
                      <span style={{ minWidth: "20px", textAlign: "center" }}>
                        {item.count}
                      </span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Total */}
          <h5 className="fw-bold mt-3">
            Total: ${formatPrice(total)}
          </h5>

          {/* Botón Pagar — sin funcionalidad por ahora */}
          <Button variant="primary" className="mt-3">
            Pagar
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
