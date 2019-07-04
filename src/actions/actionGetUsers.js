import api from './api';

const getUsers = () => ({
  type: 'GET_USERS',
  payload: api.get('/user'),
});

export const uploadUsers = data => ({
  type: 'UPLOAD_USERS',
  payload: api.post('/user', data),
});

export default getUsers;
