const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'LOGIN_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data},
        msg: action.payload.data.msg,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
