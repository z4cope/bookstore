const GET_CATEGORY_STATUS = 'CATEGORY_STATUS';

const initialState = {
  categories: [],
  status: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_STATUS:
      return {
        categories: [],
        status: 'Under construction',
      };
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: GET_CATEGORY_STATUS,
});

export default categoriesReducer;
