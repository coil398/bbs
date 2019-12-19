import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ThreadItem from './ThreadItem'
import { RootState } from 'src/store'
import { getThreadsAction } from '../store/actions';
import Axios from 'axios';

interface Props {

}

const component: React.FC<Props> = () => {

  const threads = useSelector((state: RootState) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    const f = async () => {
      const res = await Axios.get('https://rfsf4zk2il.execute-api.ap-southeast-1.amazonaws.com/production/get-threads')
      dispatch(getThreadsAction(res.data))
    }
    f()
  }, [])

  if (threads.length == 0) {
    return <div>no threads</div>
  }

  return (
    <div>
      {threads.map((c, i) => {
        return <ThreadItem
          key={i}
          index={i}
          id={c.id}
          title={c.title}
          created_at={c.created_at}
          updated_at={c.updated_at}
          responses={c.responses}
        />
      })}
    </div>
  );
};

export default component
