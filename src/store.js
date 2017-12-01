import {compose, applyMiddleware, createStore, combineReducers} from 'redux'
import {createLogger} from "redux-logger"
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from './reducers'
import {routerReducer} from 'react-router-redux'

const middlewares = []

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger())
}

const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer
  }),
  compose(
    autoRehydrate(),
    applyMiddleware(...middlewares, promise(), thunk)
  )
)

persistStore(store, {blacklist: ['routing', 'sw', 'gallery', 'formStatus']})

export default store
