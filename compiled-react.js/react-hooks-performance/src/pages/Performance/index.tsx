import React, { useCallback, useMemo, useState } from "react";
import { Item } from "../../components/Item";

const Performance: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  //? useMemo
  const countItemsWithOne = useMemo(() => {
    console.log("teste");

    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  //Sempre que algum código do component for recriado, todas as functions são regravadas em memoria
  const addItemToWishlist = useCallback((item: string) => {
    setWishlist((state) => [...state, item]);
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setNewItem(event.target.value)}
        value={newItem}
      />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <Item key={item} onAddToWishlist={addItemToWishlist} title={item} />
          );
        })}
      </ul>
      <div>
        <h1>Contagem: {countItemsWithOne}</h1>
      </div>
    </div>
  );
};

export default Performance;
