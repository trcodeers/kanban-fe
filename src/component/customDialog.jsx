
import React, { useState } from 'react';

const CustomDialog = () => {
    const [isOpen, setIsOpen] = useState(true);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <div>
            <button onClick={openDialog}>Open Dialog</button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeDialog}>
                    <div className="bg-white p-6 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
                        <p>This is the dialog content.</p>
                        <button onClick={closeDialog} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDialog;
