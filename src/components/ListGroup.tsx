import { useState } from 'react';

interface ListProps {
  name?: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ name = 'List', items, onSelectItem }: ListProps) {
  let [active, setActive] = useState(-1);
  return (
    <>
      <h1>{name}</h1>

      {items.length === 0 ? (
        <h1>Nothing to show</h1>
      ) : (
        <ul className='list-group'>
          {items.map((item, index) => (
            <li
              className={
                active === index ? 'list-group-item active' : 'list-group-item'
              }
              key={index}
              onClick={() => {
                setActive(index), onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
