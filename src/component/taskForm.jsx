import React, { useState } from 'react';

const TaskForm = ({ createTask }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('TO DO');

    const onCreateTask = (e) => {
        e.preventDefault();
        
        // Task object to save or send to an API
        const newTask = { title, description, status };
        createTask(newTask)
        console.log('Task Created:', newTask);
        
        // Reset form fields after submission
        setTitle('');
        setDescription('');
        setStatus('TO DO');
    };

    return (
        <div className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Create a Task</h2>
            <form onSubmit={onCreateTask}>
                <div className="mb-6">
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

                <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                        rows="4"
                        placeholder="Enter task description"
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                    >
                        <option value="TO DO">TO DO</option>
                        <option value="IN PROGRESS">IN PROGRESS</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
