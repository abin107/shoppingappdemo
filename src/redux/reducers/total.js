import { UPDATE_TOTAL } from '../type';

const initialState = {
  data: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'INR',
    currencyFormat: '₹'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
