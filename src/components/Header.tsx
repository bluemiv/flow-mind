import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/router';

export default function Header() {
  const nav = useNavigate();

  return (
    <header className="h-[60px] flex items-center px-lg sticky top-0">
      <button className="text-lg font-bold" onClick={() => nav(ROUTE_PATH.ROOT)}>
        <span className="text-indigo-600">Flow</span> Mind
      </button>
    </header>
  );
}
