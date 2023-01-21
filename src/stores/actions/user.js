import axios from '../../utils/axios';

export const GetUserById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};

export const UpdateProfile = (id, form) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axios.patch(`/user/updateUser/${id}`, form),
  };
};

export const UpdateImage = (id, body) => {
  return {
    type: 'UPDATE_IMAGE',
    payload: axios.patch(`user/updateImage/${id}`, body),
  };
};
