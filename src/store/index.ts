import {combineReducers} from 'redux'
import {threadsReducer} from './reducers'

const rootReducer = combineReducers({
    threads: threadsReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>