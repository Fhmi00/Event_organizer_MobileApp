const initialState = {
  isError: false,
  isLoading: false,
  data: {},
  msg: '',
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BY_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_USER_BY_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    }
    case 'GET_USER_BY_ID_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg,
      };
    }
    case 'UPDATE_IMAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_IMAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case 'UPDATE_IMAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }
    case 'UPDATE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case 'UPDATE_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
