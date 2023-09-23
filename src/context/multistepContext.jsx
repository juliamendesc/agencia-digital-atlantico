import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  nome: '',
  email: '',
  countryCode: '',
  phone: '',
  businessArea: '',
  website: '',
  instagram: '',
  facebook: '',
  businessSize: null,
  hasHiredPaidAds: null,
  monthlyBudget: null,
};

const CheckoutContext = React.createContext(undefined);

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const MultistepProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(checkoutReducer, initialState);
  const value = { state, dispatch };
  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

MultistepProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useMultistepContext = () => {
  const context = React.useContext(CheckoutContext);
  if (context) {
    return context;
  }
  throw new Error(
    'useMultistepContext must be used within a MultistepProvider',
  );
};

export { MultistepProvider, useMultistepContext };
