import React from 'react'
import { Provider } from 'react-redux';
import { store } from './features/Store';
import Movies from './components/Movies'
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Movies/>
      </div>
    </Provider>
  )
}

export default App