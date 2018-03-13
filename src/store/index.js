import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default createStore(reducers, applyMiddleware(thunk));
//export default compose(applyMiddleware(thunk))(createStore)(reducers);
//export default createStore(reducers,compose(applyMiddleware(thunk)));
// let initialState={};
// export default createStore(
//         reducers,
//         initialState,
//         applyMiddleware(thunk)
//       );