export default function Stats({ items }) {
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
