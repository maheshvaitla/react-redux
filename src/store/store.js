import {createStore,combineReducers} from "redux"
import { reducer as TodoReducer} from "../Features/Todos/reducer";
import { reducer as CounterReducer } from "../Features/Counter/reducer"
const rootReducer = combineReducers( {
    counterState: CounterReducer,
    TodoState: TodoReducer,
})
export const store = createStore( rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store.getState())