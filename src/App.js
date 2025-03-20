import { useState } from "react";

// used for sample data
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    console.log(item);
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        // use spread operator
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    console.log("Deleted Item ID No: " + id);
    // filter method
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PickingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>💼 Travel List 📝</h1>;
}

function Form({ onAddItems }) {
  // controlled elements
  const [description, setDescription] = useState(""); // string ""
  const [quantity, setQuantity] = useState(1); // integer 1,2,3...
  //const [items, setItems] = useState([]); // item object with array of data

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    //console.log(e);
    // Create new item object
    const newItem = { description, quantity, packed: false, id: Date.now() };
    //console.log(newItem);

    onAddItems(newItem);

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

function PickingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

// Props using destructure
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => {
          onToggleItem(item.id);
          console.log(item);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <p>
          <em>Start adding an items in your packing list. 🚀</em>
        </p>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `"You got everything ${percentage}%! Ready to Go ✈️"`
          : `You have ${numItems} item on your list 📝, and you already packed 💼${" "}
          ${numPacked} (${Number(percentage) ? percentage : "0"})%`}
      </em>
    </footer>
  );
}
