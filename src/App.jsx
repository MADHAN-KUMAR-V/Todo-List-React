import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AddItem from "./components/AddItem/AddItem";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) || []);

 

  const [newItem,setNewItem] = useState("")
  const handleCheck = (id) => {
    const newList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newList);
    localStorage.setItem("todo_list",JSON.stringify(newItem))
  };
  const handleDelete = (id) => {
    const newList = items.filter((item) => (item.id !== id ? item : null));
    setItems(newList);
    localStorage.setItem("todo_list",JSON.stringify(newItem))
  };
  const addItem = (item)=>{
    const id = items.length ? items[items.length -1].id + 1 :1;
    const newList = {id,checked:false,item}
    const jointList = [...items,newList]
    setItems(jointList)
    localStorage.setItem("todo_list",JSON.stringify(jointList))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newItem) return;
    //add
    addItem(newItem)
    setNewItem("")
  }
  return (
    <div className="app">
      <Header />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Main
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
