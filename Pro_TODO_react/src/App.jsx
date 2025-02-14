import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import e from 'express';
import { v4 as uuidv4 } from 'uuid';
// import { i } from 'vite/dist/node/types.d-jgA8ss1A';
// uuidv4();
 


function App() {
  const [todo, setTodo] = useState("")   // todo
  const [todos, setTodos] = useState([]) //todos array-hold all todo


  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false }])
    setTodo("") // add hone ke bad input box blank ho gaye
    console.log(todos);
  }

  const handleCheckBox = (e)=>{
    console.log(e,e.target);
   let id = e.todo.name
   console.log(id);
   let index = todos.findIndex(item =>{
    return item.id === id;
  })
  console.log(index);

   let newTodos = [...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted 
   setTodos(newTodos)
  }
  
  



  return (
    <>

      <Navbar />
      <div className="container bg-slate-300 m-auto my-5 rounded-xl p-5 min-h-[80vh]">

        <div className="addTodo my-5">
          <h2 className='text-lg font-bold '>Add a Todo</h2>

          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-slate-800 hover:bg-slate-900 text-sm p-4 py-1 m-4 text-white rounded-md'>Add</button>
        </div>

        <h2 className='text-lg font-bold '>Your Todos</h2>

        <div className="todos">

          {todos.map(item => {


            return <div key={item.id} className="todo flex justify-between w-1/4 my-3">

            <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} />

              <div className={item.isCompleted?"line-through":""}> {item.todo}</div>
              <div className="buttons">

                <button onClick={handleEdit} className='bg-slate-800 hover:bg-slate-900 text-sm p-3 py-1 m-1 text-white rounded-md'>Edit</button>

                <button onClick={handleDelete} className='bg-slate-800 hover:bg-slate-900 text-sm p-3 py-1 m-1 text-white rounded-md'>Delete</button>
              </div>

            </div>
          })}

    </div>



      </div>

    </>
  )
}

export default App
