import { useState } from 'react';

function Alert() {
  let [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <div className='alert alert-primary alert-dismissible' role='alert'>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() => setAlertVisible(false)}
          ></button>
        </div>
      )}

      <button
        type='button'
        className='btn btn-primary'
        onClick={() => setAlertVisible(true)}
      >
        Show Alert
      </button>
    </>
  );
}

export default Alert;
