import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
const test = 'test';
export {
  store,
  test,
  // export more ...
};
// export default store;
