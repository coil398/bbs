import React from 'react'

interface Props {
    path: string
}

const component: React.FC<Props> = (props: Props) => (
  <div>
      <p>{props.path}</p>
  </div>
)
export default component
