const initState = {
  data: [],
  isLoading: false,
  totalPage: 0,
  page: 0,
};

const homeReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case "GET_LIST_VALIDATING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_LIST_SUCCESS":
      return {
        isLoading: false,
        data: payload,
      };
    case "GET_LIST_ERROR":
      return {
        initState,
        // error,
      };
    case "DETROY_TOPIC_DATA":
      return initState;
    default:
      return state;
  }
};

export default homeReducer;
