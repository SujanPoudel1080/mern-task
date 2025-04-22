// import React from 'react'
// interface CardPropsInterface{
//     title: string;
//     description: string;
//     createdAt: Date;
// }
// const ProjectCard:React.FC<CardPropsInterface> = ({title, description, createdAt}) => {
//   return (
//     <div className="container my-12 mx-auto px-4 md:px-12">
//     <div className="flex flex-wrap -mx-1 lg:-mx-4">


//         <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


//             <article className="overflow-hidden rounded-lg shadow-lg">

//                 <header className="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 className="text-lg">
//                         <a className="no-underline hover:underline text-black" href="#">
//                             {title}
//                         </a>
//                     </h1>
//                     <p className="text-grey-darker text-sm">
//                         {new Date(createdAt).toLocaleDateString()}
//                     </p>
//                 </header>

//                 <footer className="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a className="flex items-center no-underline hover:underline text-black" href="#">
//                         <p className="ml-2 text-sm">
//                             {description}
//                         </p>
//                     </a>
//                     <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span className="hidden">Like</span>
//                         <i className="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>

//         </div>

        
//     </div>
// </div>
//   )
// }

// export default ProjectCard

import React from 'react';
import { toast } from 'react-toastify';
import server from '../api/server';

interface CardPropsInterface {
    title: string;
    description: string;
    createdAt: Date;
    id: string;
}

const ProjectCard: React.FC<CardPropsInterface> = ({ title, description, createdAt, id }) => {
    console.log('id',id)
    const handleDelete = async (id: string) =>{
        try {
            const deleteItem = await server.delete(`projects/${id}`);
            if(deleteItem){
                
                toast.success(`item deleted successfully`);
            }
          } catch (error:any) {
            toast.error(error?.response?.data?.msg);
          }
    }
  return (
    <div className="my-4 mx-4 px-1 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
      <article className="h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
        <header className="flex items-center justify-between p-4 pb-2 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            <a className="hover:text-blue-600 transition-colors">
              {title}
            </a>
          </h2>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </header>

        <div className="flex-grow p-4">
          <p className="text-gray-600 line-clamp-3 text-sm">
            {description}
          </p>
        </div>

        <footer className="flex items-center justify-between p-4 pt-2 border-t border-gray-100 bg-gray-50">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
            View Details
          </button>
          <div className="flex space-x-2">
            <button 
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Delete project"
              onClick = {() =>{handleDelete(id)}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button 
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Like project"

            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ProjectCard;