import React from 'react'
import ThreadList from 'containers/ThreadList'

interface Props {

}

const component: React.FC<Props> = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <ThreadList />
    </div>
  );
};

export default component
