// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// reducer
export default function (state: any, action: any) {
  if (!state) {
    state = { comments: [] }
  }
  switch (action.type) {
    case INIT_COMMENTS:
      return {
        comments: action.comments
      }
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state;
  }
}

// action creators
export const initComments = (comments: any) => {
  return { type: INIT_COMMENTS, comments }
}
export const addComment = (comment: any) => {
  return { type: ADD_COMMENT, comment }
}
export const deleteComment = (commentIndex: any) => {
  return { type: DELETE_COMMENT, commentIndex }
}