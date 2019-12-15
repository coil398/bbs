import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { getThreadsAction } from '../store/actions'

import { RootState } from 'src/store'

interface Props {

}

const threadsSelector = (state: RootState) => state.threads

const component: React.FC<Props> = () => {

  const dispatch = useDispatch()
  // @ts-ignore
  const threads = useSelector(threadsSelector)

  useEffect(() => {
    const f = async () => {
      const result = await axios.get('https://rfsf4zk2il.execute-api.ap-southeast-1.amazonaws.com/production/get-threads')
      dispatch(getThreadsAction(result.data))
      console.log('result.data: ', result.data)
    }
    f()
  }, [])

  return (
    <div>threads</div>
  );
};

export default component
