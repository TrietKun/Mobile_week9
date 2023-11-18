//reducer
import { createStore } from 'redux';
export default function counter(state = {count:0}, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {count: state.count + 1}
      case 'DECREMENT':
        return {count: state.count - 1}
      default:
        return state
    }
  }
 export let store = createStore(counter)