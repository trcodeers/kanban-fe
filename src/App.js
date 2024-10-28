import axios from 'axios';
import './App.css';
import TaskCard from './component/taskCard';
import TaskForm from "./component/taskForm";
import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const addPost = (post) =>{
  return axios.post('localhost:5000/task', post)
}

const UpdatePost = (id, post)=>{
  return axios.put(`localhost:5000/task/${id}`, post)
}

const DeltePost = (id)=>{
  return axios.put(`localhost:5000/task/${id}`)
}

function App() {

  const [todo,setTodo] = useState([])
  const [inprogress, setInprogress] = useState([])
  const [done, setDone] = useState([])

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => {
      return axios.get('http://localhost:5000/task')
    }
  });

  const { mutate : addPostmutate } = useMutation({
    mutationFn: addPost
  })

  const { mutate : updatePostmutate } = useMutation({
    mutationFn: UpdatePost
  })


  const { mutate : deletePostmutate } = useMutation({
    mutationFn: DeltePost
  })


  useEffect(()=>{
    if(data){
       setTodo(data?.data?.result.filter(el => el.status === 'TO_DO'))
       setInprogress(data?.data?.result.filter(el => el.status === 'IN_PROGRESS'))
       setDone(data?.data?.result.filter(el => el.status === 'DONE'))
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
      <TaskForm
        createTask={addPostmutate}
      />

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
            <h2 className="text-xl font-semibold mb-4">In progress</h2>
            <div className="space-y-4">

              {
                inprogress.map((el, key)=>{
                  return <TaskCard 
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el.id)}
                    onDelete={() => DeltePost(el.id)}
                  />
  
                })
              }
            
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Done</h2>
            <div className="space-y-4">
              
              {
                done.map((el, key)=>{
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
