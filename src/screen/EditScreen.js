import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation, route }) => {
  const id = route.params.id
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === route.params.id
  )

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => editBlogPost(id, title, content)}
    />
  )
}

export default EditScreen
