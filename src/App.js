import axios from 'axios';
import './App.css';
import TaskCard from './component/taskCard';
import TaskForm from "./component/taskForm";
import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CustomDialog from './component/customDialog';

const addPost = (post) => {
  return axios.post('http://localhost:5000/task', post)
}

const UpdatePost = (id, post) => {
  return axios.put(`http://localhost:5000/task/${id}`, post)
}

const DeltePost = (id) => {
  return axios.delete(`http://localhost:5000/task/${id}`)
}

function App() {

  const [todo, setTodo] = useState([])
  const [inprogress, setInprogress] = useState([])
  const [done, setDone] = useState([])

  const [displayform, setDisplayForm] = useState(false)

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => {
      return axios.get('http://localhost:5000/task')
    }
  });

  const { mutate: addPostmutate, isLoading: addPostLoading } = useMutation({
    mutationFn: addPost,
    onSuccess: refetch
  })

  const { mutate: updatePostmutate, isLoading: updatePostLoading } = useMutation({
    mutationFn: UpdatePost
  })


  const { mutate: deletePostmutate, isLoading: deletePostLoading } = useMutation({
    mutationFn: DeltePost,
    onSuccess: refetch
  })


  useEffect(() => {
    if (data) {
      setTodo(data?.data?.result.filter(el => el.status === 'TO_DO'))
      setInprogress(data?.data?.result.filter(el => el.status === 'IN_PROGRESS'))
      setDone(data?.data?.result.filter(el => el.status === 'DONE'))
    }
  }, [data]);


  const onEdit = (el) => {
    console.log('edit')
  }

  const onCloseForm = () => {
    setDisplayForm(false)
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('TO_DO');

  const onCreateTask = (e) => {
    e.preventDefault();
    console.log({ title, description, status });
    addPostmutate({ title, description, status })
    setTitle('')
    setDescription('')
    setStatus('')
  };

  return (
    <>
      {
        displayform &&
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg p-8">
          <form onSubmit={onCreateTask} className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 mb-6">
              <div className="flex-1">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                  placeholder="Enter task title"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                  rows="3"
                  placeholder="Enter task description"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value)
                    console.log(e.target.value)
                  }}
                  required
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                >
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className=" bg-red-500 mt-6 font-semibold py-1 h-12 rounded-lg shadow-lg  text-black p-4 "
                >
                  Add Task
                </button>
                <button
                  onClick={onCloseForm}
                  type="submit"
                  className="  mt-6 font-semibold py-1 h-12 rounded-lg shadow-lg  text-black p-4 "
                >
                  Cancel
                </button>
              </div>
            </div>


          </form>
        </div>
      }


      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between max-w-md mx-auto bg-white p-4 rounded-lg  ">
          {!displayform && <h1 className="text-2xl font-bold text-gray-700">Task Manager</h1>}
          {!displayform && <button
            onClick={() => setDisplayForm(true)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200"
          >
            Add Task
          </button>}
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">To-Do</h2>
            <div className="space-y-4">
              {
                todo.map((el, key) => {
                  return <TaskCard
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el)}
                    onDelete={() => deletePostmutate(el._id)}
                  />

                })
              }
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">In progress</h2>
            <div className="space-y-4">

              {
                inprogress.map((el, index) => {
                  return <TaskCard
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el)}
                    onDelete={() => deletePostmutate(el._id)}
                  />

                })
              }

            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Done</h2>
            <div className="space-y-4">

              {
                done.map((el, key) => {
                  return <TaskCard
                    title={el.title}
                    description={el.description}
                    onEdit={() => onEdit(el)}
                    onDelete={() => deletePostmutate(el._id)}
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
