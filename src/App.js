import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PickingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>💼 Travel List 📝</h1>;
}

function Form() {
  // controlled elements
  const [description, setDescription] = useState(""); // string ""
  const [quantity, setQuantity] = useState(1); // integer 1,2,3...

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    //console.log(e);
    // Create new item object
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for the trip?</h3>
      {/* Value & Onchange */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // onChange={(e) => {
        //   console.log(e.target.value);
        //   setDescription(e.target.value);
        // }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PickingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// Props using destructure
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on your list 📝, and you already packed 💼 X (X%)</em>
    </footer>
  );
}
