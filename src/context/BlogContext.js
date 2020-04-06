import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload)
    case 'add_blogpost':
      return [...state, {
        title: action.payload.title,
        content: action.payload.content,
        id: Math.floor(Math.random() * 99999)
      }]
    case 'edit_blogpost':
      console.log(action.payload)
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload
        } else {
          return blogPost
        }
      })
    default:
      return state
  }
}

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    // response.data === [{}, {}, {}]
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = (dispatch) => {
  // return (title, content) => { dispatch({ type: 'add_blogpost', payload: { title, content } }) }
  return async (title, content) => {
    await jsonServer.post('/blogposts', { title, content })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
  }
}

export const { Context, Provider } = createDataContext(blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPost
  }, [])
