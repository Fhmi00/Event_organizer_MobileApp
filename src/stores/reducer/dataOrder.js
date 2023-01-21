const initialState = {
  dataOrder: {},
};
const dataOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_ORDER':
      console.log(action, 'STATE');
      return {
        dataOrder: action.payload,
      };

    default:
      return state;
  }
};

export default dataOrder;
