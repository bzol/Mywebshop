import React, {useReducer} from 'react'

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

const Price = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {props.price + state.count}
      </div>
  )
}

export default Price
