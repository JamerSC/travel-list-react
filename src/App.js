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
  return (
    <div className="add-form">
      <h3>What do you want for the trip?</h3>
    </div>
  );
}

function PickingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
