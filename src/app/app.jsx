import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducers from 'store/reducers'
import rootSaga from 'store/sagas'
import DataExplorerContainer from 'app/dataExplorer/container'
import './style.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <h1>日本地域情報</h1>
      <DataExplorerContainer />
    </div>
  </Provider>
)

export default App
