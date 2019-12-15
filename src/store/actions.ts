import {Thread} from '../../types'

export const GET_THREADS = 'GET_THREADS'

interface GetThreadsAction {
    type: typeof GET_THREADS,
    payload: Thread[]
}

export type ThreadActionTypes = GetThreadsAction

export const getThreadsAction = (threads: Thread[]): ThreadActionTypes => {
    return {
        type: GET_THREADS,
        payload: threads
    }
}