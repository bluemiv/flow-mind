import './styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';

import { router } from 'src/router';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#4F46E5' } }}>
      <StyleProvider hashPriority="high">
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
);
