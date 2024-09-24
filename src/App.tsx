import { RouterProvider } from 'react-router-dom';

import { router } from '@/features/router';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
