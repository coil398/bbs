import React, {useEffect} from 'react'
import ThreadList from 'components/ThreadList'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {getThreadsAction} from '../store/actions'

interface Props {
}

const component: React.FC<Props> = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const f = async () => {
      const res = await axios.get('https://rfsf4zk2il.execute-api.ap-southeast-1.amazonaws.com/production/get-threads')
      dispatch(getThreadsAction(res.data))
    }
    f()
  }, [])

  return (
    <div>
      <ThreadList />
    </div>
  )
}

export default component
