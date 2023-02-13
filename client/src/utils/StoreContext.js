import React from "react";
const { Provider } = "react-redux";
import store from './store';

// const StoreContext = createContext();

const StoreProvider = ({ value = [], ...props }) => {
  const store = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export default { StoreProvider };
