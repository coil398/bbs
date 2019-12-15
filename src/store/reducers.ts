import {Thread} from 'src/types'
import {GET_THREADS, GET_RESPONSES, ThreadActionTypes} from './actions'

const initialState: Thread[] = []

export const threadsReducer = (state = initialState, action:ThreadActionTypes): Thread[] => {
    switch (action.type) {
        case GET_THREADS:
            return action.payload
        case GET_RESPONSES:
            const thread = state[action.payload.index]
            thread.responses = action.payload.responses
            return [...state.slice(0, action.payload.index), thread, ...state.slice(action.payload.index+1)]
        default:
            return state
    }
}