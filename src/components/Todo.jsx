import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add, deletetodo, status } from '../redux/todoslices';


function Todo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(add({
        id: Date.now(),
        input,
        completed: false,
      }));
      setInput('');
    //   console.log(input);
    }
  };

  const handleDeleteTodo = id => {
    dispatch(deletetodo(id));
  };

  const handleStatusTodo = id => {
    dispatch(status(id));
  };
  const totalTasks = todos.length  
//   console.log(totalTasks);
  const completedTasks = todos.filter(todo => todo.completed);  
  const totalCompletedTasks = completedTasks.length;
  return (
    <>
    <div className="fullbody container">
        <div className='shadow w-50 p-5'>
            <h1 className='text-center'>My Todo List</h1>
            <div className="d-flex w-100 justify-content-center mt-5">
                <input type="Input" value={input} className='rounded t1' onChange={e => setInput(e.target.value)} placeholder='Add Todo'/>
                <button onClick={handleAddTodo} className='btn btn-primary'>Submit</button>
            </div>
            <div className="todolist container mt-5">
                {todos.map(todoitems=>(
                    <div className="list1 w-100 p-3 rounded d-flex justify-content-between m-3" style={{border:'1px solid',backgroundColor:todoitems.completed?'lightblue':'white'}}>
                    <Form>
                    {['checkbox'].map((type) => (
             <div key={`default-${type}`} className="mb-3 d-flex fw-bolder">
               <Form.Check // prettier-ignore
                 type={type}
                 id={todoitems.id}
                 checked={todoitems.completed}
                 onChange={()=>handleStatusTodo(todoitems.id)}
               /> 
               <span className='ms-3' style={{textDecoration:todoitems.completed?'line-through':'none',}}>{todoitems.input}</span>
             </div>
           ))}
                     </Form> 
                     <button onClick={()=>handleDeleteTodo(todoitems.id)} className='btn btn-danger'>Delete</button>
                     
                 </div>
                ))}
            </div><h5>Total Completed Task:{totalCompletedTasks} of {totalTasks}</h5>
            {/*  */}
        </div>
    </div>
    </>
  )
}

export default Todo