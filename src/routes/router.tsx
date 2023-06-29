import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import { ErrorPage, PrivateRoute, UnAuthorized } from '../components/common';
import Dashboard from '../features/dashboard/pages/Dashboard';
import ProductList from '../features/dashboard/pages/components/ProductList';
import CreatePage from '../features/createProduct/pages/CreatePage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: (
          <UnAuthorized>
            <LoginPage />
          </UnAuthorized>
        )
      },
      {
        path: '/',
        element: (
          <UnAuthorized>
            <LoginPage />
          </UnAuthorized>
        )
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            element: <ProductList />,
            path: 'productList'
          },
          {
            element: <CreatePage />,
            path: 'createProduct'
          }
        ]
      }
    ]
  }
]);

export default router;
