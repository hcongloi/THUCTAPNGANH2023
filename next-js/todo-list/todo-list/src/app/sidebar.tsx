// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 text-gray-600 bg-gray-100 overflow-y-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
      <div className=" ml-2 p-2 flex flex-col ">
                      <button
                        onClick={() => {
                          
                        
                        }}
                        className=" flex items-center px-2 py-1 m-1 mb-4 hover:bg-red-100"
                      >
                        Login 
                      </button>
                      
                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1 text-red-600 font-medium hover:bg-red-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2 ' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.711-16.5a.75.75 0 1 1 1.5 0v4.789H17.5a.75.75 0 0 1 0 1.5h-4.711V17.5a.75.75 0 0 1-1.5 0V12.79H6.5a.75.75 0 1 1 0-1.5h4.789V6.5Z" clip-rule="evenodd"></path></svg> 
                        Add task
                      </button>
                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1 rounded hover:bg-red-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708-.707l-3.563-3.563ZM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"></path></svg>
                        Search
                      </button>

                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-red-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246c.04.159.06.322.06.486V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4Zm0 1a1 1 0 0 0-.97.758L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a.997.997 0 0 0-.03-.242L16.91 5.758a1 1 0 0 0-.97-.758H8.061Zm6.643 10a2.75 2.75 0 0 1-5.41 0H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-2.295Z" clip-rule="evenodd"></path></svg>
                        Inbox
                      </button>
                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-red-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z" clip-rule="evenodd"></path></svg>
                        Upcoming
                      </button>

                      <button
                        onClick={() => {

                        }}
                        className=" flex items-center px-2 py-1 m-1  hover:bg-red-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 6.001h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm-3-1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3Zm-8 9h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Zm9.5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Zm-6.5-8.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Z" clip-rule="evenodd"></path></svg>
                        Filters & Labels
                      </button>


                    </div>
                    <button className='flex items-center px-2 py-1 m-1  hover:bg-red-100'>My project
                    <svg className='w-3 h-3 mr-2 ml-28'> <path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
                    <svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4'>

  <path id="angle-right" fill="#000000"
    d="M9,19.75a.75.75,0,0,1-.53-1.28L14.939,12,8.47,5.53A.75.75,0,0,1,9.53,4.47l7,7a.749.749,0,0,1,0,1.06l-7,7A.744.744,0,0,1,9,19.75Z" />
</svg>
                    </button>
                    <button className='flex items-center px-2 py-1 m-1 mt-80 ml-7  hover:bg-red-100'><svg className='w-3 h-3 mr-3'><path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
                    Add a team</button>
                    
                    <button onClick={onClose} className="absolute top-4 right-14 text-gray-800">
        
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.585 14.888-.101.113c-.286.322-.484.584-.484 1h12c0-.416-.198-.678-.484-1l-.101-.113c-.21-.233-.455-.505-.7-.887-.213-.33-.355-.552-.458-.79-.209-.483-.256-1.036-.4-2.71-.214-3.5-1.357-5.5-3.857-5.5s-3.643 2-3.857 5.5c-.144 1.674-.191 2.227-.4 2.71-.103.238-.245.46-.457.79a6.583 6.583 0 0 1-.701.887Zm10.511-2.313c-.083-.34-.131-.861-.241-2.147-.113-1.811-.469-3.392-1.237-4.544C14.8 4.657 13.57 4 12 4c-1.571 0-2.8.656-3.618 1.883-.768 1.152-1.124 2.733-1.237 4.544-.11 1.286-.158 1.807-.241 2.147-.062.254-.13.373-.46.885a5.182 5.182 0 0 1-.57.722c-.074.082-.15.167-.232.262C5.35 14.786 5 15.266 5 16a1 1 0 0 0 1 1h3a3 3 0 0 0 6 0h3a1 1 0 0 0 1-1c0-.735-.35-1.215-.642-1.557-.082-.095-.158-.18-.232-.262a5.176 5.176 0 0 1-.57-.722c-.33-.512-.398-.631-.46-.885ZM14 17.001h-4a2 2 0 1 0 4 0Z" clip-rule="evenodd"></path></svg>
      </button>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-800">

      <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-2' fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z" clip-rule="evenodd"></path></svg>
      
      </button>
    </div>
  );
};

export default Sidebar;
