import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isSelectedCartegory, setIsSelectedCartegory]= useState('All')

  const handleClick = (e) => {
    setIsSelectedCartegory(e.target.value)
  }
  const FilteredItems = isSelectedCartegory === 'All' || isSelectedCartegory === ''
  ? items
  : items.filter(item => item.category === isSelectedCartegory);
 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleClick} value={isSelectedCartegory}>
          <option value="All">Filter by category</option>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {FilteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
