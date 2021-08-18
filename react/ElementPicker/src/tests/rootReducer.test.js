import { createStore } from 'redux';

import rootReducer from '../store/rootReducer.js';
import { initialState } from '../store/components/reducer.js';

describe('rootReducer', () => {
  it('has necessary reducers injected', () => {
    const store = createStore(rootReducer);

    expect(
      store.getState().components,
    ).toEqual(initialState);
  });
});
