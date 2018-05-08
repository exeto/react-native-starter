// @flow

import React from 'react';
import { Provider } from 'react-redux';

import Instructions from '@/components/Instructions';

type Props = {
  store: {},
};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <Instructions />
  </Provider>
);

export default Root;
