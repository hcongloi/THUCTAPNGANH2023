'use client'

import React, { useState } from 'react';
import Sidebar from './sidebar';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const numTasks = tasks.length;


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
  
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${isSidebarOpen ? 'ml-64' : ''}`}>
  {isSidebarOpen ? (
    <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
  ) : (
    <button
      onClick={handleToggleSidebar}
      className="flex-shrink-0 p-4"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z" clip-rule="evenodd"></path></svg>
    </button>
  )}
      <main className="flex-grow p-8 bg-white text-black transition-transform ease-in-out duration-300">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Today

            {numTasks > 0 && (
              <span className="ml-2 text-sm flex items-center">

                <svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4 mr-1'>

                  <path id="check-circle" fill="#000000"
                    d="M12,1.25A10.75,10.75,0,1,0,22.75,12,10.762,10.762,0,0,0,12,1.25Zm0,20A9.25,9.25,0,1,1,21.25,12,9.26,9.26,0,0,1,12,21.25ZM16.03,9.136a.75.75,0,0,1,0,1.061l-4.666,4.667a.752.752,0,0,1-1.061,0L7.97,12.53a.75.75,0,0,1,1.06-1.06l1.8,1.8L14.97,9.136A.751.751,0,0,1,16.03,9.136Z" />
                </svg>
                {numTasks} task
              </span>

            )}


          </h2>


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
                <div className="flex items-center relative">
                  {editMode === task.id ? null : (
                    <React.Fragment>
                      <button
                        onClick={() => handleEditTask(task.id)}
                        className=" px-2 py-1  rounded hover:bg-gray-200 "
                      >
                        <svg className='w-6 h-6 mr-2' aria-hidden="true"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"></path></g></svg>
                      </button>
                      <button
                        onClick={() => handleEditTask(task.id)}
                        className="px-2 py-1 rounded hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Zm12 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z" clip-rule="evenodd"></path></svg></button>
                      <button
                        onClick={() => handleEditTask(task.id)}
                        className=" px-2 py-1 rounded hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' data-svgs-path="sm1/comments.svg"><path fill="currentColor" fill-rule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"></path></svg></button>
                      <button
                        onClick={() => handleShowMoreOptions(task.id)}
                        className="text-gray-500 px-2 py-1 rounded hover:bg-gray-200 relative"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2'><g fill="none" stroke="currentColor" stroke-linecap="round" transform="translate(3 10)"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></g></svg>
                      </button>
                    </React.Fragment>
                  )}
                  {showMoreOptions === task.id && (
                    <div className="absolute top-full -left-4 ml-2 p-2 flex flex-col border rounded bg-gray-100 bg-opacity-100 z-50 ">
                      <button
                        onClick={() => {
                          handleEditTask(task.id);
                          handleShowMoreOptions(task.id);
                        }}
                        className=" flex items-center px-2 py-1 m-1 hover:bg-gray-200"
                      >
                        <svg className='w-6 h-6 mr-2' aria-hidden="true"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"></path></g></svg>
                        Edit
                      </button>
                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-gray-200"
                      >
                        <svg className='w-6 h-6 mr-2'><path fill="currentColor" d="M10 11.5c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0-8c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm-4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
                        Go to project
                      </button>


                      <h3>Due date</h3>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg className='w-7 h-7 text-red-800' viewBox="0 0 28 28" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="nonzero"><path d="M14 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" opacity=".1"></path><path d="M10.939 21.391a.5.5 0 0 1 .27.653L9.68 25.74a.5.5 0 1 1-.924-.383l1.53-3.695a.5.5 0 0 1 .654-.271zm6.776.27l1.53 3.696a.5.5 0 0 1-.923.383l-1.531-3.696a.5.5 0 0 1 .924-.382zM14 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-7.391 9.061a.5.5 0 0 1-.27.654l-3.696 1.53a.5.5 0 0 1-.383-.923l3.696-1.531a.5.5 0 0 1 .653.27zm15.435-.27l3.696 1.53a.5.5 0 0 1-.383.924l-3.695-1.53a.5.5 0 1 1 .382-.924zM14 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2.643 8.755l3.695 1.53a.5.5 0 1 1-.382.924L2.26 9.68a.5.5 0 1 1 .383-.924zm23.367.27a.5.5 0 0 1-.27.653l-3.696 1.531a.5.5 0 0 1-.382-.924l3.695-1.53a.5.5 0 0 1 .653.27zM9.678 2.26l1.531 3.696a.5.5 0 0 1-.924.382l-1.53-3.695a.5.5 0 1 1 .923-.383zm9.297-.27a.5.5 0 0 1 .27.653l-1.53 3.695a.5.5 0 1 1-.924-.382l1.53-3.696a.5.5 0 0 1 .654-.27z"></path></g></svg>

                        </button>
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg className='w-7 h-7 text-purple-800' viewBox="0 0 28 28" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="nonzero"><path d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z" opacity=".1"></path><path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.109 12.188l.007.01-.004-.005-.003-.005zM21.5 8a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zM19 16.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-3.511 3.512a.5.5 0 0 1-.765-.638l.057-.07L17.292 17H9.5a.5.5 0 0 1-.492-.41L9 16.5a.5.5 0 0 1 .41-.492L9.5 16h7.792l-2.646-2.646a.5.5 0 0 1 .638-.765l.07.057 3.511 3.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"></path></g></svg>

                        </button>
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg className='w-7 h-7' viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path></svg>

                        </button>
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 28 28"><path fill="currentColor" d="M21 11.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-7 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-7 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm14 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path></svg>

                        </button>
                      </div>
                      <h3>Priority</h3>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2 text-red-600' fill="none" viewBox="0 0 24 24" data-icon-name="priority-icon" data-priority="1"><path fill="currentColor" fill-rule="evenodd" d="M4.223 4.584A.5.5 0 0 0 4 5v14.5a.5.5 0 0 0 1 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0 0 20 13V4.5a.5.5 0 0 0-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084Z" clip-rule="evenodd"></path></svg>

                        </button>
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2 text-orange-600' fill="none" viewBox="0 0 24 24" data-icon-name="priority-icon" data-priority="2"><path fill="currentColor" fill-rule="evenodd" d="M4.223 4.584A.5.5 0 0 0 4 5v14.5a.5.5 0 0 0 1 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0 0 20 13V4.5a.5.5 0 0 0-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084Z" clip-rule="evenodd"></path></svg>

                        </button>
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2 text-blue-600' fill="none" viewBox="0 0 24 24" data-icon-name="priority-icon" data-priority="2"><path fill="currentColor" fill-rule="evenodd" d="M4.223 4.584A.5.5 0 0 0 4 5v14.5a.5.5 0 0 0 1 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0 0 20 13V4.5a.5.5 0 0 0-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084Z" clip-rule="evenodd"></path></svg>

                        </button>
                        <button
                          onClick={() => {
                            handleEditTask(task.id);
                            handleShowMoreOptions(task.id);
                          }}
                          className=" px-2 py-1 rounded hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-black stroke-current" fill="none" viewBox="0 0 24 24" data-icon-name="priority-icon" data-priority="2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.223 4.584A.5.5 0 0 0 4 5v14.5a.5.5 0 0 0 1 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0 0 20 13V4.5a.5.5 0 0 0-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084Z"></path>
                          </svg>

                        </button>
                      </div>
                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1 rounded hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m2.414 4.706.094.093a.5.5 0 0 1-.707.708l-.094-.094a2 2 0 0 1 0-2.829l.379-.378a2 2 0 0 1 2.764-.062.5.5 0 0 1-.676.738 1 1 0 0 0-1.381.03l-.379.38a1 1 0 0 0 0 1.414Zm9.412-1.824a1 1 0 0 1 1.381.03l.379.38a1 1 0 0 1 0 1.414l-.094.093a.5.5 0 1 0 .707.708l.094-.094a2 2 0 0 0 0-2.829l-.379-.378a2 2 0 0 0-2.764-.062.5.5 0 1 0 .676.738Zm-.042 9.108A5.482 5.482 0 0 1 8 13.499a5.482 5.482 0 0 1-3.784-1.509l-1.362 1.362a.5.5 0 1 1-.708-.707l1.408-1.408a5.5 5.5 0 1 1 8.892 0l1.408 1.408a.5.5 0 0 1-.707.707l-1.363-1.362ZM8 12.499a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM8 5v3h2a.5.5 0 1 1 0 1H7.5a.5.5 0 0 1-.5-.5V5a.5.5 0 1 1 1 0Z" clip-rule="evenodd"></path></svg>
                        Reminders <span className=" bg-orange-200  text-amber-800 ml-1 p-1 rounded font-">PRO</span>
                      </button>

                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-3 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3 0a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-3 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10.146-1.646a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707L18.293 18H10.45c-.248 0-.45-.224-.45-.5 0-.277.201-.5.45-.5h7.843l-1.147-1.147Z" clip-rule="evenodd"></path></svg>
                        Move to...
                      </button>
                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-gray-200"
                      >
                        <svg className='w-6 h-6 mr-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.26756 5H18C18.5523 5 19 5.44772 19 6V16.7324C19.5978 16.3866 20 15.7403 20 15V6C20 4.89543 19.1046 4 18 4H9C8.25972 4 7.61337 4.4022 7.26756 5ZM6 7H15C16.1046 7 17 7.89543 17 9V18C17 19.1046 16.1046 20 15 20H6C4.89543 20 4 19.1046 4 18V9C4 7.89543 4.89543 7 6 7ZM5 9C5 8.44772 5.44772 8 6 8H15C15.5523 8 16 8.44772 16 9V18C16 18.5523 15.5523 19 15 19H6C5.44772 19 5 18.5523 5 18V9ZM11 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H11V10.5C11 10.2239 10.7761 10 10.5 10C10.2239 10 10 10.2239 10 10.5V13H7.5C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H10V16.5C10 16.7761 10.2239 17 10.5 17C10.7761 17 11 16.7761 11 16.5V14Z" fill="currentColor"></path></svg>
                        Duplicate
                      </button>

                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m8.354 12.95-.708-.707L5.88 14.01a3 3 0 1 0 4.242 4.243l3.536-3.536a3 3 0 0 0 0-4.242l-.707.707a2 2 0 0 1 0 2.828l-3.536 3.536a2 2 0 1 1-2.828-2.829l1.768-1.767Z"></path><path fill="currentColor" d="m15.778 11.182.707.707 1.768-1.768A3 3 0 1 0 14.01 5.88l-3.535 3.535a3 3 0 0 0 0 4.243l.707-.707a2 2 0 0 1 0-2.829l3.535-3.535a2 2 0 1 1 2.829 2.828l-1.768 1.768Z"></path></svg>
                        Copy link to task
                      </button>

                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M3 10.01V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4.01c0 .1.134.142.198.066l.057-.066A3.014 3.014 0 0 1 19 9.401a3 3 0 1 1-.802 4.523c-.064-.076-.198-.033-.198.066V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4.01c0-.569.4-.93.764-1.049.357-.117.86-.065 1.201.341a2 2 0 1 0 0-2.564c-.34.406-.844.458-1.2.341A1.103 1.103 0 0 1 3 10.01ZM5 5a1 1 0 0 0-1 1v4.01c0 .1.135.142.198.066A3.016 3.016 0 0 1 5 9.401a3 3 0 1 1-.802 4.523C4.135 13.848 4 13.89 4 13.99V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.01c0-.569.4-.93.764-1.049.358-.117.86-.065 1.201.341a2 2 0 1 0 0-2.564c-.34.406-.843.458-1.2.341A1.103 1.103 0 0 1 17 10.01V6a1 1 0 0 0-1-1H5Z" clip-rule="evenodd"></path></svg>
                        Add extension...
                      </button>

                      <button
                        onClick={() => {
                          handleDeleteTask(task.id);
                          handleShowMoreOptions(task.id);
                        }}
                        className="text-red-500 px-2 py-1 flex items-center rounded hover:bg-red-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' aria-hidden="true"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect width="14" height="1" x="5" y="6" fill="currentColor" rx="0.5"></rect><path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"></path></g></svg>
                        Delete
                      </button>
                      {/* Icon Due Date */}

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
                  className="text-green-500 flex items-center px-2 py-1 m-1 border rounded hover:bg-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" viewBox="0 0 16 16"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"></path></svg>
                  Today
                </button>

                {/* Icon Priority */}
                <button
                  onClick={() => {

                  }}
                  className=" flex items-center px-2 py-1 m-1 border rounded hover:bg-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 16 16" data-icon-name="priority-icon" data-priority="4"><path fill="currentColor" fill-rule="evenodd" d="M2 3a.5.5 0 0 1 .276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0 1 14 3v6.5a.5.5 0 0 1-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 0 1-1 0V3Zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279Z" clip-rule="evenodd"></path></svg>
                  Priority
                </button>
                <button
                  onClick={() => {

                  }}
                  className=" flex items-center px-2 py-1 m-1 border rounded hover:bg-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m2.414 4.706.094.093a.5.5 0 0 1-.707.708l-.094-.094a2 2 0 0 1 0-2.829l.379-.378a2 2 0 0 1 2.764-.062.5.5 0 0 1-.676.738 1 1 0 0 0-1.381.03l-.379.38a1 1 0 0 0 0 1.414Zm9.412-1.824a1 1 0 0 1 1.381.03l.379.38a1 1 0 0 1 0 1.414l-.094.093a.5.5 0 1 0 .707.708l.094-.094a2 2 0 0 0 0-2.829l-.379-.378a2 2 0 0 0-2.764-.062.5.5 0 1 0 .676.738Zm-.042 9.108A5.482 5.482 0 0 1 8 13.499a5.482 5.482 0 0 1-3.784-1.509l-1.362 1.362a.5.5 0 1 1-.708-.707l1.408-1.408a5.5 5.5 0 1 1 8.892 0l1.408 1.408a.5.5 0 0 1-.707.707l-1.363-1.362ZM8 12.499a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM8 5v3h2a.5.5 0 1 1 0 1H7.5a.5.5 0 0 1-.5-.5V5a.5.5 0 1 1 1 0Z" clip-rule="evenodd"></path></svg>
                  Reminders <span className=" bg-orange-200  text-amber-800 ml-1 p-1 rounded font-">PRO</span>
                </button>
                <button
                  onClick={() => {

                  }}
                  className=" flex items-center  px-2 py-1 m-1 border rounded hover:bg-gray-200"
                >
                  <svg width="15" height="3"><path fill="currentColor" fill-rule="evenodd" d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg></button>
              </div>

              <div className="flex justify-between mb-4">
                <button
                  id="inbox-btn"
                  onClick={() => {

                  }}
                  className=" flex items-center px-4 py-2 rounded hover:bg-gray-200"
                >
                  <svg className="w-5 h-5 mr-1 text-blue-500" viewBox="0 0 16 16" ><g fill="currentColor"><path d="M13.5 9.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9.5h3.75a1.75 1.75 0 0 0 3.5 0h3.75z" opacity="0.1"></path><path d="M10.491 2a2 2 0 0 1 1.923 1.45l1.509 5.28a2 2 0 0 1 .077.55V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.28a2 2 0 0 1 .077-.55l1.509-5.28A2 2 0 0 1 5.509 2h4.982zm0 1H5.51a1 1 0 0 0-.962.725l-1.509 5.28A1 1 0 0 0 3 9.28V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.28a1 1 0 0 0-.038-.275l-1.51-5.28a1 1 0 0 0-.96-.725zM6.25 9a.5.5 0 0 1 .5.5 1.25 1.25 0 0 0 2.5 0 .5.5 0 0 1 .5-.5h1.75a.5.5 0 1 1 0 1h-1.306a2.25 2.25 0 0 1-4.388 0H4.5a.5.5 0 0 1 0-1z"></path></g></svg> Inbox
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
