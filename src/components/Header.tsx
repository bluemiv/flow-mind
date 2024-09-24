import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/router';

export default function Header() {
  const nav = useNavigate();

  return (
    <header className="h-[60px]">
      <button onClick={() => nav(ROUTE_PATH.ROOT)}>Flow Mind</button>
    </header>
  );
}
