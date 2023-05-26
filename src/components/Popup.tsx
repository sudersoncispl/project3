import { ReactNode } from 'react';

interface props {
  popState: boolean;
  title: string;
  children: ReactNode;
  action: () => void;
  closePop: () => void;
  showPop: () => void;
}
function Popup({
  popState = false,
  title = 'System Message',
  children,
  action,
  closePop,
  showPop,
}: props) {
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => {
          showPop();
        }}
      >
        Open Popup
      </button>

      {popState == true ? (
        <div
          className='modal'
          tabIndex={1}
          style={{ display: 'block', position: 'initial' }}
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{title}</h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  onClick={closePop}
                ></button>
              </div>
              <div className='modal-body'>{children}</div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                  onClick={closePop}
                >
                  Close
                </button>
                <button
                  type='button'
                  onClick={action}
                  className='btn btn-primary'
                >
                  Yes! Please.
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Popup;
