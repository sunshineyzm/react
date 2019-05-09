import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import * as actionCreators from './store/actionCreators';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './TodoListUI.scss';

class ToDoList extends Component{
  constructor(props) {
    super(props);
    this.state= {}
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
  }

  componentDidMount() {
    this.props.handleInitData();
  }

  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.props.handleAddItem();
    }
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo' 
            className="todo-input" 
            onChange = {this.props.handleInputChange}
            value={this.props.inputValue}
            onKeyUp = {this.handleInputKeyUp}
          />
          <Button type="primary" className="todo-submit" onClick={this.props.handleAddItem}>提交</Button>
        </div>
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.props.todoList}
            renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleDeleteItem(index)}}>{index + 1} - {item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    todoList: state.todoList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInitData() {
      const action = actionCreators.getToDoList();
      dispatch(action);
    },
    handleInputChange(e) {
      const action = actionCreators.getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleAddItem() {
      const action = actionCreators.getAddItemAction();
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = actionCreators.getItemDeleteAction(index);
      dispatch(action);
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);