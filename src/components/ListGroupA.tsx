import ListGroup from './ListGroup';

function ListGroupA() {
  let items = ['India', 'Nepal', 'Bhutan', 'SriLanka', 'Pakistan', 'Chaina'];

  function onSelectItem(item: string) {
    console.log(item);
  }

  return (
    <ListGroup
      name='Asian Countries'
      items={items}
      onSelectItem={onSelectItem}
    />
  );
}

export default ListGroupA;
