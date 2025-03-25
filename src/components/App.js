import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PickingList from "./PickingList";
import Stats from "./Stats";

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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PickingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
