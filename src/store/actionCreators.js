import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM
})

export const getItemDeleteAction = (index) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: actionTypes.INIT_LIST_ACTION,
  data
})

export const getToDoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist')
      .then(res => {
        const action = initListAction(res.data.todolist);
        dispatch(action);
      })
  }
}
