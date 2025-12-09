import { createRoot } from "react-dom";
import Pizza from "./Pizza"

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiian" description="ham, pineable, n stuff" />
      <Pizza name="Americano" description="french fries, hot dogs, n stuff" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
