import { useState } from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import menu from "./data";

function App() {
  const tempCategories = menu.map((item) => item.category);
  const tempSet = new Set(tempCategories);
  const tempItems = ["all", ...tempSet];
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(tempItems);

  function filter(category) {
    if (category === "all") {
      setItems(menu);
      return; //has to return otherwise nothing will be rendered bc there's no category in the menu array called "all"
    }
    setItems(menu.filter((item) => item.category === category));
  }
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filter={filter} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
