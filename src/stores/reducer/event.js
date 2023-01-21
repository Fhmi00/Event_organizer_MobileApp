const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  msg: '',
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_EVENT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ALL_EVENT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        msg: action.payload.data.msg,
      };
    }
    case 'GET_ALL_EVENT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        // msg: action.payload.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default event;
