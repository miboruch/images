export function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        pageNumber: state.pageNumber + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        pageNumber: state.pageNumber - 1
      };
    default:
      throw new Error();
  }
}
