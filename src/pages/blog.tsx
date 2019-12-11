import React from 'react'
import {useRouteData} from 'react-static'
import {Link} from '@reach/router'
// eslint-disable-next-line
import {Post} from 'types'

interface Props{}

const component: React.FC<Props> = () => {
  const {posts}: { posts: Post[] } = useRouteData();

  return (

    <div>
      <h1>It&apos;s blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default component
