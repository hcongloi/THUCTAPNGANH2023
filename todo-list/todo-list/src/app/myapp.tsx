'use client'

import React, { useState } from 'react';


interface Task {
  id: number;
  content: string;
  description: string;
}


export default function MyApp() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskContent, setNewTaskContent] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [editMode, setEditMode] = useState<number | null>(null);
  const [showMoreOptions, setShowMoreOptions] = useState<number | null>(null);


  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      content: newTaskContent,
      description: newTaskDescription,
    };

    setTasks([...tasks, newTask]);
    setNewTaskContent('');
    setNewTaskDescription('');
    setShowAddTaskModal(false);
  };


  const handleEditTask = (taskId: number) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setNewTaskContent(taskToEdit.content);
      setNewTaskDescription(taskToEdit.description);
      setEditMode(taskId);
      setShowAddTaskModal(true);
    }
  };


  const handleSaveTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, content: newTaskContent, description: newTaskDescription } : task
    );

    setTasks(updatedTasks);
    setEditMode(null);
    setNewTaskContent('');
    setNewTaskDescription('');
    setShowAddTaskModal(false);
  };


  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setEditMode(null);
  };


  const handleShowMoreOptions = (taskId: number) => {
    setShowMoreOptions(showMoreOptions === taskId ? null : taskId);
  };


  return (
    <div>
      <main className="flex min-h-screen flex-col justify-between p-24 bg-white text-black">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Today</h2>

          <ul id="task-list" className="space-y-4">
            {tasks.map((task) => (
              <li key={task.id} className="relative p-4 flex justify-between items-center">
                {editMode === task.id ? null : (
                  <div className="flex items-center w-full">
                    <input
                      type="checkbox"
                      className="mr-2 rounded-full appearance-none border-2 border-gray-300 w-4 h-4 checked:bg-blue-500 checked:border-transparent focus:outline-none hover:bg-gray-200"
                      onChange={() => handleDeleteTask(task.id)}
                    />
                    <div className="flex-grow">
                      <div className="text-lg font-semibold">{task.content}</div>
                      {showMoreOptions !== task.id && (
                        <div className="text-sm text-gray-500">{task.description}</div>
                      )}
                    </div>
                  </div>
                )}
                <div className="flex items-center">
                  {editMode === task.id ? null : (
                    <React.Fragment>
                      <button
                        onClick={() => handleEditTask(task.id)}
                        className="text-blue-500 px-2 py-1 rounded hover:bg-blue-200"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleShowMoreOptions(task.id)}
                        className="text-gray-500 px-2 py-1 rounded hover:bg-gray-200"
                      >
                        ...
                      </button>
                    </React.Fragment>
                  )}
                  {showMoreOptions === task.id && (
                    <div className="ml-2 border rounded bg-gray-100 ">
                      <button
                        onClick={() => {
                          handleEditTask(task.id);
                          handleShowMoreOptions(task.id);
                        }}
                        className="text-blue-500 px-2 py-1 rounded hover:bg-blue-200"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteTask(task.id);
                          handleShowMoreOptions(task.id);
                        }}
                        className="text-red-500 px-2 py-1 rounded hover:bg-red-200"
                      >
                        🗑️ Delete
                      </button>
                      {/* Icon Due Date */}
                      <button
                        onClick={() => {

                        }}
                        className="text-purple-500 px-2 py-1 rounded hover:bg-purple-200"
                      >
                        📅 Due Date
                      </button>
                      {/* Icon Priority */}
                      <button
                        onClick={() => {

                        }}
                        className="text-orange-500 px-2 py-1 rounded hover:bg-orange-200"
                      >
                        🚩 Priority
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>


          {showAddTaskModal && (
            <div id="add-task-modal" className="modal bg-white p-4 border rounded flex flex-col">

              <textarea
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
                className="w-full h-24 mb-4 p-2 rounded"
                placeholder="Task Name"
              ></textarea>


              <textarea
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                className="w-full h-16 mb-4 p-2  rounded"
                placeholder="Task Description"
              ></textarea>
              <div className="flex mb-4 border-b-2">
                <button
                  onClick={() => {

                  }}
                  className="text-purple-500 px-2 py-1 m-1 border rounded hover:bg-purple-200"
                >
                  📅 Today
                </button>
                {/* Icon Priority */}
                <button
                  onClick={() => {

                  }}
                  className="text-orange-500 px-2 py-1 m-1 border rounded hover:bg-orange-200"
                >
                  🚩 Priority
                </button>
                <button
                  onClick={() => {

                  }}
                  className="text-orange-500 px-2 py-1 m-1 border rounded hover:bg-orange-200"
                >
                  ⏰ Reminders <span className=" bg-orange-200  text-amber-800">PRO</span>
                </button>
                <button
                  onClick={() => {

                  }}
                  className="text-orange-500 px-2 py-1 m-1 border rounded hover:bg-orange-200"
                >
                  ...
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <button
                  id="inbox-btn"
                  onClick={() => {

                  }}
                  className=" text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
                >
                  📥 Inbox
                </button>

                <div className="flex">
                  <button
                    id="cancel-task-btn"
                    onClick={() => {
                      setNewTaskContent('');
                      setNewTaskDescription('');
                      setEditMode(null);
                      setShowAddTaskModal(false);
                    }}
                    className="bg-gray-100 text-gray px-4 py-2 rounded mr-2 hover:bg-gray-300"
                  >
                    Cancel
                  </button>

                  {editMode !== null ? (
                    <React.Fragment>
                      <button
                        id="save-task-btn"
                        onClick={() => {
                          handleSaveTask(editMode);
                          setShowAddTaskModal(false);
                        }}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        id="submit-task-btn"
                        onClick={() => {
                          handleAddTask();
                          setShowAddTaskModal(false);
                        }}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                      >
                        Add Task
                      </button>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          )}

          {!showAddTaskModal && editMode === null && (
            <button
              id="add-task-btn"
              onClick={() => {
                setShowAddTaskModal(true);
              }}
              className="relative bg-white flex text-black hover:text-orange-500 px-4 py-2 rounded"
            >
              <span className="plus w-6 h-6 rounded-full bg-white text-orange-500 font-bold mr-2 flex items-center justify-center hover:bg-orange-500 hover:text-white">+</span> Add Task
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
