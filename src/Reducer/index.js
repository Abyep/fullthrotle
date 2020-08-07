import { SAVE_DATA, OPEN_SIDEBAR } from "../Saga/index"

const initialState = {
  data: null,
  sidebar: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        data: action.data,
      }
    }

    case OPEN_SIDEBAR: {
      return {
        ...state,
        sidebar: !state.sidebar,
      }
    }

    default:
      return state
  }
}

export default reducer
