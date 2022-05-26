const { createStore } = require('redux');
const { produce } = require('immer');

const initialState = {
  name: 'Ahok',
  address: {
    street: 'Jl Kenanga Baru',
    city: 'Depok',
    state: 'Bojong',
  },
};

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      //! with "immer"
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log('Initial State => ', store.getState());

const unSubscribe = store.subscribe(() => {
  console.log('Updated State => ', store.getState());
});

store.dispatch(updateStreet('Jl Margonda Raya'));

unSubscribe();
