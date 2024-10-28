import axios from 'axios';
import './App.css';
import TaskCard from './component/taskCard';
import TaskForm from "./component/taskForm";
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';


function App() {

  const [todo,setTodo] = useState([])
  const [doing, setDoing] = useState([])
  const [complted, setCompleted] = useState([])

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => {
      return axios.get('localhost:5000/task')
    }
  });

  console.log(data)

  useEffect(()=>{

    if(data){
       setTodo(data.filter(el => el.status === 'TO_DO'))
       setDoing(data.filter(el => el.status === 'IN_PROGRESS'))
       setCompleted(data.filter(el => el.status === 'DONE'))
    }
  }, [data]);


  const onEdit = () =>{
    console.log('edit')
  }

  const onDelete = () =>{
    console.log('delte')
  }

  return (
    <>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">To-Do</h2>
            <div className="space-y-4">
              {
                todo.map((el, key)=>{
                  return <TaskCard 
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el.id)}
                    onDelete={() => onDelete(el.id)}
                  />
  
                })
              }
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Doing</h2>
            <div className="space-y-4">

              {
                doing.map((el, key)=>{
                  return <TaskCard 
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el.id)}
                    onDelete={() => onDelete(el.id)}
                  />
  
                })
              }
            
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Done</h2>
            <div className="space-y-4">
              
              {
                complted.map((el, key)=>{
                  return <TaskCard 
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el.id)}
                    onDelete={() => onDelete(el.id)}
                  />
  
                })
              }

            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default App;
