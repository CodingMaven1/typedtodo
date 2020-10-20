import React from 'react';

import TodoItem from './component/TodoItem/TodoItem';

import './App.css';

interface Props{}

interface State{
  completed: todo[],
  incomplete: todo[],
  todoinfo: string
}
class App extends React.Component<Props, State> {

  state: State = {
    completed: [],
    incomplete: [],
    todoinfo: ''
  }

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let {todoinfo, incomplete} = this.state;
    let newtodo: todo = {
      text: todoinfo,
      status: false
    }
    todoinfo=''
    incomplete.push(newtodo)
    this.setState({incomplete, todoinfo})
  }

  onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    let {todoinfo} = this.state;
    todoinfo = event.currentTarget.value;
    this.setState({ todoinfo})
  }

  render(){
    let {completed, incomplete, todoinfo} = this.state
    return (
      <div className="App">
        {
          incomplete.map((obj, id) => {
            return(
              <TodoItem key={id} text={obj.text} status={obj.status} />
            )
          })
        }
        {
          completed.map((obj, id) => {
            return(
              <TodoItem key={id} text={obj.text} status={obj.status} />
            )
          })
        }
        <form className="App--Form" onSubmit={this.onSubmitHandler}>
          <input className="App--Input" onChange={this.onChangeHandler} type="text" placeholder="Describe your todo" value={todoinfo}/>
          <input className="App--Submit" value="Add" type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
