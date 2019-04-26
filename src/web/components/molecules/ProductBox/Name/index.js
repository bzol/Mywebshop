import React,{useReducer} from 'react'

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


const Name = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>       
      {props.name}
      <button onClick={() => dispatch({type: 'increment'})}>
        Click me
      </button>
    </div>
  )
}
export default Name