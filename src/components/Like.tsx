import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface props {
  onClick: () => void;
}

function Like({ onClick }: props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color='#ff6b81' onClick={toggle} size={20} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
}

export default Like;
