import { applyMiddleware, combineReducers, createStore } from "redux";
import { loginReducer } from "./reducers"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";

const reducers = combineReducers({
  login: loginReducer,


})


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga)
export default store;