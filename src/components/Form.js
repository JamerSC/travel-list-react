import { useState } from "react";

export default function Form({ onAddItems }) {
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

    onAddItems(newItem);
    //console.log(newItem);

    setDescription(""); // set description to empty string
    setQuantity(1); // set select option to default 1
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
      ></input>
      <button>Add</button>
    </form>
  );
}
