import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h3>Users:</h3>
        <ul>
          {this.props.users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

export const loadData = (store) => {
  store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData
};