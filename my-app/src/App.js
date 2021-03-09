import './App.css';
import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';
import SearchPanel from './SearchPanel/searchPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: todosData
    }
    this.maxId = 4
  }

  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let { todoItems } = state;
      todoItems[index].complited = true;
      return todoItems;
    });
  }

  handleDelete = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(({ todoItems }) => {
      const before = todoItems.slice(0, index);
      const after = todoItems.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        todoItems: newArr
      }
    });

  }

  addPost = body => {
    const newItem = {
      id: this.maxId++,
      description: body,
      complited: false
    }
    this.setState(({ todoItems }) => {
      const newArr = [...todoItems, newItem];
      return {
        todoItems: newArr
      }
    });
  }

  render() {
    const { todoItems } = this.state;
    const activeTasks = todoItems.filter(task => task.complited === false);
    const complitedTasks = todoItems.filter(task => task.complited === true)
    const finalTasks = [...activeTasks, ...complitedTasks].map(item => {
      return (
        <ToDoItem
          key={item.id}
          description={item.description}
          complited={item.complited}
          handleChange={() => this.handleChange(item.id)}
          handleDelete={() => this.handleDelete(item.id)}
        />
      )
    })

    return (
      <div className="main">
        <div className="App">
          {finalTasks}
          <SearchPanel addPost={this.addPost} />
        </div>
      </div>
    );
  }


}

export default App;

