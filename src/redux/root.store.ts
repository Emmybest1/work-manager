import {createStore, applyMiddleware, Middleware, Store} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './root.reducer';

const middleware: Middleware[] = [reduxThunk];

process.env.NODE_ENV === 'development' && middleware.push(reduxLogger);
// const composeEnhancer = composeWithDevTools({name: 'redux', trace: true, realtime: true, traceLimit: 20});
export const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
