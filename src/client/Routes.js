import App from './components/App';
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';

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
        ...UsersListPage,
        path: '/users'
      }
    ]
  }
];