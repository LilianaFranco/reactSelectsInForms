import { useState } from "react";

export const Select = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState(0);

  const colors = ["crimson", "yellow", "steelblue", "green"];
  const sizes = [36, 37, 38, 39, 40, 41, 42];

  const handleSubmit = (e) => {
    e.preventDefault();

    const shoes = {
      name: "nike",
      price: "200",
      quantity: "1",
      size,
      color,
    };
    // The triger goes at teh end: endpoint buy product for example.
    console.log(shoes);
    alert("Gracias por tu compra");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          style={{
            width: "360px",
            height: "30px",
            fontSize: "0.9rem",
            margin: "5px",
          }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="" default>
            Seleccionar color
          </option>
          {colors.map((color) => {
            return (
              <option key={color} value={color}>
                {color}
              </option>
            );
          })}
        </select>
        <select
          style={{
            width: "360px",
            height: "30px",
            fontSize: "0.9rem",
          }}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="" default>
            Seleccionar talla
          </option>
          {sizes.map((size) => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
        </select>
        <div
          style={{
            width: "360px",
            height: "30px",
            backgroundColor: color,
            border: "2px solid gray",
            margin: "5px",
          }}
        >{`La talla que elegiste es: ${size}`}</div>
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};
