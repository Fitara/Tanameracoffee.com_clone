import { createStore } from "redux";

const defaultState = { counter: 0 };

function counterReducer(state = defaultState, action) {
  console.log(action);

  if (action.type === "counter/incremented") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "counter/decremented") {
    return { counter: state.counter - 1 };
  }

  return state;
}

const store = createStore(counterReducer);

store.dispatch({
  type: "counter/incremented",
  payload: 100,
});

{
  value: 1;
}
console.log(store.getState());

store.dispatch({
  type: "counter/decremented",
  payload: 100,
});
{
  value: 0;
}

