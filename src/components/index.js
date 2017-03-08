import React from 'react';

import {
  View
} from 'react-native';

import Header from './Header';
import Search from './Search';
import List from './List';

const Components = (props, context) => {
  return (
    <View>
      <Header />
      <Search />
      <List />
    </View>
  );
}

export default Components;
