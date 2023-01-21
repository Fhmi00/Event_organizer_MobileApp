import axios from '../../utils/axios';

export const getAllEvent = search => {
  return {
    type: 'GET_ALL_EVENT',
    payload: axios.get(
      `event?page=1&limit=4&sort=&searchDateShow=&searchName=${search}`,
    ),
  };
};
