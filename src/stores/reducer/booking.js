const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
  bookingSection: {},
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'CREATE_BOOKING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data},
        msg: action.payload.data.msg,
      };
    }
    case 'CREATE_BOOKING_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    case 'GET_BOOKING_BY_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_BOOKING_BY_ID_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data},
        msg: action.payload.data.msg,
      };
    }
    case 'GET_BOOKING_BY_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    case 'GET_BOOKING_SECTION_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_BOOKING_SECTION_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        bookingSection: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case 'GET_BOOKING_SECTION_REJECTED': {
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

export default booking;
