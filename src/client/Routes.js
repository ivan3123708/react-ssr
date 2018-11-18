import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  }
];