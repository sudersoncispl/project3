import { useState } from 'react';

interface ListProps {
  name?: string;
  items: string[];
  onSelectItem: (item: string) => void;
  removeItem: (item: string) => void;
  addItem: (item: string) => void;
}

function ListGroup({
  name = 'List',
  items,
  onSelectItem,
  removeItem,
  addItem,
}: ListProps) {
  let [active, setActive] = useState(-1);
  let [countryInput, changeCountryInput] = useState('');

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

              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => {
                  removeItem(item);
                }}
              ></button>
            </li>
          ))}
        </ul>
      )}

      <div className='input-group mb-3'>
        <input
          type='text'
          placeholder='Country'
          aria-label='Country'
          aria-describedby='basic-addon1'
          value={countryInput}
          onChange={(event) => changeCountryInput(event.target.value)}
        />
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => {
            addItem(countryInput);
            changeCountryInput('');
          }}
        >
          Add Country
        </button>
      </div>
    </>
  );
}

export default ListGroup;
