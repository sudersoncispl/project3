import Popup from './Popup';
import { useState } from 'react';

function PopupAdd() {
  let [desc, setDesc] = useState(
    'Would you like to save extra money from your salary!'
  );
  let [popState, setPopState] = useState(false);

  let closePop = () => {
    setPopState(false);
    setDesc('Would you like to save extra money from your salary!');
  };

  let showPop = () => {
    setPopState(true);
  };

  return (
    <Popup
      popState={popState}
      title='General Information'
      action={() => {
        setDesc('Thanks for taking your choice.');
      }}
      closePop={closePop}
      showPop={showPop}
    >
      <p>{desc}</p>
    </Popup>
  );
}

export default PopupAdd;
