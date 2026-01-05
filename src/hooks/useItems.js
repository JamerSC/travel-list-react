import { useState } from "react";

export default function useItems() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    console.log(item);
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        // use spread operator
        // create a new array
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

  return {
    items,
    setItems,
    handleAddItems,
    handleToggleItem,
    handleDeleteItem,
    handleClearList,
  };
}
