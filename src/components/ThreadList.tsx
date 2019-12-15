import React from 'react'
import {useSelector} from 'react-redux'
import ThreadItem from '../containers/ThreadItem'
import { RootState } from 'src/store'

interface Props {

}

const component: React.FC<Props> = () => {

  const threads = useSelector((state: RootState) => state.threads)

  return (
    <div>
      {threads.map((c, i) => {
        <ThreadItem
          key={i}
          index={i}
          id={c.id}
          title={c.title}
          createdAt={c.createdAt}
          updatedAt={c.updatedAt}
          responses={c.responses}
        />
      })}
    </div>
  );
};

export default component
