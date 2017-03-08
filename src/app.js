import React from 'react';

import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';

import Components from './components';

const RNReduxSeed = (props, context) => {

  const store = configureStore();

  return (
    <Provider store={store}>
      <Components />
    </Provider>
  );

}

export default RNReduxSeed;
