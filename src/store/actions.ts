import {Thread, Response} from 'src/types'

export const GET_THREADS = 'GET_THREADS'

interface GetThreadsAction {
    type: typeof GET_THREADS,
    payload: Thread[]
}

export const GET_RESPONSES = 'GET_RESPONSES'

interface GetResponsesAction {
    type: typeof GET_RESPONSES,
    payload: {
        responses: Response[],
        index: number
    }
}

export type ThreadActionTypes = GetThreadsAction | GetResponsesAction

export const getThreadsAction = (threads: Thread[]): ThreadActionTypes => {
    return {
        type: GET_THREADS,
        payload: threads
    }
}

export const getResponsesAction = (responses: Response[], index: number): GetResponsesAction => {
    return {
        type: GET_RESPONSES,
        payload: {
            responses: responses,
            index: index
        }
    }
}