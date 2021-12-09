import React from "react";
import Item from "./items";

const App = () => {
  return(
    <div className="header">
      Hello World
    </div>
  )
}
export const Application = () => {
  return(
    <div className="header">
        <Items></Items>
    </div>
  )
}


const Items = (props) => {
  const items = [
    {item: "Mouse"},
    {item: "Keyboard"},
    {item: "LCD"},
    {item: "Monitor"}
  ]
  return <ul className="items">
    {items.map((item) => (
      <Item item={item.item}></Item>
    ))}
  </ul>
}

export default App;