import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todosActions from '../../redux/actions/todosActions';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class List extends Component {

  constructor(props, context) {
    super(props, context);

    console.log(props);

    this.createTodo = this.createTodo.bind(this);
  }

  createTodo() {
    this.props.actions.createTodo({
      id: 132,
      description: 'hacer la compra',
      completed: false
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.createTodo} style={{padding: 20, backgroundColor: '#EEE', margin: 20}}>
          <Text style={{textAlign: 'center'}}>Create todo</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, margin: 20}}>Todos: {this.props.todos.length}</Text>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
     todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todosActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);