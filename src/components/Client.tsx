import { useState } from 'react';

function Client() {
  const [client, setClient] = useState({
    name: 'Akash',
    type: 'Dedicated',
    project: '2',
  });

  const changeClient = () => {
    const newClient = {
      ...client,
      project: '7',
    };

    setClient(newClient);
  };

  return (
    <div>
      <p>{client.name}</p>
      <p>{client.type}</p>
      <p>{client.project}</p>
      <button onClick={changeClient}>Change</button>
    </div>
  );
}

export default Client;
