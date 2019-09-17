import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware ,compose} from 'redux'
import rootSaga, { helloSaga } from './sagas'
import Counter from './Counter'
import reducer from './reducers'
const sagaMiddleware = createSagaMiddleware();
const middlewares=[sagaMiddleware];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)
const action = type => store.dispatch({type})
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={()=>action('INCREMENT_ASYNC')}
      />,
    document.getElementById('root')
  )
}
render()
store.subscribe(render)
