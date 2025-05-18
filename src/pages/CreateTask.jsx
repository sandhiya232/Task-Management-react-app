import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CreateTask({ tasks, setTasks }) {
    const navigate = useNavigate();
    const { state } = useLocation(); // used for editing
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (state) {
            setTitle(state.title);
            setDescription(state.description);
        }
    }, [state]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: state ? state.id : Date.now(),
            title,
            description,
        };

        const updatedTasks = state
            ? tasks.map((task) => (task.id === state.id ? newTask : task))
            : [...tasks, newTask];

        setTasks(updatedTasks);
        navigate('/');
    };

    return (
        <>

            <div className="max-w-xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                    {state ? 'Edit Task' : 'Create Task'}
                </h2>

                <form className="border rounded-lg p-6 shadow-md bg-white" onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="title">
                            Title:
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter the Task Name"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter task details"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            {state ? 'Update' : 'Save'}
                        </button>

                        <a href="/">
                            <button
                                type="button"  
                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </a>
                    </div>
                </form>
            </div>


        </>

    )
}

export default CreateTask;
