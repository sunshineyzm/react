import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  todoList: []
}

export default (state = defaultState, action) => {  
  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === actionTypes.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === actionTypes.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.splice(action.index, 1);
    return newState;
  }
  if(action.type === actionTypes.INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList = action.data;
    return newState;
  }
  return state;
}