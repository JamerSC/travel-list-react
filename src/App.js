import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import useItems from "./hooks/useItems";

export default function App() {
  const {
    items,
    // setItems,
    handleAddItems,
    handleDeleteItem,
    handleToggleItem,
    handleClearList,
  } = useItems();

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
