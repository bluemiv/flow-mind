import { createBrowserRouter } from 'react-router-dom';

import { RootPage } from '@/pages';
import { BaseLayout } from '@/components';

export const ROUTE_PATH = {
  ROOT: '/',
};

export const router = createBrowserRouter([
  { element: <BaseLayout />, children: [{ path: ROUTE_PATH.ROOT, element: <RootPage /> }] },
]);
