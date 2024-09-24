import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@/features/router/constants';
import { RootPage } from '@/pages';

export const router = createBrowserRouter([{ path: ROUTE_PATH.ROOT, element: <RootPage /> }]);
