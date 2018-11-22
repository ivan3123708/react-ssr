import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../actions';
import requireAuth from '../requireAuth';

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => <li key={admin.id}>{admin.name}</li>);
  }

  render() {
    return (
      <div>
        <h3>Protected List of Admins:</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({
  admins: admins
});

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}