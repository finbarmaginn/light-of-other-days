import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from "react-redux"
import store from "./store"
import {syncHistoryWithStore} from 'react-router-redux'
import App from './containers/App'
import Home from './components/Home'
import Gallery from './containers/Gallery'
import Contact from './containers/Contact'
import Shop from './containers/Shop'
import Promise from 'promise-polyfill'
import './polyfill'

const history = syncHistoryWithStore(browserHistory, store)

if(!window.Promise){
  window.Promise = Promise
}

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="gallery" component={Gallery} />
        <Route path="contact" component={Contact} />
        <Route path="shop" component={Shop} />
      </Route>
    </Router>
  </Provider>
), document.getElementById("app"));
