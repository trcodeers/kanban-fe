
const TaskForm = () => {

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Create a Task</h2>
            <form>
                <div className="mb-4">
                    <label for="task-title" className="block text-sm font-medium text-gray-700">Task Title</label>
                    <input type="text" id="task-title" name="task-title" required
                        className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        placeholder="Enter task title" />
                </div>
                <div className="mb-4">
                    <label for="task-description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="task-description" name="task-description" required
                        className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        rows="4" placeholder="Enter task description"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Add Task
                    </button>
                </div>
            </form>
        </div>

    )
}

export default TaskForm;