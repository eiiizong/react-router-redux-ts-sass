const CHANGE_DATA_ONE = 'CHANGE_DATA_ONE';

export default function (state: any, action: any) {
  if (!state) {
    return {
      name: 'Eiiizong'
    }
  }
  switch (action.type) {
    case CHANGE_DATA_ONE:
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

export const changeData = (name: any) => {
  return {
    type: CHANGE_DATA_ONE,
    name
  }
}