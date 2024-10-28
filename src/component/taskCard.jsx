
const TaskCard = ({ title, description, onEdit, onDelete }) => {

    return (
        <>
          <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                    <h2 className="text-xl font-semibold truncate">fvffdsf</h2>
                    <p className="mt-2 text-gray-600 truncate ">
                        fdsfdsf dfdf
                    </p>
                </div>
                <div className="flex justify-between items-center p-4 border-t">
                    <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0l-1.586 1.586 2.828 2.828L17.414 5.414A2 2 0 0017.414 2.586zM14 6l-2-2-8 8v2h2l8-8z" />
                        </svg>
                    </button>
                    <button onClick={onDelete} className="text-red-500 hover:text-red-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 0a2 2 0 00-2 2v1H5a2 2 0 00-2 2v1h14V4a2 2 0 00-2-2h-3V2a2 2 0 00-2-2zm4 5H6v1h8V5zm2 2H4v10a2 2 0 002 2h8a2 2 0 002-2V7zm-2 0v10H6V7h8z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TaskCard;