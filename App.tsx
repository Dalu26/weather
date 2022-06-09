import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/navigation/AppNavigation';
import reducers from './src/redux/reducer/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return(
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
};

export default App;
