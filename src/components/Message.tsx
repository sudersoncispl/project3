let count = 0;

function Message() {
  count++;
  return <label>{count}</label>;
}

export default Message;
