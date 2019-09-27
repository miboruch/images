export const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        pending: false,
        categories: action.payload
      };
    default:
      return state;
  }
};
