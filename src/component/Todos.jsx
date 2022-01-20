import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoError,
  addTodoLoading,

  addTodoSuccess,
  getTodoSuccess,
  getTodoLoading,
  getTodoError,
} from "../Features/Todos/action";

export const Todos = () => {
  const [text, setText] = useState("");
  // const [todo,setTo do] = useState([])
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.TodoState.loading,
    todos: state.TodoState.todos,
    error: state.TodoState.error,
  } ) );
  useEffect( () =>
  {
    getTodo()
  },[])
  const addTodos = () => {
    dispatch(addTodoLoading());
    fetch(" http://localhost:3002/todos  ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: false, title: text }),
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(addTodoSuccess(res));
      })
      .catch((err) => {
        dispatch(addTodoError(err));
      });
  };

  async function getTodo ()
  {
    try
    {
      dispatch(getTodoLoading())
      const res = await fetch( 'http://localhost:3002/todos' )
      const data =await res.json();
      // console.log( data )
      dispatch(getTodoSuccess(data))
      
    } catch ( err )
    {
      dispatch(getTodoError(err))
    }

  }
  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>something went wrong...</div>
  ) : (
    <div>
      <input
        type="text"
        placeholder="enter Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodos();
        }}
      >
        Add Todo
      </button>
      {todos.map(({ title, status ,id}) => (
        <div key={id}>
          {title} -{status ? "DONE" : "NOT DONE"}
        </div>
      ))}
    </div>
  );
};