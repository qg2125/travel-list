import { useEffect, useState } from "react";
import { getPackingList } from "../services/apiPackingList";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [itemList, setItemList] = useState([]);
  useEffect(function () {
    getPackingList().then((data) => {
      setItemList(data);
    });
  }, []);

  function handleAddItems(newItem) {
    const newList = [...itemList, newItem];
    setItemList(newList);
  }

  function handleDeleteItems(id) {
    setItemList(itemList.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete all items?");
    confirmed && setItemList([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={itemList}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearList}
      />
      <Stats items={itemList} />
    </div>
  );
}
