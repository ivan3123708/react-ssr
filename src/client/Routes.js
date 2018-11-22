import App from './components/App';
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';
import NotFoundPage from './components/pages/NotFoundPage';
import AdminsListPage from './components/pages/AdminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];