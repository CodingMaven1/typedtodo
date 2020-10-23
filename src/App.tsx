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

  onCheckHandler = (event: React.FormEvent<HTMLInputElement>, index: number, type: string) => {
    event.preventDefault();
    let {completed, incomplete} = this.state;
    if(type === "incomplete"){
      let currtodo = incomplete[index]
      currtodo.status = true
      completed.push(currtodo)
      incomplete.splice(index,1)
      this.setState({completed, incomplete})
    }
    else if(type === "complete"){
      let currtodo = completed[index]
      currtodo.status = false
      incomplete.push(currtodo)
      completed.splice(index,1)
      this.setState({completed, incomplete})
    }
  }

  render(){
    let {completed, incomplete, todoinfo} = this.state
    return (
      <div className="App">
        <div className="App--Todo">
          <div className="App--Heading">
            <img className="App--HeadingImg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" alt="img"/>
            <h1 className="App--HeadingTitle">To-Do List</h1>
          </div>
          <h1 className="App--Title">~Today I need to~</h1>
          <form className="App--Form" onSubmit={this.onSubmitHandler}>
            <input className="App--Input" onChange={this.onChangeHandler} type="text" placeholder="Describe your todo" value={todoinfo}/>
            <input className="App--Submit" value="Add" type="submit" />
          </form>
          <div className="App--Div">
            <h1 className="App--HeadingTitle">Incomplete Tasks</h1>
            {
              incomplete.map((obj, id) => {
                return(
                  <TodoItem key={id} todo={obj} check={e => this.onCheckHandler(e, id, "incomplete")} />
                )
              })
            }
          </div>
          <div className="App--Div">
            <h1 className="App--HeadingTitle">Completed Tasks</h1>
            {
              completed.map((obj, id) => {
                return(
                  <TodoItem key={id} todo={obj} check={e => this.onCheckHandler(e, id, "complete")}/>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
