import { useState } from 'react';
import ListGroup from './ListGroup';

function ListGroupA() {
  let [items, setItems] = useState([
    'India',
    'Nepal',
    'Bhutan',
    'SriLanka',
    'Pakistan',
    'Chaina',
    'Indronesia',
    'Australia',
    'Japan',
  ]);

  function removeItem(item: string) {
    setItems(items.filter((val) => val != item));
  }

  function addItem(item: string) {
    setItems([...items, item]);
  }

  return (
    <ListGroup
      name='Asian Countries'
      items={items}
      removeItem={removeItem}
      addItem={addItem}
    />
  );
}

export default ListGroupA;
