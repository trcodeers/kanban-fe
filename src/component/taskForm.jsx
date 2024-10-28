import React, { useState } from 'react';

const TaskForm = ({addpost, onCloseForm}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('TO DO');

    const onCreateTask = (e) => {
        e.preventDefault();
        console.log({ title, description, status });
        addpost({ title, description, status })
        setTitle('')
        setDescription('')
        setStatus('')
    };

    return (
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg p-8">
            <form onSubmit={onCreateTask} className="flex flex-col space-y-4">
                <div className="flex space-x-4 mb-6">
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
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                            rows="3"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-200"
                        >
                            <option value="TO_DO">TO DO</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-4 space-x-4">
                    <button
                        type="submit"
                        className="flex-1 bg-red-500 font-semibold py-3 rounded-lg shadow-lg  text-black p-4 "
                    >
                        Add Task
                    </button>
                    <button
                        onClick={onCloseForm}
                        type="submit"
                        className="flex-1 font-semibold py-3 rounded-lg shadow-lg  text-black p-4    "
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
