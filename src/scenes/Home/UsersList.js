import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const UsersList = (props) => {
  const { users, handleUploadFile } = props;

  return (
    <>
      <h1>Upload EXCEL and import users into table</h1>
      <input type="file" onChange={handleUploadFile} />
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {users.map(comment => (
            <tr key={comment.id}>
              <th scope="row">{comment.id}</th>
              <td>{comment.firstname}</td>
              <td>{comment.lastname}</td>
              <td>{comment.age}</td>
              <td>{comment.sex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

UsersList.defaultProps = {
  users: [],
};
UsersList.propTypes = {
  users: [PropTypes.object.isRequired],
  handleUploadFile: PropTypes.func.isRequired,
};

export default UsersList;
