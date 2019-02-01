import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger'
import Routes from './routes'
import reducers from './reducers'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
    font-family: karla,monospace;
    line-height: 1.8;
    color: #333;
    font-size: 18px;
  }
  ul li{
      list-style: none;
  }
`

const logger = createLogger({
    collapsed: true,
    duration: true
});
const createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware)(createStore)

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <div>
                    <GlobalStyle />
                    <Routes/>
                </div>
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));
