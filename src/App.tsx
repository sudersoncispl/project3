// import ListGroupA from './components/ListGroupA';
// import SetAlert from './components/SetAlert';
import Client from './components/Client';
import Like from './components/Like';

function onClick() {
  console.log('Click fired');
}

//import Message from './components/Message';

function App() {
  return (
    <>
      <Like onClick={onClick} />
      <Client />
      {/* <SetAlert />
      <ListGroupA /> */}
    </>
  );
}

export default App;
