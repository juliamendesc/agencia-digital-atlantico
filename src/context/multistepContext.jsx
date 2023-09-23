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

const MultistepContext = React.createContext(undefined);

const multistepReducer = (state, action) => {
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
  const [state, dispatch] = React.useReducer(multistepReducer, initialState);
  const value = { state, dispatch };
  return (
    <MultistepContext.Provider value={value}>
      {children}
    </MultistepContext.Provider>
  );
};

MultistepProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useMultistepContext = () => {
  const context = React.useContext(MultistepContext);
  if (context) {
    return context;
  }
  throw new Error(
    'useMultistepContext must be used within a MultistepProvider',
  );
};

export { MultistepProvider, useMultistepContext };
