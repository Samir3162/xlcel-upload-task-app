import { connect } from 'react-redux';

import Home from '../scenes/Home';
import getUsers, { uploadUsers } from '../actions/actionGetUsers';

const mapStateToProps = state => ({
  users: state.users.data || [],
  usersLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getUsersFunction: () => dispatch(getUsers()),
  uploadUsersFunction: data => dispatch(uploadUsers(data)),
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
