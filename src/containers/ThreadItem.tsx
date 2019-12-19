import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {Thread} from 'src/types'
import path from 'path'
import {getResponsesAction} from '../store/actions'

interface Props extends Thread {
  index: number
}

const component: React.FC<Props> = (props: Props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    const f = async () => {
      const reqPath = path.join('https://rfsf4zk2il.execute-api.ap-southeast-1.amazonaws.com/production/get-responses', props.id.toString())
      const res = await axios.get(reqPath)
      dispatch(getResponsesAction(res.data, props.index))
    }
    f()
  }, [props.updated_at])

  return (
    <div>
      <p>{props.index}</p>
      <p>{props.title}</p>
      <p>{props.responses?.length}</p>
      <p>{props.updated_at}</p>
    </div>
  );
};

export default component
