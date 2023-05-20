import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { PortalWithState, Portal } from "react-portal";
type Props = {
  items: string[];
};

const List = ({ items }: Props) => {
  // Yоur cоdе gоеs hеrе
  const [sortedItems, setSortedItems] = React.useState(items);

  const handleItemClick = React.useCallback((item: string) => {
    const removeItem = sortedItems.filter((sortedItem) => sortedItem !== item);

    setSortedItems([item, ...removeItem]);
  }, []);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item} onClick={() => handleItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return <List items={["A", "B", "C"]} />;
}

export default App;
