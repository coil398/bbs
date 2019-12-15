import {Threads} from '../../types'
import {GET_THREADS, ThreadActionTypes} from './actions'

const initialState: Threads = {
    threads: []
}

export const threadsReducer = (state = initialState, action:ThreadActionTypes): Threads => {
    switch (action.type) {
        case GET_THREADS:
            return {
                threads: action.payload
            }
        default:
            return state
    }
}