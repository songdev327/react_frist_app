import { useEffect, useState } from "react";

export function UseEffectExample2() {
  const [totalItems, setTotalItems] = useState(0);
  const [items, setItems] = useState<string[]>([]);


 useEffect(() => {
    setTotalItems(items.length);
    console.log("Items changed:", items);
  }, [items]);


  const addItem = () => {
    setItems([...items, 'item']);
    setTotalItems(items.length + 1);
  }

  const clearItems = () => {
    setItems([]);
    setTotalItems(0);
  }

  return (
    <>
    <div>
      <h1>Total Items: {totalItems}</h1>
      <h1>Item Length: {items.length}</h1>
      <button onClick={addItem}>Add Item</button>
      <button onClick={clearItems}>Clear Items</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="number"
        value={totalItems}
        onChange={(e) => setTotalItems(Number(e.target.value))}
      />
    </div>
    </>
  );
}
