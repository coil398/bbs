import React from 'react'
import Threads from 'containers/Threads'

interface Props {

}

const component: React.FC<Props> = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Threads />
    </div>
  );
};

export default component
