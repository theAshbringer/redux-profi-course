import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(15)

  return (
    <div className='post__list'>
      {isLoading && <h1>Загрузка ...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {posts && posts.map(post =>
        <PostItem key={post.id} post={post} />
      )}
    </div>
  )
}

export default PostContainer