import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ tasks, setTasks }) {
  const navigate = useNavigate();

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    navigate('/create', { state: task });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4" >Task Manager</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={() => navigate('/create')}>Create Task</button>
      <table className="w-full border mt-6"  border="1" cellPadding="10" style={{ marginTop: '20px' }}>
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="3">No tasks available.</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td className="border border-gray-300 px-4 py-2">{task.title}</td>
                <td className="border border-gray-300 px-4 py-2">{task.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button  className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => editTask(task)}>Edit</button>
                  <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
