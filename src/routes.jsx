import { createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import CountryDetails from './pages/CountryDetails/CountryDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'country',
        element: <CountryDetails />,
      },
    ],
  },
]);

export default router;