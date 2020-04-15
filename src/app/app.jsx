import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducers from 'store/reducers'
import rootSaga from 'store/sagas'
import DataExplorerContainer from 'app/dataExplorer/container'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <DataExplorerContainer />
  </Provider>
)

export default App
